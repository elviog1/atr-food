import React from "react";

export default function AboutComponent() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex flex-col gap-4 items-center">
        <h2 className="text-4xl text-yellow-600">Sobre Nosotros</h2>
        <p className="text-xl">
          En Monte Chingolo la movida es así! Vení a nuestro antro de comida
          rápida y probá los sabores que te van a dejar re loco. Acá, la onda es
          pura, como el asado de los domingos. 🍔🍟 La buena comida se siente en
          el barrio. ¡Caé con tus compas y dale sabor a tu día!
        </p>
      </div>
    </div>
  );
}
