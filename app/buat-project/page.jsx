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
import imageCompression from "browser-image-compression";

import { supabase } from "@/utils/supabase";

const BUCKET_NAME_SUPABASE = "portfolio";

const BuatProjectPage = () => {
  const [contentHtml, setContentHtml] = useState("");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const router = useRouter();
  const { status } = useSession();

  // redirect jika user belum login
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),

      // Ekstensi tambahan yang tidak ada di dalam StarterKit
      Placeholder.configure({ placeholder: "Deskripsi Project" }),
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

  // Fungsi untuk menyimpan konten
  const handleSaveContent = useCallback(
    async (event) => {
      event.preventDefault(); // mencegah reload halaman

      // Validasi judul, konten, dan kategori
      if (!title || !contentHtml) {
        alert("Isi form judul dan deskripsi!");
        return;
      }

      // Validasi file gambar
      if (!file) {
        alert("Mohon unggah gambar utama untuk postingan!");
        return;
      }

      try {
        const response = await fetch("/api/project", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            content: { html: contentHtml },
            image: file,
            githubUrl: githubUrl,
            webUrl: webUrl,
          }),
        });

        if (!response.ok) {
          // Ambil pesan error dari backend jika ada
          const errorData = await response.json();
          throw new Error(errorData.message || "Gagal membuat postingan");
        }

        // hapus editor, judul dan gambar setelah berhasil

        alert(response.statusText);
        router.push(`/projects`);
      } catch (error) {
        alert("Gagal membuat postingan: " + error.message);
      }
    },
    [title, contentHtml, file] // reload saat ada perubahan pada judul, konten, dan gambar
  );

  // fungsi untuk mengupload gambar ke supabase
  const handleUploadImage = useCallback(async (event) => {
    // ambil gambar dari inputan user
    const image = event.target.files[0];

    // pastikan image ada
    if (!image) {
      alert("Tidak ada gambar yang dipilih!");
      return;
    }

    // buat variabel untuk menyimpan gambar
    let fileToUpload = image;

    try {
      const options = {
        maxSizeMB: 0.8,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      // kompres gambar
      const compressedFile = await imageCompression(image, options);

      // pastikan ukuran gambar tidak melebihi 4MB
      if (compressedFile.size > 4 * 1024 * 1024) {
        alert("Ukuran file maksimal adalah 4MB!");
        return;
      }
      fileToUpload = compressedFile;
    } catch (error) {
      console.error("Error kompresi gambar:", error);
    }

    try {
      // buat nama file unik
      const fileExt = fileToUpload.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 15)}.${fileExt}`;
      const filePath = fileName;

      // Upload ke Supabase
      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME_SUPABASE)
        .upload(filePath, fileToUpload, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Error unggah gambar:", uploadError);
        alert("Gagal mengunggah gambar!");
        return;
      }

      // Ambil URL publik
      const { data: publicUrlData } = supabase.storage
        .from(BUCKET_NAME_SUPABASE)
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        setFile(publicUrlData.publicUrl);
        alert("Gambar berhasil diunggah!");
      }
    } catch (err) {
      console.error(`Gagal mengunggah '${image.name}': ${err.message}`);
      alert("Terjadi kesalahan saat mengunggah gambar");
    }
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto shadow-lg rounded-lg my-8">
      <h1 className="text-2xl font-bold mb-4">Unggah Project</h1>
      <input
        type="text"
        placeholder="Judul Project"
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="url"
        placeholder="Github Url"
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setGithubUrl(e.target.value)}
      />

      <input
        type="url"
        placeholder="Web Url"
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setWebUrl(e.target.value)}
      />

      <div className="mb-4">
        <input
          type="file"
          id="image"
          onChange={handleUploadImage}
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

        <div className="mb-4">
          {file && (
            <img
              src={file}
              alt="Gambar Utama"
              className="w-[400px] h-[200px] object-cover"
            />
          )}
        </div>

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
