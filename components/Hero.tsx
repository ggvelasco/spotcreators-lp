"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cover } from "@/src/components/ui/cover";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax BG blobs */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[-30%] right-[-15%] w-[800px] h-[800px] rounded-full bg-primary opacity-[0.07] blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary opacity-[0.05] blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: yTitle, opacity }}
        className="relative z-10 text-center max-w-7xl px-6 pt-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] px-5 py-2.5 rounded-full mb-10 backdrop-blur-sm"
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
          className="font-headline font-black leading-[0.82] tracking-tighter mb-8"
          style={{ fontSize: "clamp(4rem, 8vw, 14rem)" }}
        >
          <span className="block text-white opacity-90">ACELERADORA</span>
          <span className="block text-white">DE</span>
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="block italic text-glow relative"
          >
            <Cover>
              <span className="pr-6">CREATORS</span>
            </Cover>
            {/* Underline squiggle */}
            {/* <svg
              className="absolute -bottom-6 left-42 w-190 text-primary/30"
              viewBox="0 0 600 20"
              preserveAspectRatio="none"
              fill="none"
            >
              <motion.path
                d="M0,10 Q75,2 150,10 T300,10 T450,10 T600,10"
                stroke="currentColor"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
              />
            </svg> */}
          </motion.span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg md:text-2xl text-on-surface-variant max-w-xl mx-auto mb-14 leading-relaxed"
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

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex justify-center gap-16 mt-24 pt-12 border-t border-white/[0.06]"
        >
          {[
            { n: "500M+", l: "de impacto" },
            { n: "50+", l: "creators" },
            { n: "100+", l: "marcas" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-headline font-black text-3xl md:text-4xl text-white">
                {s.n}
              </div>
              <div className="font-label text-[10px] text-primary font-bold uppercase tracking-[0.25em] mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
