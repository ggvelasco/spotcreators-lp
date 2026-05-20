"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import PrismaticBurst from "./PrismaticBurst";

const Cover = dynamic(
  () => import("@/src/components/ui/cover").then((mod) => mod.Cover),
  { ssr: false },
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={1.4}
          speed={0.5}
          distort={0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={0}
          mixBlendMode="screen"
          colors={["#ffd100", "#ff7a18", "#ffffff"]}
        />
      </div>
      <motion.div
        style={{ y: yTitle, opacity }}
        className="relative z-10 text-center max-w-7xl px-6 pt-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 bg-white/4 border border-white/8 px-5 py-2.5 rounded-full mb-10 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-headline font-bold text-[10px] tracking-[0.35em] uppercase text-white/70">
            Creators Season 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline font-black leading-[0.85] tracking-tighter mb-12"
          style={{ fontSize: "clamp(3rem, 6.5vw, 14rem)" }}
        >
          <span className="block text-white">ACELERADORA</span>
          <span className="block text-white">DE</span>
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block italic text-glow relative"
          >
            {/* Mobile: texto puro */}
            <span className="pr-6 md:hidden">CREATORS</span>

            {/* Desktop: componente Cover */}
            <span className="hidden md:inline-block">
              <Cover>
                <span className="pr-6">CREATORS</span>
              </Cover>
            </span>
          </motion.span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto mb-24 leading-relaxed"
        >
          Conectamos creators e marcas criativamente com estratégias que rompem
          o algoritmo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <motion.a
            href="#contato"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(255,209,0,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="kinetic-gradient text-on-primary font-headline font-extrabold px-12 py-5 rounded-2xl text-base uppercase tracking-wider shadow-2xl shadow-primary/25 cursor-pointer"
          >
            Bora falar?
          </motion.a>
          <motion.a
            href="#casting"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 text-white/70 font-headline font-bold text-base hover:text-white transition-colors cursor-pointer"
          >
            <span className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
              <svg
                className="w-5 h-5 translate-x-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Conhecer o Casting
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
