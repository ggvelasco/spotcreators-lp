"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const fields = [
    {
      id: "name",
      label: "Seu Nome",
      placeholder: "Como podemos te chamar?",
      type: "text",
    },
    {
      id: "email",
      label: "E-mail",
      placeholder: "seu@email.com",
      type: "email",
    },
  ];

  return (
    <section ref={ref} id="contato" className="py-40 px-6 relative">
      {/* BG blob */}

      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[3rem] p-10 md:p-20 relative overflow-visible">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/6 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            {/* Left */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                className="font-label font-bold text-[10px] tracking-[0.35em] uppercase text-primary mb-6 block"
              >
                Contato
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-headline font-black tracking-tighter leading-[0.85] mb-14"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
                  overflow: "visible",
                }}
              >
                VAMOS CRIAR O{" "}
                <span
                  className="italic inline-block"
                  style={{
                    background: "linear-gradient(135deg, #ffe135, #ffd100)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    padding: "0 0.20em", // Protege o "O"
                    margin: "0 -0.20em",
                  }}
                >
                  PRÓXIMO
                </span>{" "}
                <span
                  className="italic inline-block"
                  style={{
                    background: "linear-gradient(135deg, #ffe135, #ffd100)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    padding: "0 0.20em",
                    margin: "0 -0.20em",
                  }}
                >
                  HIT
                </span>{" "}
                JUNTOS?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                {[
                  { icon: "✉", text: "comercial@spotcreators.com.br" },
                  { icon: "📸", text: "@spot.ag no Instagram" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="font-headline font-bold text-lg text-white/80 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white/[0.03] rounded-3xl p-10 border border-white/[0.07]"
            >
              {sent ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-6">🎯</div>
                  <h3 className="font-headline font-black text-3xl text-white mb-3">
                    Mensagem enviada!
                  </h3>
                  <p className="text-on-surface-variant">
                    Nossa equipe vai entrar em contato em breve.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {fields.map((f) => (
                    <div key={f.id}>
                      <label className="block font-label text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-3">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        onFocus={() => setFocused(f.id)}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-transparent border-0 border-b-2 py-4 text-white text-lg transition-all duration-300 focus:outline-none placeholder:text-white/20 ${
                          focused === f.id
                            ? "border-primary"
                            : "border-white/10"
                        }`}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block font-label text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-3">
                      Sua Mensagem
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Conta pra gente sua ideia..."
                      onFocus={() => setFocused("msg")}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-transparent border-0 border-b-2 py-4 text-white text-lg transition-all duration-300 focus:outline-none resize-none placeholder:text-white/20 ${
                        focused === "msg" ? "border-primary" : "border-white/10"
                      }`}
                    />
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 50px rgba(255,209,0,0.3)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSent(true)}
                    className="w-full kinetic-gradient text-on-primary font-headline font-black py-5 rounded-2xl text-lg uppercase tracking-wide"
                  >
                    Enviar Mensagem ✦
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
