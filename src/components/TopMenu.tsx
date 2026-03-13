import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b-2 border-slate-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex flex-row-reverse items-center pl-6 border-l-2 border-slate-900/20 h-full">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src={"/img/logo.png"}
            className="h-14 w-auto object-contain transition-transform hover:scale-110 duration-300 filter drop-shadow-md"
            alt="logo"
            width={400}
            height={400}
            priority
          />
        </Link>

        <div className="flex flex-row-reverse items-center gap-8 px-8 h-full">
          <TopMenuItem title="Booking" pageRef="booking" />
          {/* <TopMenuItem title="About" pageRef="about" /> */}
        </div>
      </div>
    </nav>
  );
}
