"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "COMERCIAL\n360°",
    desc: "Atuação reativa e proativa através de prospecção estratégica e desenvolvimento de projetos com marcas globais.",
    span: 1,
  },
  {
    icon: "🛡",
    title: "PR &\nASSESSORIA",
    desc: "Gestão completa de imagem, gerenciamento de crise e suporte em burocracias do dia a dia.",
    span: 1,
  },
  {
    icon: "⚖️",
    title: "BACKOFFICE\nTOTAL",
    desc: "Inteligência em negociação, precificação justa, suporte jurídico e operacional completo.",
    span: 1,
  },
  {
    icon: "🎬",
    title: "PRODUÇÃO\nCRIATIVA",
    desc: "Estudo profundo do criador para entregas autênticas e auxílio técnico de alto nível na execução de jobs.",
    span: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4E3pp97TDWPDEvUqWqdo-dqV1c02JAxNKnaf-oMOCxHwPP4HQDwef4rWl624SEa3l631xP2a9wlFwTR87m8NFfzh8T3DcJbjJ8b3U3w64Z2vLbF7B1bLU7es8kq2h33VaB_0SLdyA3bL4iW9TNVgoBw32B4H9mail_T_H6WR5qo_sbBIvKcMz3GgOORYefUguXQk40zVBykrQEZuSz2oQu7kupzc9HFUqLlUPWhzx5EC3-iLyuc8Q0atBDNnUeC0JcQeZdk0p6k",
  },
  {
    icon: "📊",
    title: "DATA &\nINSIGHTS",
    desc: "Insights de mercado baseados em métricas reais para elevar o nível da sua narrativa digital.",
    span: 1,
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="servicos" className="py-40 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="font-label font-bold text-[10px] tracking-[0.35em] uppercase text-primary mb-4 block"
            >
              Ecosystem
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-headline font-black tracking-tighter leading-none"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              SOLUÇÕES EM <span className="text-white/15">360°</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-on-surface-variant text-lg max-w-xs leading-relaxed"
          >
            Infraestrutura completa para você focar apenas em criar.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${s.span === 2 ? "lg:col-span-2" : ""}`}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card rounded-[2rem] p-10 h-full group relative overflow-hidden cursor-pointer"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/[0.04] to-transparent rounded-[2rem]" />

                {s.image ? (
                  <div className="flex flex-col md:flex-row gap-10 items-center h-full">
                    <div className="flex-1">
                      <span className="text-4xl mb-8 block">{s.icon}</span>
                      <h3 className="font-headline font-black text-3xl mb-5 tracking-tight whitespace-pre-line">
                        {s.title}
                      </h3>
                      <p className="text-on-surface-variant text-base leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    <div className="w-full md:w-2/5 aspect-video rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="text-4xl mb-10 block">{s.icon}</span>
                    <h3 className="font-headline font-black text-2xl mb-5 tracking-tight whitespace-pre-line">
                      {s.title}
                    </h3>
                    <p className="text-on-surface-variant text-base leading-relaxed mb-8">
                      {s.desc}
                    </p>
                    <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary/60 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                      />
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
