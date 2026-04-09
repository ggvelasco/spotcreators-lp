"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { creators, type Creator } from "@/src/types/creator";
import CreatorDialog from "@/src/components/CreatorDialog";

const ChromaGrid = dynamic(() => import("./ChromaGrid"), {
  ssr: false,
});

// Mapeamos os seus creators para o formato exato que o ChromaGrid exige
const chromaItems = creators.map((c, index) => ({
  image: c.img,
  title: c.name,
  subtitle: c.tags,
  handle: c.handle,
  borderColor: "#ffe135",
  gradient:
    index % 2 === 0
      ? "linear-gradient(145deg, #ffe135, #000000)"
      : "linear-gradient(180deg, #ffd100, #000000)",
  url: "#", // mantemos "#" — o clique será interceptado pelo wrapper
}));

export default function Casting() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  // Quando o usuário clicar num card, abrimos o dialog com o creator certo
  const handleCardClick = (index: number) => {
    setSelectedCreator(creators[index]);
  };

  return (
    <>
      <section
        ref={ref}
        id="casting"
        className="py-40 relative overflow-hidden bg-black/30"
      >
        {/* Watermark text */}
        <div className="absolute top-16 left-8 font-headline font-black text-[12rem] text-white/2 uppercase leading-none pointer-events-none select-none">
          Creators
        </div>

        <div className="max-w-360 mx-auto px-6">
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

          {/* ChromaGrid com wrapper de click */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            {/*
              OPÇÃO A — Se o seu ChromaGrid aceitar onItemClick:
              <ChromaGrid
                items={chromaItems}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
                onItemClick={(item, index) => handleCardClick(index)}
              />

              OPÇÃO B — Se não aceitar, use o wrapper abaixo que intercepta
              o evento de clique por posição/índice via data-attribute no DOM.
              Veja as instruções no README abaixo.
            */}
            <ChromaGrid
              items={chromaItems}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
              onItemClick={(_item: unknown, index: number) =>
                handleCardClick(index)
              }
            />
          </motion.div>
        </div>
      </section>

      {/* Dialog — renderizado fora da section para evitar overflow:hidden */}
      <CreatorDialog
        creator={selectedCreator}
        onClose={() => setSelectedCreator(null)}
      />
    </>
  );
}
