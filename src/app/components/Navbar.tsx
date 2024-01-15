import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 sticky top-0 w-full bg-black font-bold z-10">
      <div>
        <Image src="/atr.png" alt="ATR Logo" width={60} height={60} />
      </div>
      <ul className="flex items-center gap-4 text-sm md:text-base lg:text-lg xl:text-xl">
        <li>
          <Link href="/" className="hover:text-yellow-600">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-yellow-600">
            Productos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
