import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 fixed w-full bg-black font-bold z-10">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          ATR
        </h1>
      </div>
      <ul className="flex gap-4 text-sm md:text-base lg:text-lg xl:text-xl">
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
