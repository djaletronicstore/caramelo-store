"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-black to-fuchsia-950 opacity-90" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mb-6 text-7xl font-black"
        >
          Caramelo.Store
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mb-8 text-2xl font-semibold text-fuchsia-400"
        >
          TU MUNDO • TU ESTILO • TU JUEGO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mx-auto mb-10 max-w-xl text-zinc-300"
        >
          Descubre figuras, mangas, accesorios gamer y artículos exclusivos
          para verdaderos fanáticos del anime.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: .95 }}
          className="rounded-full bg-fuchsia-600 px-8 py-4 text-lg font-bold transition hover:bg-fuchsia-500"
        >
          Comprar Ahora
        </motion.button>

      </div>

    </section>
  );
}