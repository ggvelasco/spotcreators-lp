"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const ChromaGrid = dynamic(() => import("./ChromaGrid"), {
  ssr: false,
});

const creators = [
  {
    name: "Bento Ribeiro",
    handle: "@ribeirobentto",
    tags: "Humor • Cultura Pop",
    img: "/influencers/ribeirobentto.webp",
  },
  {
    name: "Mab",
    handle: "@mab_horse",
    tags: "Música • Lifestyle",
    img: "/influencers/mab_horse.webp",
  },
  {
    name: "Tuitabi",
    handle: "@tuitabi",
    tags: "Games • Pop",
    img: "/influencers/tuitabi.webp",
  },
  {
    name: "Dengoso",
    handle: "@dengoso",
    tags: "Gaming • Fortnite",
    img: "/influencers/dengoso.webp",
  },
  {
    name: "Kalera",
    handle: "@iamkalera",
    tags: "Música • R6",
    img: "/influencers/iamkalera.webp",
  },
  {
    name: "Vina Aguiar",
    handle: "@outrovina",
    tags: "Stand-up • K-pop",
    img: "/influencers/outro_vina.webp",
  },
  {
    name: "Vick",
    handle: "@v1ck.art",
    tags: "Artes Visuais",
    img: "/influencers/v1ck_art.webp",
  },
  {
    name: "Julia Campos",
    handle: "@juliampos",
    tags: "Games • Lives",
    img: "/influencers/juliampos.webp",
  },
  {
    name: "Thatales",
    handle: "@_thatales",
    tags: "The Sims • Humor",
    img: "/influencers/thatales.webp",
  },
  {
    name: "Camila Masri",
    handle: "@eucamilamasri",
    tags: "Dublagem • Humor",
    img: "/influencers/eucamilamasri.webp",
  },
  {
    name: "Isa Faracco",
    handle: "@isafaracco",
    tags: "Fortnite • Games",
    img: "/influencers/isafaracco.webp",
  },
  {
    name: "Murart",
    handle: "@omurart",
    tags: "Música • Geek",
    img: "/influencers/murart.webp",
  },
];

// Mapeamos os seus creators para o formato exato que o ChromaGrid exige
const chromaItems = creators.map((c, index) => ({
  image: c.img,
  title: c.name,
  subtitle: c.tags,
  handle: c.handle,
  // Usamos o amarelo da identidade visual com variação sutil no gradiente
  borderColor: "#ffe135",
  gradient:
    index % 2 === 0
      ? "linear-gradient(145deg, #ffe135, #000000)"
      : "linear-gradient(180deg, #ffd100, #000000)",
  url: "#", // Aqui você pode colocar o link real do perfil depois
}));

export default function Casting() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="casting"
      className="py-40 relative overflow-hidden bg-black/30"
    >
      {/* Watermark text */}
      <div className="absolute top-16 left-8 font-headline font-black text-[12rem] text-white/[0.02] uppercase leading-none pointer-events-none select-none">
        Creators
      </div>

      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/[0.07] pb-14">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-label font-bold text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block"
            >
              The Collective
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-headline font-black tracking-tighter leading-[0.8]"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
            >
              CREATORS <span className="text-white/15 italic">2026</span>
            </motion.h2>
          </div>
          <div className="max-w-sm">
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Vozes que dominam as plataformas com autenticidade absoluta.
            </p>

            <a
              href="#contato"
              className="inline-block border-b-2 border-primary text-primary font-headline font-bold uppercase tracking-widest text-xs py-2 hover:bg-primary hover:text-on-primary transition-all px-3"
            >
              Quero ser creator →
            </a>
          </div>
        </div>

        {/* Novo Sistema de Cards: ChromaGrid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full"
          // Ajuste a altura mínima baseada na quantidade de cards
        >
          <ChromaGrid
            items={chromaItems}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </motion.div>
      </div>
    </section>
  );
}
