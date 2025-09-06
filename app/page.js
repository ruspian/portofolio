import HeroComponent from "@/components/hero/HeroComponent";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <main>
      <HeroComponent />

      <div className="border-[1px] border-slate-400 mx-auto"></div>

      {/* about */}
      <section className="bg-foreground h-auto">
        <div className="mx-auto px-10 py-10 ">
          <h1 className="text-2xl font-bold text-amber-500 text-center">
            About Me
          </h1>
          <div className="border-[1px] border-slate-400 w-20 mx-auto my-2"></div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="mt-10 flex flex-col gap-4 flex-1">
              <h3 className="text-2xl font-bold text-amber-500 mb-2">
                Izinkan saya memperkenalkan diri
              </h3>
              <p className="text-lg text-start text-background">
                Halo! Saya Ruspian Majid. Sederhananya, saya membantu orang dan
                bisnis untuk tampil lebih baik di dunia digital.
              </p>
              <p className="text-lg text-start text-background">
                Saya merancang dan membangun website atau aplikasi agar
                berfungsi lancar dan sesuai kebutuhan. Tidak hanya itu, saya
                juga memastikan tampilannya menarik dan mudah digunakan oleh
                siapa saja.
              </p>
              <p className="text-lg text-start text-background">
                Karena saya suka mengikuti perkembangan teknologi, saya bisa
                memberikan solusi yang modern dan tidak ketinggalan zaman. Jika
                Anda punya ide yang ingin diwujudkan, saya siap membantu!
              </p>

              <h3 className="text-2xl font-bold text-amber-500 mb-2">
                Punya ide? Mari kita wujudkan bersama
              </h3>
              <p className="text-lg text-start text-background">
                Anda dapat terhubung dengan saya via WhatsApp, Anda juga dapat
                terhubung dengan saya di LinkedIn untuk jaringan profesional,
                melihat proyek saya di GitHub, dan melihat sekilas kehidupan
                saya di Instagram.
              </p>

              <div className="flex flex-row gap-2">
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

            {/* foto */}
            <div className="flex items-start justify-center w-1/3 mt-10">
              <Image
                src="/foto1.png"
                width={250}
                height={300}
                alt="foto ruspian"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
