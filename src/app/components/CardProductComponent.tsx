import Image from "next/image";
import React from "react";

export default function CardProductComponent({ product }: any) {
  return (
    <div className="flex flex-col  items-center justify-between bg-red-950 rounded-xl w-72 hover:scale-105 duration-300">
      <span className="py-3 font-bold">{product.name.toUpperCase()}</span>
      <Image
        className="h-72 object-cover"
        width={288}
        height={288}
        alt="Producto"
        src={product.image}
      />
      <p className="text-sm p-3 text-center">{product.description}</p>
    </div>
  );
}
