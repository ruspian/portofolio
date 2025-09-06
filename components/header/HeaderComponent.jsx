import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderComponent = () => {
  return (
    <header className="bg-gray-800 p-4 border-b border-gray-700">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={70} height={50} />
            <h3 className="text-gray-300 font-bold">Ruspian Majid</h3>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/skill">Skill</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
