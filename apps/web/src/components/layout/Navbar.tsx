"use client";

import { ShoppingCart, Heart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <h1 className="text-2xl font-black tracking-widest text-fuchsia-500">
          Caramelo.Store
        </h1>

        <nav className="hidden gap-8 font-medium lg:flex">
          <a href="#">Inicio</a>
          <a href="#">Tienda</a>
          <a href="#">Categorías</a>
          <a href="#">Ofertas</a>
        </nav>

        <div className="flex gap-5">
          <Search className="cursor-pointer hover:text-fuchsia-500" />
          <Heart className="cursor-pointer hover:text-fuchsia-500" />
          <ShoppingCart className="cursor-pointer hover:text-fuchsia-500" />
        </div>

      </div>
    </header>
  );
}