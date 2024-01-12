"use client";
import React, { useState } from "react";
export default function CheckboxProduct({ onTypeChange }: any) {
  const [selectedType, setSelectedType] = useState(null);
  const handleTypeChange = (type: any) => {
    setSelectedType(type);
    onTypeChange(type);
  };
  return (
    <div className="flex items-center space-x-4 text-xl font-bold">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio"
          name="radioOption"
          value="comida"
          checked={selectedType === "comida"}
          onChange={() => handleTypeChange("comida")}
        />
        <span className="ml-2">Comidas</span>
      </label>

      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio"
          name="radioOption"
          value="bebida"
          checked={selectedType === "bebida"}
          onChange={() => handleTypeChange("bebida")}
        />
        <span className="ml-2">Bebidas</span>
      </label>
    </div>
  );
}
