import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BannerComponent() {
  return (
    <div className="flex flex-col items-center gap-4 pt-16">
      <h2 className="text-4xl font-bold">A TODO RITMO</h2>
      <Image src="/atr.png" alt="ATR Logo" width={300} height={300} />
      <h2 className="text-xl">🌶️ Tierra de picantes 🌶️</h2>
      <div className="flex justify-between gap-5">
        <Link
          className="bg-red-950 hover:bg-red-800 duration-300 p-3 rounded-md md:text-md sm:text-sm xl:text-xl font-bold flex gap-2 items-center"
          href="/products"
        >
          <Image width={30} height={30} alt="Whatsapp" src={"/food.svg"} />
          Catalogo
        </Link>
        <div className="flex ">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}`}
            className="bg-red-950 hover:bg-red-800 duration-300 p-3 rounded-md md:text-md sm:text-sm xl:text-xl font-bold flex gap-2 items-center"
          >
            <Image width={30} height={30} alt="Whatsapp" src={"/wp.svg"} />
            Delivery
          </a>
        </div>
      </div>
    </div>
  );
}
