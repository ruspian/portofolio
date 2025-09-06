"use client";

import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";

const NavMobileComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* humberger menu */}
      <div className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoClose className="size-6" />
        ) : (
          <IoMenu className="size-6" />
        )}
      </div>

      {/* humberger item */}
      {isOpen && (
        <div
          className={`absolute top-[70px] h-[calc(100vh-100px)] left-0 w-full flex flex-col gap-4 text-xl items-start px-4 justify-start bg-white`}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skill">Skill</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default NavMobileComponent;
