// components/Terminal.jsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const TerminalComponent = () => {
  const [lines, setLines] = useState([]);

  const typedRefs = useRef([]);
  const terminalBodyRef = useRef(null);

  // Mendefinisikan seluruh urutan animasi
  const sequence = [
    { type: "input", text: "cat aboutme.json", delay: 1200 },
    {
      type: "code",
      language: "json",
      text: `{\n  "name": "Ruspian Majid",\n  "role": [\n    "Web Developer",\n    "Design Graphics",\n    "Fullstack Developer",\n    "Tech Enthusiast"\n  ],\n  "location": "Indonesia",\n  "email": "ruspianntb@gmail.com",\n  "github": "https://github.com/ruspian",\n}`,
      delay: 500,
    },
    { type: "input", text: " ", delay: 1000 },
  ];

  useEffect(() => {
    // Fungsi untuk menjalankan urutan animasi secara sekuensial (satu per satu)
    const runSequence = async () => {
      // Loop melalui setiap item dalam 'sequence'
      for (let i = 0; i < sequence.length; i++) {
        const item = sequence[i];

        // Tunggu sesuai 'delay' yang ditentukan sebelum menampilkan item berikutnya
        await new Promise((resolve) => setTimeout(resolve, item.delay));

        if (item.type === "input") {
          // Tambahkan baris input baru ke state untuk dirender
          setLines((prevLines) => [...prevLines, { ...item, key: i }]);

          // Tunggu DOM diperbarui, lalu jalankan animasi mengetik
          await new Promise((resolve) => {
            // timeout untuk memastikan elemen ref sudah siap di DOM
            setTimeout(() => {
              const typed = new Typed(typedRefs.current[i], {
                strings: [item.text],
                typeSpeed: 100,
                showCursor: true,
                cursorChar: "▋",
                onComplete: (self) => {
                  // Hanya hapus kursor jika BUKAN perintah terakhir
                  if (i < sequence.length - 1) {
                    self.cursor.remove();
                  }
                  resolve(); // Lanjutkan ke item berikutnya dalam urutan
                },
              });
            }, 100);
          });
        } else {
          // Untuk tipe 'output' atau 'code', langsung tambahkan ke state untuk ditampilkan
          setLines((prevLines) => [...prevLines, { ...item, key: i }]);
        }
      }
    };

    runSequence();

    // Fungsi cleanup untuk membersihkan instance Typed.js saat komponen dibongkar
    return () => {
      typedRefs.current.forEach((el) => {
        if (el && el.typed) {
          el.typed.destroy();
        }
      });
    };
  }, []);

  useEffect(() => {
    // Jalankan syntax highlighting setiap kali ada baris baru
    hljs.highlightAll();
    // Auto-scroll ke bagian bawah terminal
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="w-full min-w-[500px]  min-h-[400px] rounded-lg bg-[#282c34] shadow-2xl border border-white/10 flex flex-col">
      {/* Terminal Header */}
      <div className="h-7 bg-gray-200 rounded-t-lg flex items-center px-2.5 flex-shrink-0">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs text-gray-800 font-bold">
          pian -- -zsh -- 80x24
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        className="p-5 font-mono text-md sm:text-md text-white overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 "
      >
        {lines.map((line) => {
          // Menentukan prompt berdasarkan apakah ini perintah pertama atau bukan
          const prompt = line.isInitial ? (
            <span>pian@web ~ % </span>
          ) : (
            <span>
              pian@web{" "}
              <span className="text-green-500 font-mono">MyPortofolio</span> %{" "}
            </span>
          );

          if (line.type === "input") {
            return (
              <p key={line.key}>
                {prompt}
                {/* Elemen ini menjadi target untuk animasi Typed.js */}
                <span
                  ref={(el) => (typedRefs.current[line.key] = el)}
                  className="font-mono"
                ></span>
              </p>
            );
          }
          if (line.type === "code") {
            return (
              <pre
                key={line.key}
                className="!bg-transparent text-white p-0 m-0"
              >
                <code className={`language-${line.language}`}>{line.text}</code>
              </pre>
            );
          }
          if (line.type === "output") {
            return <p key={line.key}>{line.text}</p>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default TerminalComponent;
