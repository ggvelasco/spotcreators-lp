"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

// Importando o Container dinamicamente
export const DraggableCardContainer = dynamic(
  () =>
    import("@/src/components/ui/draggable-card").then(
      (mod) => mod.DraggableCardContainer,
    ),
  { ssr: false },
);

// Importando o Body dinamicamente
export const DraggableCardBody = dynamic(
  () =>
    import("@/src/components/ui/draggable-card").then(
      (mod) => mod.DraggableCardBody,
    ),
  { ssr: false },
);

const stats = [
  { n: "500M+", l: "Impacto total" },
  { n: "50+", l: "Creators ativos" },
  { n: "5 anos", l: "De mercado" },
];

export default function DNA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const items = [
    {
      title: "",
      image: "/draggable-card-images/1.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
      key: "1",
    },
    {
      title: "",
      image: "/draggable-card-images/2.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      key: "2",
    },
    {
      title: "",
      image: "/draggable-card-images/3.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      key: "3",
    },
    {
      title: "",
      image: "/draggable-card-images/4.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      key: "4",
    },
    {
      title: "",
      image: "/draggable-card-images/5.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      key: "5",
    },
    {
      title: "",
      image: "/draggable-card-images/6.png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
      key: "6",
    },
    {
      title: "",
      image: "/draggable-card-images/7.png",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      key: "7",
    },
  ];

  return (
    <section
      ref={ref}
      id="dna"
      className="py-25 px-6 md:px-20 relative overflow-hidden"
    >
      {/* BG accent */}
      {/* <div className="absolute -top-40 -left-40 w-125 h-125 bg-primary/40 rounded-full blur-[100px]" /> */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Text */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-label font-bold text-[10px] tracking-[0.35em] uppercase text-primary mb-6 py-[40px]"
          >
            Nosso DNA
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline font-black tracking-tighter leading-[0.85] mb-12 overflow-visible"
            style={{ fontSize: "clamp(3.5rem, 4vw, 7rem)" }}
          >
            Somos uma aceleradora focada em <br />
            <span
              className="italic leading-[1.2] inline-block pr-2 overflow-visible"
              style={{
                background: "linear-gradient(135deg, #ffe135, #ffd100)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transform: "translateZ(0)",
              }}
            >
              resultados reais
            </span>
            <br />e parcerias duradouras.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-lg"
          >
            <p className="border-l-[3px] border-primary pl-5 py-1">
              Na Spot Creators, não apenas agenciamos — nós aceleramos carreiras
              e potencializamos marcas por meio de conteúdo autêntico. Com
              inteligência de mercado e foco em performance, transformamos
              influência em conexão real.
            </p>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-10 mt-14"
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div className="font-headline font-black text-3xl text-white">
                  {s.n}
                </div>
                <div className="font-label text-[10px] text-primary uppercase tracking-widest font-bold mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div> */}
        </div>

        {/* Right: Image card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center ">
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
              Vamos criar o próximo hit da internet juntos?
            </p>
            {items.map((item) => (
              <DraggableCardBody
                key={item.key}
                className={item.className}
                constraintsRef={ref}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={320}
                  className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                />
                <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </h3>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </motion.div>
      </div>
    </section>
  );
}
