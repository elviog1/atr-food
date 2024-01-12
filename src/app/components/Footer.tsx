import React from "react";

export default function Footer() {
  return (
    <footer className="flex w-full py-10">
      <div className="text-center flex gap-4 justify-around flex-wrap w-full">
        <p>© 2024 ATR.Todos los derechos reservados.</p>
        <p>
          Creado por{" "}
          <a
            href="https://galeanoelvio.vercel.app/"
            target="_blank"
            className="text-yellow-600 hover:text-yellow-400"
          >
            elviog1.
          </a>
        </p>
      </div>
    </footer>
  );
}
