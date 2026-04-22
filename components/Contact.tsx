"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type ContactType = null | "influencer" | "marca";

// ─── Emails de destino (troque pelos reais) ───────────────────────────────
const EMAIL_INFLUENCER = "creators@spotcreators.com.br";
const EMAIL_MARCA = "comercial@spotcreators.com.br";

// ─── Ícones ───────────────────────────────────────────────────────────────
const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconBriefcase = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);

const IconArrowLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

// ─── Componente de campo reutilizável ─────────────────────────────────────
function Field({
  id,
  label,
  placeholder,
  type = "text",
  focused,
  setFocused,
  as,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  focused: string | null;
  setFocused: (v: string | null) => void;
  as?: "textarea" | "select";
}) {
  const baseClass = `w-full bg-transparent border-0 border-b-2 py-4 text-white text-base transition-all duration-300 focus:outline-none placeholder:text-white/20 ${
    focused === id ? "border-primary" : "border-white/10"
  }`;

  return (
    <div>
      <label className="block font-label text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-3">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused(null)}
          className={`${baseClass} resize-none`}
        />
      ) : as === "select" ? (
        <select
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused(null)}
          className={`${baseClass} cursor-pointer`}
          style={{ colorScheme: "dark" }}
          defaultValue=""
        >
          <option value="" disabled className="bg-[#141414]">
            {placeholder}
          </option>
          <option value="entretenimento" className="bg-[#141414]">
            Entretenimento
          </option>
          <option value="games" className="bg-[#141414]">
            Games
          </option>
          <option value="musica" className="bg-[#141414]">
            Música
          </option>
          <option value="humor" className="bg-[#141414]">
            Humor
          </option>
          <option value="lifestyle" className="bg-[#141414]">
            Lifestyle
          </option>
          <option value="moda" className="bg-[#141414]">
            Moda & Beleza
          </option>
          <option value="esportes" className="bg-[#141414]">
            Esportes
          </option>
          <option value="tech" className="bg-[#141414]">
            Tech
          </option>
          <option value="arte" className="bg-[#141414]">
            Arte & Design
          </option>
          <option value="outro" className="bg-[#141414]">
            Outro
          </option>
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused(null)}
          className={baseClass}
        />
      )}
    </div>
  );
}

// ─── Tela de seleção ──────────────────────────────────────────────────────
function TypeSelector({
  onSelect,
}: {
  onSelect: (t: "influencer" | "marca") => void;
}) {
  return (
    <motion.div
      key="selector"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-5"
    >
      <p className="text-white/40 text-sm mb-8 leading-relaxed">
        Selecione o perfil que melhor descreve você para que possamos te
        direcionar ao time certo.
      </p>

      {/* Botão Influencer */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect("influencer")}
        className="w-full group relative rounded-2xl p-6 text-left transition-all duration-300 border border-white/[0.08] hover:border-primary/40 overflow-hidden"
        style={{ background: "rgba(255,209,0,0.04)" }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,209,0,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="flex items-center gap-4 relative z-10">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
            style={{ background: "rgba(255,209,0,0.12)", color: "#ffd100" }}
          >
            <IconStar />
          </div>
          <div>
            <div className="font-headline font-black text-white text-lg tracking-tight leading-none mb-1">
              Sou Influencer
            </div>
            <div className="text-white/40 text-xs">
              Quero fazer parte do casting da Spot Creators
            </div>
          </div>
          <div className="ml-auto text-white/20 group-hover:text-primary transition-colors text-xl">
            →
          </div>
        </div>
      </motion.button>

      {/* Botão Marca */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelect("marca")}
        className="w-full group relative rounded-2xl p-6 text-left transition-all duration-300 border border-white/[0.08] hover:border-white/20 overflow-hidden"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="flex items-center gap-4 relative z-10">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <IconBriefcase />
          </div>
          <div>
            <div className="font-headline font-black text-white text-lg tracking-tight leading-none mb-1">
              Sou uma Marca
            </div>
            <div className="text-white/40 text-xs">
              Quero contratar criadores para minha campanha
            </div>
          </div>
          <div className="ml-auto text-white/20 group-hover:text-white/60 transition-colors text-xl">
            →
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}

// ─── Form de Influencer ───────────────────────────────────────────────────
function InfluencerForm({
  focused,
  setFocused,
  onSubmit,
}: {
  focused: string | null;
  setFocused: (v: string | null) => void;
  onSubmit: () => void;
}) {
  return (
    <motion.div
      key="influencer-form"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-7"
    >
      {/* Badge do tipo */}
      <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
        <div className="w-5 h-5 text-primary">
          <IconStar />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
          Influencer
        </span>
        <span className="text-white/20 text-[10px] ml-1">
          → {EMAIL_INFLUENCER}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <Field
          id="nome"
          label="Seu Nome"
          placeholder="Nome completo"
          focused={focused}
          setFocused={setFocused}
        />
        <Field
          id="email"
          label="E-mail"
          placeholder="seu@email.com"
          type="email"
          focused={focused}
          setFocused={setFocused}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <Field
          id="handle"
          label="@ do Instagram"
          placeholder="@seuhandle"
          focused={focused}
          setFocused={setFocused}
        />
        <Field
          id="seguidores"
          label="Seguidores (aprox.)"
          placeholder="Ex: 500K"
          focused={focused}
          setFocused={setFocused}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <Field
          id="nicho"
          label="Nicho / Categoria"
          placeholder="Selecione seu nicho"
          focused={focused}
          setFocused={setFocused}
          as="select"
        />
        <Field
          id="cidade"
          label="Cidade / Estado"
          placeholder="Ex: São Paulo, SP"
          focused={focused}
          setFocused={setFocused}
        />
      </div>
      <Field
        id="msg"
        label="Conta um pouco sobre você"
        placeholder="O que você cria, suas redes, conquistas..."
        focused={focused}
        setFocused={setFocused}
        as="textarea"
      />

      <motion.button
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 50px rgba(255,209,0,0.3)",
        }}
        whileTap={{ scale: 0.97 }}
        onClick={onSubmit}
        className="w-full kinetic-gradient text-on-primary font-headline font-black py-5 rounded-2xl text-sm uppercase tracking-widest"
      >
        Quero fazer parte ✦
      </motion.button>
    </motion.div>
  );
}

// ─── Form de Marca ────────────────────────────────────────────────────────
function MarcaForm({
  focused,
  setFocused,
  onSubmit,
}: {
  focused: string | null;
  setFocused: (v: string | null) => void;
  onSubmit: () => void;
}) {
  return (
    <motion.div
      key="marca-form"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-7"
    >
      {/* Badge do tipo */}
      <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
        <div className="w-5 h-5 text-white/50">
          <IconBriefcase />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
          Marca
        </span>
        <span className="text-white/20 text-[10px] ml-1">→ {EMAIL_MARCA}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <Field
          id="marca"
          label="Nome da Marca"
          placeholder="Sua empresa"
          focused={focused}
          setFocused={setFocused}
        />
        <Field
          id="email"
          label="E-mail Corporativo"
          placeholder="contato@suamarca.com"
          type="email"
          focused={focused}
          setFocused={setFocused}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <Field
          id="telefone"
          label="Telefone para contato"
          placeholder="(11) 99999-9999"
          type="tel"
          focused={focused}
          setFocused={setFocused}
        />
        <Field
          id="segmento"
          label="Segmento / Setor"
          placeholder="Selecione o segmento"
          focused={focused}
          setFocused={setFocused}
          as="select"
        />
      </div>
      <Field
        id="msg"
        label="Fala sobre sua campanha"
        placeholder="Objetivo, produto, público-alvo, prazo..."
        focused={focused}
        setFocused={setFocused}
        as="textarea"
      />

      <motion.button
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(255,255,255,0.08)",
        }}
        whileTap={{ scale: 0.97 }}
        onClick={onSubmit}
        className="w-full font-headline font-black py-5 rounded-2xl text-sm uppercase tracking-widest transition-all border border-white/20 hover:border-white/40 text-white"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        Iniciar conversa →
      </motion.button>
    </motion.div>
  );
}

// ─── Tela de sucesso ──────────────────────────────────────────────────────
function SuccessScreen({ type }: { type: ContactType }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="text-center py-16"
    >
      <div className="text-6xl mb-6">{type === "influencer" ? "🌟" : "🎯"}</div>
      <h3 className="font-headline font-black text-3xl text-white mb-3">
        {type === "influencer" ? "Candidatura enviada!" : "Mensagem enviada!"}
      </h3>
      <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">
        {type === "influencer"
          ? "Nosso time de casting vai analisar seu perfil e entrar em contato em breve."
          : "Nossa equipe comercial vai entrar em contato em até 1 dia útil."}
      </p>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────
export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [focused, setFocused] = useState<string | null>(null);
  const [contactType, setContactType] = useState<ContactType>(null);
  const [sent, setSent] = useState(false);

  const emailDestino =
    contactType === "influencer" ? EMAIL_INFLUENCER : EMAIL_MARCA;

  return (
    <section ref={ref} id="contato" className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-[3rem] p-10 md:p-20 relative">
          {/* Blob isolado */}
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.06] blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
            {/* ── Left ────────────────────────────────────────────── */}
            <div className="lg:sticky lg:top-32">
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
                    padding: "0 0.20em",
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
                {/* Email dinâmico baseado no tipo selecionado */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={emailDestino}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {[
                      { icon: "✉", text: emailDestino },
                      { icon: "📸", text: "@spot.ag no Instagram" },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 group mb-6 last:mb-0"
                      >
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                          {item.icon}
                        </div>
                        <span className="font-headline font-bold text-lg text-white/80 group-hover:text-white transition-colors break-all">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* ── Right: Form ─────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white/[0.03] rounded-3xl p-8 md:p-10 border border-white/[0.07]"
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <SuccessScreen key="success" type={contactType} />
                ) : contactType === null ? (
                  <TypeSelector key="selector" onSelect={setContactType} />
                ) : (
                  <>
                    {/* Botão voltar */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => {
                        setContactType(null);
                        setSent(false);
                      }}
                      className="flex items-center gap-2 text-white/30 hover:text-white/70 text-xs font-bold uppercase tracking-widest mb-7 transition-colors"
                    >
                      <IconArrowLeft />
                      Voltar
                    </motion.button>

                    {contactType === "influencer" ? (
                      <InfluencerForm
                        key="influencer"
                        focused={focused}
                        setFocused={setFocused}
                        onSubmit={() => setSent(true)}
                      />
                    ) : (
                      <MarcaForm
                        key="marca"
                        focused={focused}
                        setFocused={setFocused}
                        onSubmit={() => setSent(true)}
                      />
                    )}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
