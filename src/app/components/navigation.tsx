"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathName = usePathname();

  return (
    <nav className="p-4 text-black bg-gray-400">
      <div className="flex items-center justify-between">
        {/* */}
        <div className="text-lg font-bold sm:text-xl lg:text-2xl">
          <Link href={"/"} className="hover:underline underline-offset-auto">
            SpeedList
          </Link>
        </div>

        {/* Center Nav Links */}
        <div className="flex items-center justify-center gap-8 text-xl sm:gap-10 sm:text-2xl lg:text-4xl">
          <Link
            href={"/"}
            className={`opacity-75 transition-all duration-300 ${
              pathName === "/"
                ? "font-bold text-white"
                : "hover:opacity-100 hover:scale-110 hover:text-green-200 hover:underline underline-offset-4"
            }`}
          >
            Shopping List
          </Link>

          <Link
            href={"/about"}
            className={`opacity-75 transition-all duration-300 ${
              pathName === "/about"
                ? "font-bold text-white"
                : "hover:opacity-100 hover:scale-110 hover:text-green-200 hover:underline underline-offset-8"
            }`}
          >
            About
          </Link>
        </div>

        {/* Leave right element blank */}
        <div></div>
      </div>
    </nav>
  );
}
