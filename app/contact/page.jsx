import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="mx-auto px-10 py-10 bg-foreground">
      <h1 className="text-4xl font-bold text-amber-500 text-center">
        Hubungi Saya
      </h1>
      <div className="border-[1px] border-slate-400 w-20 mx-auto my-2"></div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold text-amber-500 mb-2">
          Punya ide? Mari kita wujudkan bersama
        </h3>
        <p className="text-lg text-start text-background">
          Anda dapat terhubung dengan saya via WhatsApp, Anda juga dapat
          terhubung dengan saya di LinkedIn untuk jaringan profesional, melihat
          proyek saya di GitHub, dan melihat sekilas kehidupan saya di
          Instagram.
        </p>
      </div>

      <div className="flex flex-row gap-6 items-start justify-start mt-8">
        <Link href="https://www.linkedin.com/in/ruspian-majid/" target="_blank">
          <FaLinkedin className="size-8 hover:scale-150 duration-300 ease-in-out text-amber-500" />
        </Link>

        <Link href="https://wa.me/6282293308893" target="_blank">
          <FaWhatsapp className="size-8 hover:scale-150 duration-300 ease-in-out text-amber-500" />
        </Link>
        <Link href="https://github.com/ruspian" target="_blank">
          <FaGithub className="size-8 hover:scale-150 duration-300 ease-in-out text-amber-500" />
        </Link>
        <Link
          href="https://www.instagram.com/p.abe_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="size-8 hover:scale-150 duration-300 ease-in-out text-amber-500" />
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
