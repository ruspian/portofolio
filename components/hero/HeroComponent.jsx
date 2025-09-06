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
          <p className="text-amber-500 text-lg mb-4">Hello Dude!</p>

          <h3 className="text-2xl md:text-4xl font-bold ">
            I'm Ruspian Majid,
          </h3>
          <h3 className="text-2xl md:text-4xl font-bold ">
            a web developer driven by curiosity and passion.
          </h3>

          <p className="text-lg mt-4">
            True understanding is forged through application, not mere study.
            The path is to engage, learn, and create.
          </p>

          <Button color="gold" variant="outlined" className="mt-4" size="large">
            <FaFileDownload className="size-4" />
            <Link href="#">Download My Resume</Link>
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
