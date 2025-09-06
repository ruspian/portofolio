// components/HeaderComponent.jsx

"use client"; // <-- Tambahkan ini di baris paling atas

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import NavMobileComponent from "@/components/humberger/NavMobileComponent";

const HeaderComponent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Fungsi yang akan dijalankan setiap kali event scroll terjadi
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // User sedang scroll ke Bawah -> Sembunyikan header
      setIsVisible(false);
    } else {
      // User sedang scroll ke Atas -> Tampilkan header
      setIsVisible(true);
    }

    // Perbarui posisi scroll terakhir
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // Tambahkan event listener saat komponen pertama kali di-mount
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen di-unmount untuk mencegah memory leak
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    // Tambahkan class untuk posisi, transisi, dan visibilitas
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 md:px-20 md:py-4 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between py-4 shadow-lg px-3 rounded-md bg-white">
        {" "}
        {/* Tambahkan background agar tidak transparan */}
        <div className="hidden md:flex flex-1 gap-2">
          <FaFacebook className="size-5" />
          <FaInstagram className="size-5" />
          <FaWhatsapp className="size-5" />
          <FaGithub className="size-5" />
        </div>
        <div className="flex flex-1 font-bold text-xl md:items-center md:justify-center md:hidden">
          <Image src="/logo.png" width={50} height={50} alt="logo image " />
        </div>
        <div className="flex flex-1 gap-5 text-sm items-center justify-end">
          <Link href="/" className="hidden md:block">
            Home
          </Link>
          <Link href="/kontak" className="hidden md:block">
            About
          </Link>
          <Link href="/about" className="hidden md:block">
            Skill
          </Link>
          <Link href="/about" className="hidden md:block">
            Projects
          </Link>
          <Link href="/about" className="hidden md:block">
            Contact
          </Link>
          <NavMobileComponent />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
