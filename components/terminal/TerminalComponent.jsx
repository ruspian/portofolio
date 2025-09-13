"use client";

import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const TerminalComponent = () => {
  const [lines, setLines] = useState([]);
  const typedInstancesRef = useRef([]);
  const typedElementsRef = useRef([]);
  const terminalBodyRef = useRef(null);
  const timeoutsRef = useRef([]); // simpan semua timeout biar bisa di-clear

  const sequence = [
    { type: "input", text: "cat /my-portfolio/aboutme.json", delay: 1200 },
    {
      type: "code",
      language: "json",
      text: `{\n  "name": "Ruspian Majid",\n  "role": [\n    "Fullstack Web Developer",\n    "Design Graphics",\n    "Tech Enthusiast",\n  ],\n  "location": "Indonesia",\n  "email": "ruspianntb@gmail.com",\n  "github": "https://github.com/ruspian"\n}`,
      delay: 500,
    },
    { type: "input", text: " ", delay: 1000 },
  ];

  useEffect(() => {
    let isCancelled = false; // untuk menghentikan sequence jika component di-unmount

    // Fungsi untuk menjalankan sequence
    const runSequence = async () => {
      // loop sequence
      for (let i = 0; i < sequence.length; i++) {
        const item = sequence[i];
        if (isCancelled) return;

        // delay
        await new Promise((resolve) => {
          const t = setTimeout(resolve, item.delay);
          timeoutsRef.current.push(t);
        });

        // tambahkan item ke state lines
        setLines((prevLines) => [...prevLines, { ...item, key: i }]);

        // buat typed instance
        if (item.type === "input") {
          await new Promise((resolve) => {
            const t = setTimeout(() => {
              if (isCancelled) {
                resolve();
                return;
              }
              const targetElement = typedElementsRef.current[i];
              if (!targetElement) {
                resolve();
                return;
              }

              const typed = new Typed(targetElement, {
                strings: [item.text],
                typeSpeed: 100,
                showCursor: true,
                cursorChar: "▋",
                onComplete: (self) => {
                  if (i < sequence.length - 1) {
                    self.cursor.remove();
                  }
                  resolve();
                },
              });

              typedInstancesRef.current.push(typed);
            }, 100);
            timeoutsRef.current.push(t);
          });
        }
      }
    };

    // jalankan sequence
    runSequence();

    // cleanup
    return () => {
      isCancelled = true;

      // cleanup typed instance
      typedInstancesRef.current.forEach((typedInstance) => {
        typedInstance.destroy();
      });
      typedInstancesRef.current = [];

      // cleanup semua timeout
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, []);

  // scroll ke bawah
  useEffect(() => {
    hljs.highlightAll();
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="w-full min-w-[500px] min-h-[400px] rounded-lg bg-[#282c34] shadow-2xl border border-white/10 flex flex-col">
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
        className="p-5 font-mono text-md sm:text-md text-white overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
      >
        {lines.map((line, index) => {
          let prompt = <span>pian@web ~ % </span>;

          if (line.type === "input") {
            return (
              <p key={line.key + index}>
                {prompt}
                <span
                  ref={(el) => (typedElementsRef.current[line.key] = el)}
                  className="font-mono"
                ></span>
              </p>
            );
          }
          if (line.type === "code") {
            return (
              <pre
                key={line.key + index}
                className="!bg-transparent text-white p-0 m-0"
              >
                <code className={`language-${line.language}`}>{line.text}</code>
              </pre>
            );
          }
          if (line.type === "output") {
            return <p key={line.key + index}>{line.text}</p>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default TerminalComponent;
