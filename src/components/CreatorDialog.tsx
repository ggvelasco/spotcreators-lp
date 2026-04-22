"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Creator } from "@/src/types/creator";

// ─── Ícones inline ────────────────────────────────────────────────────────
const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconTikTok = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.82 1.55V6.79a4.85 4.85 0 01-1.05-.1z" />
  </svg>
);

const IconYouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconTwitch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
  </svg>
);

const IconClose = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconLocation = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="currentColor"
    opacity="0.5"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────
function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".0", "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return String(n);
}

// ─── Sub-componentes ──────────────────────────────────────────────────────
function SocialCard({
  icon,
  platform,
  count,
  color,
}: {
  icon: React.ReactNode;
  platform: string;
  count: number;
  color: string;
}) {
  return (
    <div
      className="flex flex-col gap-1.5 p-4 rounded-xl border border-white/6 bg-white/3 hover:border-white/12 transition-colors"
      style={{ "--accent": color } as React.CSSProperties}
    >
      <div className="flex items-center gap-2" style={{ color }}>
        {icon}
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
          {platform}
        </span>
      </div>
      <span className="text-2xl font-black tracking-tight text-white">
        {formatNumber(count)}
      </span>
      <span className="text-[10px] text-white/30 uppercase tracking-widest">
        seguidores
      </span>
    </div>
  );
}

function AudienceBar({
  range,
  percentage,
}: {
  range: string;
  percentage: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-white/40 w-12 shrink-0 font-mono">
        {range}
      </span>
      <div className="flex-1 h-1.5 bg-white/6 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #ffd100, #ffaa00)" }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        />
      </div>
      <span className="text-xs font-bold text-white/70 w-8 text-right">
        {percentage}%
      </span>
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────
interface CreatorDialogProps {
  creator: Creator | null;
  onClose: () => void;
}

// ─── Componente principal ─────────────────────────────────────────────────
export default function CreatorDialog({
  creator,
  onClose,
}: CreatorDialogProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (creator) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [creator, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {creator && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Dialog — style único, sem duplicata */}
          <motion.div
            className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-t-2xl sm:rounded-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              WebkitOverflowScrolling: "touch",
              background: "linear-gradient(160deg, #0f0f0f 0%, #141414 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,209,0,0.08)",
            }}
          >
            {/* ── Topo ─────────────────────────────────────────────── */}
            <div className="relative">
              {/* Faixa dourada superior */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #ffd100, transparent)",
                }}
              />

              <div className="relative p-5 pb-0 sm:p-8 sm:pb-0">
                {/* Drag handle — mobile only */}
                <div className="flex sm:hidden justify-center mb-4">
                  <div className="w-10 h-1 rounded-full bg-white/20" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  {/* Avatar */}
                  <div className="relative shrink-0 self-start">
                    <div
                      className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden"
                      style={{
                        border: "2px solid rgba(255,209,0,0.3)",
                        boxShadow: "0 0 30px rgba(255,209,0,0.15)",
                      }}
                    >
                      <Image
                        src={creator.img}
                        alt={creator.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#ffd100] border-2 border-[#0f0f0f]" />
                  </div>

                  {/* Nome, handle, localização */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white leading-none mb-1 truncate">
                          {creator.name}
                        </h2>
                        <a
                          href={`https://instagram.com/${creator.handle.replace("@", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ffd100] text-sm font-bold hover:underline"
                        >
                          {creator.handle}
                        </a>
                        <div className="flex items-center gap-1 mt-1.5">
                          <IconLocation />
                          <span className="text-xs text-white/40">
                            {creator.location}
                          </span>
                        </div>
                      </div>

                      {/* Botão fechar */}
                      <button
                        onClick={onClose}
                        className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                        aria-label="Fechar"
                      >
                        <IconClose />
                      </button>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                          {creator.topics.map((topic: string) => (
                        <span
                          key={topic}
                          className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(255,209,0,0.08)",
                            border: "1px solid rgba(255,209,0,0.2)",
                            color: "#ffd100",
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="px-5 sm:px-8 pt-5 pb-0">
                <p className="text-sm text-white/55 leading-relaxed">
                  {creator.bio}
                </p>
              </div>

              <div className="mx-5 sm:mx-8 mt-6 h-px bg-white/6" />
            </div>

            {/* ── Corpo ────────────────────────────────────────────── */}
            <div className="p-5 sm:p-8 space-y-8">
              {/* Redes Sociais */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">
                    Redes Sociais
                  </h3>
                  <span className="text-[10px] text-white/20">
                    Atualizado em {creator.updatedAt}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {creator.social.instagram && (
                    <SocialCard
                      icon={<IconInstagram />}
                      platform="Instagram"
                      count={creator.social.instagram}
                      color="#E1306C"
                    />
                  )}
                  {creator.social.tiktok && (
                    <SocialCard
                      icon={<IconTikTok />}
                      platform="TikTok"
                      count={creator.social.tiktok}
                      color="#ffffff"
                    />
                  )}
                  {creator.social.youtube && (
                    <SocialCard
                      icon={<IconYouTube />}
                      platform="YouTube"
                      count={creator.social.youtube}
                      color="#FF0000"
                    />
                  )}
                  {creator.social.twitch && (
                    <SocialCard
                      icon={<IconTwitch />}
                      platform="Twitch"
                      count={creator.social.twitch}
                      color="#9146FF"
                    />
                  )}
                </div>
              </div>

              {/* Audiência */}
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">
                  Faixa Etária da Audiência
                </h3>
                <div className="space-y-3">
                  {creator.audience.map((item: Creator["audience"][number]) => (
                    <AudienceBar key={item.range} {...item} />
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 border-t border-white/6">
                <a
                  href="#contato"
                  onClick={onClose}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest transition-all text-center"
                  style={{ background: "#ffd100", color: "#000" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#ffe033")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#ffd100")
                  }
                >
                  Quero {creator.name} na minha campanha →
                </a>
                <a
                  href={`https://instagram.com/${creator.handle.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold border border-white/10 text-white/60 hover:border-white/20 hover:text-white/80 transition-all"
                >
                  <IconInstagram />
                  Ver perfil
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
