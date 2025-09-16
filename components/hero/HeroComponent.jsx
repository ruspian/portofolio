import React from "react";
import TerminalComponent from "../terminal/TerminalComponent";
import { Button } from "antd";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

const HeroComponent = () => {
  return (
    <main className="mx-auto">
      <div className="h-[550px] flex-col md:flex-row flex  px-10 gap-4 mt-10">
        <section className="mt-16 flex-1/2 items-start justify-start">
          <p className="text-amber-500 text-lg mb-4">Halo Sobat!</p>

          <h3 className="text-2xl md:text-4xl font-bold ">
            Saya Ruspian Majid,
          </h3>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-600">
            seorang Web Developer yang melihat kode sebagai seni dan hasilnya
            sebagai karya.
          </h3>

          <p className="text-lg mt-4">
            Saya percaya, kemampuan tidak hanya lahir dari teori, melainkan dari
            praktek, pengalaman, dan karya nyata.
          </p>

          <Button
            color="gold"
            variant="outlined"
            className="mt-4 hover:scale-110 transition-all duration-300 ease-in-out"
            size="large"
          >
            <FaFileDownload className="size-4 hover:animate-bounce" />
            <a href="/cvsaya.pdf" download>
              Unduh CV Saya
            </a>
          </Button>
        </section>

        <div className="items-end justify-start md:justify-center flex-1 hidden md:block">
          <TerminalComponent />
        </div>
      </div>
    </main>
  );
};

export default HeroComponent;
