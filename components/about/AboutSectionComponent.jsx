import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const AboutSectionComponent = () => {
  return (
    <div className="mx-auto px-10 py-10 ">
      <h1 className="text-4xl font-bold text-amber-500 text-center">
        Sedikit Tentang Saya
      </h1>
      <div className="border-[1px] border-slate-400 w-20 mx-auto my-2"></div>

      <div className="flex md:flex-row gap-4 flex-col-reverse">
        <div className="mt-10 flex flex-col gap-4 flex-1">
          <h3 className="text-2xl font-bold text-amber-500 mb-2">
            Izinkan saya memperkenalkan diri
          </h3>
          <p className="text-lg text-start text-background">
            Halo! Saya Ruspian Majid. Saya sedang studi di Universitas Pohuwato
            mengambil program studi ilmu komputer jurusan teknik informatika.
            Langsung saja, saya membantu orang dan bisnis untuk tampil lebih
            baik di dunia digital.
          </p>
          <p className="text-lg text-start text-background">
            Saya merancang dan membangun website atau aplikasi agar berfungsi
            lancar dan sesuai kebutuhan. Tidak hanya itu, saya juga memastikan
            tampilannya menarik dan mudah digunakan oleh siapa saja.
          </p>
          <p className="text-lg text-start text-background">
            Karena saya suka mengikuti perkembangan teknologi, saya bisa
            memberikan solusi yang modern dan tidak ketinggalan zaman. Jika Anda
            punya ide yang ingin diwujudkan, saya siap membantu!
          </p>
        </div>

        {/* foto */}
        <div className="flex flex-col items-center justify-center md:w-1/3 mt-10 gap-4">
          <Image src="/foto1.png" width={250} height={300} alt="foto ruspian" />

          <div className="flex flex-row gap-6 items-center justify-center">
            <Link
              href="https://www.linkedin.com/in/ruspian-majid/"
              target="_blank"
            >
              <FaLinkedin className="text-2xl text-amber-500" />
            </Link>

            <Link href="https://wa.me/6282293308893" target="_blank">
              <FaWhatsapp className="text-2xl text-amber-500" />
            </Link>
            <Link href="https://github.com/ruspian" target="_blank">
              <FaGithub className="text-2xl text-amber-500" />
            </Link>
            <Link
              href="https://www.instagram.com/p.abe_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-amber-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionComponent;
