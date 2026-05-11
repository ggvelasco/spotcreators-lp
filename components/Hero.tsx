"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const Cover = dynamic(
  () => import("@/src/components/ui/cover").then((mod) => mod.Cover),
  { ssr: false },
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // ── Lazy load do vídeo após window.load ───────────────────────────────
  // O vídeo não tem src no HTML — só é setado depois que a página toda
  // terminou de carregar. Até lá, o poster (primeiro frame) é exibido.
  useEffect(() => {
    const loadVideo = () => {
      const video = videoRef.current;
      if (!video) return;
      video.src = "/hero-bg.mp4"; // coloque seu vídeo em /public/hero-bg.mp4
      video.load();
      video.play().catch(() => {
        // Autoplay bloqueado em alguns browsers — silencia o erro
      });
    };

    if (document.readyState === "complete") {
      loadVideo();
    } else {
      window.addEventListener("load", loadVideo, { once: true });
    }

    return () => {
      window.removeEventListener("load", loadVideo);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── 1. VIDEO BACKGROUND ─────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Vídeo — sem src intencional, setado pelo useEffect após window.load */}
        <video
          ref={videoRef}
          poster="/hero-poster.webp" // primeiro frame exportado do vídeo
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay escuro para garantir legibilidade do texto */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradiente nas bordas para fundir com o resto do site */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* ── 2. CONTENT LAYER ────────────────────────────────────────────── */}
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
