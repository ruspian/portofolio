// components/tiptap/TiptapToolbar.jsx

"use client";

import React from "react";
import {
  MdOutlineFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdCode,
  MdOutlineFormatListBulleted,
  MdUndo,
  MdRedo,
} from "react-icons/md";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { TbBlockquote } from "react-icons/tb";
import { RiListOrdered2, RiParagraph } from "react-icons/ri";
import { IoImage } from "react-icons/io5";
import imageCompression from "browser-image-compression";
import { supabase } from "@/utils/supabase";

const BUCKET_NAME_SUPABASE = "portfolio";

// --- Komponen Tombol Toolbar ---
export const ToolbarButton = ({
  onClick,
  isActive,
  isDisabled = false,
  children,
  ariaLabel,
}) => (
  <button
    // PERBAIKAN: Menambahkan type="button" adalah praktik terbaik untuk mencegah submit form
    type="button"
    onClick={onClick}
    disabled={isDisabled}
    className={`p-2 rounded cursor-pointer transition-colors ${
      isActive
        ? "bg-emerald-500 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

// --- Komponen Toolbar Utama ---
export const TipTapToolbar = React.memo(({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-t-md">
      {/* Undo/Redo */}
      <ToolbarButton
        onClick={() => editor.chain().focus().undo().run()}
        isDisabled={!editor.can().chain().focus().undo().run()}
        ariaLabel="Urungkan"
      >
        <MdUndo className="size-5" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().redo().run()}
        isDisabled={!editor.can().chain().focus().redo().run()}
        ariaLabel="Ulangi"
      >
        <MdRedo className="size-5" />
      </ToolbarButton>

      {/* Formatting Dasar */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        ariaLabel="Tebal"
      >
        <MdOutlineFormatBold className="size-5" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        ariaLabel="Miring"
      >
        <MdFormatItalic className="size-5" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
        ariaLabel="Coret"
      >
        <MdFormatStrikethrough className="size-5" />
      </ToolbarButton>

      {/* Tipe Blok */}
      <ToolbarButton
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive("paragraph")}
        ariaLabel="Paragraf"
      >
        <RiParagraph className="size-5" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive("heading", { level: 1 })}
        ariaLabel="Judul 1"
      >
        <LuHeading1 className="size-5" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
        ariaLabel="Judul 2"
      >
        <LuHeading2 className="size-5" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive("heading", { level: 3 })}
        ariaLabel="Judul 3"
      >
        <LuHeading3 className="size-5" />
      </ToolbarButton>

      {/* List */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
        ariaLabel="Daftar Poin"
      >
        <MdOutlineFormatListBulleted className="size-5" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
        ariaLabel="Daftar Bernomor"
      >
        <RiListOrdered2 className="size-5" />
      </ToolbarButton>

      {/* Kutipan & Kode Blok */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
        ariaLabel="Kutipan"
      >
        <TbBlockquote className="size-5" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
        ariaLabel="Kode Blok"
      >
        <MdCode className="size-5" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          // Buat input file tersembunyi
          const input = document.createElement("input");
          input.type = "file";
          input.accept = "image/*";
          input.onchange = async () => {
            const file = input.files?.[0];
            if (!file) return;

            try {
              // Kompres file gambar
              const compressed = await imageCompression(file, {
                maxSizeMB: 0.8,
              });

              // Buat nama unik
              const fileName = `${Date.now()}-${compressed.name}`;

              // 3. Upload ke Supabase Storage
              const { error: uploadError } = await supabase.storage
                .from(BUCKET_NAME_SUPABASE)
                .upload(fileName, compressed, {
                  contentType: compressed.type,
                  upsert: false, // biar tidak overwrite
                });

              if (uploadError) {
                console.error("Upload error:", uploadError);
                alert("Gagal upload ke Supabase!");
                return;
              }

              // Ambil URL publik
              const { data: publicData } = supabase.storage
                .from(BUCKET_NAME_SUPABASE)
                .getPublicUrl(fileName);

              const imageUrl = publicData?.publicUrl;

              // Masukkan gambar ke editor
              if (editor && imageUrl) {
                editor.chain().focus().setImage({ src: imageUrl }).run();
              }
            } catch (err) {
              console.error("Gagal upload gambar:", err);
              alert("Upload gagal");
            }
          };
          input.click(); // buka file picker
        }}
        ariaLabel="Unggah Gambar"
      >
        <IoImage className="size-5" />
      </ToolbarButton>
    </div>
  );
});

// PERBAIKAN: Menambahkan display name membantu saat debugging dengan React DevTools
TipTapToolbar.displayName = "TipTapToolbar";
