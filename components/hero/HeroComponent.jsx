import React from "react";
import TerminalComponent from "../terminal/TerminalComponent";
import Image from "next/image";

const HeroComponent = () => {
  return (
    <main className="mx-auto">
      <div className="bg-slate-900 min-h-screen flex items-center justify-center p-4 gap-4 relative">
        <div className="w-full md:ml-30 items-center justify-start lg:justify-center">
          <TerminalComponent />
        </div>

        <section className="mt-16 absolute right-20 bottom-0">
          <Image src="/foto.png" alt="Foto" width={480} height={480} />
        </section>
      </div>
    </main>
  );
};

export default HeroComponent;
