"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav>
      <div className="flex items-center justify-center gap-10 p-4 text-xl text-black bg-gray-400 sm:text-2xl lg:text-4xl">
        {/* Shopping List Link */}
        <Link
          href={"/"}
          className={`opacity-75 duration-300 transition-all ${
            pathName === "/"
              ? "font-bold text-white"
              : "hover:opacity-100 hover:scale-130 hover:text-green-200 hover:underline underline-offset-4"
          }`}
        >
          Shopping List
        </Link>

        <Link
          href={"/about"}
          className={`opacity-75 duration-300 transition-all ${
            pathName === "/about"
              ? "font-bold text-white"
              : "hover:opacity-100 hover:scale-130 hover:text-green-200 hover:underline underline-offset-8"
          }`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
