"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const links = ["Privacidade", "Termos", "Trabalhe Conosco", "Press Kit"];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.04] py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="flex flex-col gap-1">
            <Image
              src="/logo.svg" /* Nome exato do seu arquivo na pasta public */
              alt="Spot Creators"
              width={160} /* Ajuste a largura do seu logo aqui */
              height={40} /* Ajuste a altura do seu logo aqui */
              priority /* Garante que o logo carregue imediatamente */
              className="w-auto h-[30px] md:h-[40px] group-hover:opacity-80 transition-opacity duration-300"
            />
          </div>
          <span className="font-headline font-black text-3xl text-white tracking-tighter uppercase">
            Spot Creators
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="font-headline font-bold text-xs tracking-widest uppercase text-white/25 hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-12" />

        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-zinc-700 font-bold leading-relaxed">
          © 2026 Spot Creators Agency · SPOT CREATORS E COMUNICAÇÃO LTDA · CNPJ
          55.150.895/0001-32
          <br />
          Acelerando o futuro da economia criativa.
        </p>
      </div>
    </footer>
  );
}
