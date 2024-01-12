"use client";
import React, { useState, useEffect } from "react";
import CardProductComponent from "./CardProductComponent";
import CheckboxProduct from "./CheckboxProduct";

interface Product {
  id: string;
  type: string;
  name: string;
  description: string;
  image: string;
}

export default function ProductsComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedType, setSelectedType] = useState(null);
  const handleTypeChange = (type: any) => {
    setSelectedType(type);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const csv = await fetch(`${process.env.NEXT_PUBLIC_DB_GOOGLE_SHEETS}`, {
          cache: "no-store",
        }).then((res) => res.text());

        const productsData = csv
          .split("\n")
          .slice(1)
          .map((row) => {
            const [id, name, description, image, type] = row.split(",");
            return { id, name, description, image, type };
          });
        console.log(productsData);

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const productsFiltered = selectedType
    ? products.filter(
        (product) => product.type.replace("\r", "") === selectedType
      )
    : products;

  return (
    <div className="flex flex-col  gap-4 items-center">
      <CheckboxProduct onTypeChange={handleTypeChange} />
      <div className="flex gap-5 justify-center flex-wrap">
        {productsFiltered.map((product) => (
          <CardProductComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
