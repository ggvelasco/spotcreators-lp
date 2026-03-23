"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { n: "500M+", l: "Impacto total" },
  { n: "50+", l: "Creators ativos" },
  { n: "5 anos", l: "De mercado" },
];

export default function DNA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="dna"
      className="py-40 px-6 md:px-20 relative overflow-hidden"
    >
      {/* BG accent */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Text */}
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-label font-bold text-[10px] tracking-[0.35em] uppercase text-primary mb-6"
          >
            Nosso DNA
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline font-black tracking-tighter leading-[0.85] mb-12"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
          >
            MUITO <br />
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #ffe135, #ffd100)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ALÉM
            </span>
            <br />
            DO ÓBVIO
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-lg"
          >
            <p className="border-l-[3px] border-primary pl-5 py-1 text-white/80 font-medium">
              Somos uma aceleradora focada em{" "}
              <span className="text-white font-bold">resultados reais</span> e
              parcerias duradouras.
            </p>
            <p>
              Na Spot Creators, não apenas agenciamos — nós aceleramos carreiras
              e potencializamos marcas por meio de conteúdo autêntico. Com
              inteligência de mercado e foco em performance, transformamos
              influência em conexão real.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
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
          </motion.div>
        </div>

        {/* Right: Image card */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 4 }}
          animate={inView ? { opacity: 1, x: 0, rotate: 2 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ rotate: 0 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.7)] bg-surface-highest">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtHyt4xVPlvQ-5Ya1gDgdU6fzde10geRDLh4RT-l8CmGCq2cQHOKCd72Jmhl4JpWRCWxMhS9Kj17KyWi7-NqmpPxqCzqvp9OT8hhyR4hm3ErxYoZxdwhsdaws54sRRKEwYXJSe6_Zwnpq66GQ7ZE9H18fEltCI1_Y8cx-Oem8KkHARyB2qKug6jPnUgXZC6CCLUU6h7zz7LpbTZPt8X9iJA9GvdQEtxdlsIS4M_78ztagx0DYm7lc-nyOqf1vGeIR16PDoEhUPw7c"
              alt="Spot Creators team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            {/* Quote card */}
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl">
              <p className="text-white font-headline font-bold italic text-sm leading-relaxed">
                "Criando o futuro da economia criativa no Brasil."
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 border-[6px] border-primary/15 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-primary/10 rounded-2xl blur-lg" />
          <div className="absolute top-16 -right-5 sticker bg-primary text-on-primary px-4 py-2 rounded-lg rotate-12 text-xs shadow-xl shadow-primary/30 z-10">
            AUTHENTIC ONLY
          </div>
        </motion.div>
      </div>
    </section>
  );
}
