"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import { IoImage } from "react-icons/io5";

// Import TipTap
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";

import { TipTapToolbar } from "@/components/tiptap/TiptapComponent";

const BuatProjectPage = () => {
  const [contentHtml, setContentHtml] = useState("");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const editor = useEditor({
    extensions: [
      // StarterKit dikonfigurasi untuk menyertakan Heading level 1, 2, dan 3
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),

      // Ekstensi tambahan yang tidak ada di dalam StarterKit
      Placeholder.configure({ placeholder: "Tulis artikel disini..." }),
      Image,
    ],
    content: contentHtml,
    onUpdate: ({ editor }) => {
      setContentHtml(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: `prose prose-sm sm:prose lg:prose-xl focus:outline-none p-4 border border-gray-300 rounded-b-md min-h-[300px] max-w-none`,
      },
    },
    immediatelyRender: false,
  });

  const handleSaveContent = useCallback(
    async (event) => {
      event.preventDefault();
      // PERBAIKAN: Variabel `selectedCategory` tidak ada, jadi validasinya dihapus sementara
      if (!title || !contentHtml || !file) {
        alert("Judul, gambar utama, dan konten tidak boleh kosong!");
        return;
      }
      // TODO: Tambahkan logika penyimpanan data Anda di sini
      console.log("Menyimpan:", { title, contentHtml, file });
      alert("Project siap disimpan!");
    },
    [title, contentHtml, file]
  );

  // ... (fungsi handleUploadImage Anda tetap sama)

  return (
    <div className="p-4 max-w-4xl mx-auto shadow-lg rounded-lg my-8">
      <h1 className="text-2xl font-bold mb-4">Unggah Project</h1>
      <input
        type="text"
        placeholder="Judul Project"
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="mb-4">
        <input
          type="file"
          id="image"
          // onChange={handleUploadImage} // Ganti dengan fungsi upload gambar utama Anda
          className="hidden"
        />
        <Button className="mb-4">
          <label
            htmlFor="image"
            className="cursor-pointer flex items-center gap-2"
          >
            <IoImage className="size-5" />
            <p>Unggah Gambar Utama</p>
          </label>
        </Button>

        {editor ? (
          <>
            <TipTapToolbar editor={editor} />
            <EditorContent editor={editor} />
          </>
        ) : (
          <div>Memuat editor...</div>
        )}
      </div>

      <button
        onClick={handleSaveContent}
        className="p-2 mt-4 bg-emerald-600 text-white font-semibold rounded-sm hover:bg-emerald-700 transition-colors cursor-pointer"
      >
        Simpan
      </button>
    </div>
  );
};

export default BuatProjectPage;
