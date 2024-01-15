import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATR - A Todo Ritmo",
  description: "Local de comida rapida en Monte Chingolo - Lanus",
  keywords:
    "Lanús, Monte Chingolo, ATR, A Todo Ritmo, Comidas, Bebidas, Delivery ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-black text-white min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
