import React from "react";
import TerminalComponent from "../terminal/TerminalComponent";

const HeroComponent = () => {
  return (
    <main className="bg-gray-800 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full flex justify-start lg:justify-center">
        <TerminalComponent />
      </div>

      {/* Letakkan sisa konten portofolio Anda di sini */}
      {/* <section className="mt-16"> ... </section> */}
    </main>
  );
};

export default HeroComponent;
