"use client";

// Requer: npm install simple-icons@9
import {
  siWarnerbros,
  siAdobe,
  siAmazon,
  siLogitech,
  siShopee,
  siSpotify,
  siDuolingo,
  siEa,
} from "simple-icons";

// Tipo local pra não depender do export de tipo da lib
interface SimpleIcon {
  title: string;
  path: string;
}

// ─── Lista de marcas ──────────────────────────────────────────────────────
// icon: null → exibe só o nome (marca sem ícone no simple-icons)
const brandList: { name: string; icon: SimpleIcon | null }[] = [
  { name: "Warner Bros.", icon: siWarnerbros },
  { name: "Adobe", icon: siAdobe },
  { name: "Amazon", icon: siAmazon },
  { name: "Logitech", icon: siLogitech },
  { name: "Shopee", icon: siShopee },
  { name: "Spotify", icon: siSpotify },
  { name: "Duolingo", icon: siDuolingo },
  { name: "EA Games", icon: siEa },
  // Sem ícone no simple-icons@9 — exibe só o texto
  { name: "O Boticário", icon: null },
  { name: "Magalu", icon: null },
  { name: "Havaianas", icon: null },
  { name: "SHEIN", icon: null },
  { name: "Itaú", icon: null },
  { name: "TIM", icon: null },
  { name: "Vans", icon: null },
  { name: "Globoplay", icon: null },
  { name: "Mercado Livre", icon: null },
  { name: "Seara", icon: null },
];

// ─── Item individual ──────────────────────────────────────────────────────
function BrandItem({
  name,
  icon,
  faint,
}: {
  name: string;
  icon: SimpleIcon | null;
  faint: boolean;
}) {
  return (
    <div
      className={`
        flex items-center gap-2.5 flex-shrink-0 cursor-default
        transition-all duration-300 hover:opacity-100 group
        ${faint ? "opacity-[0.15]" : "opacity-[0.40]"}
      `}
    >
      {icon && (
        <svg
          role="img"
          viewBox="0 0 24 24"
          aria-label={name}
          className="w-5 h-5 flex-shrink-0 fill-white group-hover:fill-primary transition-colors duration-300"
        >
          <path d={icon.path} />
        </svg>
      )}
      <span className="font-headline font-black text-xl tracking-tighter text-white group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

// ─── Separador entre itens ────────────────────────────────────────────────
function Dot() {
  return (
    <span className="flex-shrink-0 w-1 h-1 rounded-full bg-primary/30 self-center" />
  );
}

// ─── Componente principal ─────────────────────────────────────────────────
export default function Brands() {
  const row1 = [...brandList, ...brandList];
  const row2 = [...[...brandList].reverse(), ...[...brandList].reverse()];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="font-label font-bold text-[10px] tracking-[0.35em] uppercase text-white/25">
          Marcas que confiam na Spot Creators
        </span>
      </div>

      {/* Row 1 — esquerda */}
      <div className="marquee-mask mb-5 overflow-hidden">
        <div className="flex animate-marquee gap-8 whitespace-nowrap items-center">
          {row1.map((b, i) => (
            <>
              <BrandItem
                key={`r1-${i}`}
                name={b.name}
                icon={b.icon}
                faint={i % 3 === 1}
              />
              <Dot key={`d1-${i}`} />
            </>
          ))}
        </div>
      </div>

      {/* Row 2 — direita (reverso) */}
      <div className="marquee-mask overflow-hidden">
        <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap items-center">
          {row2.map((b, i) => (
            <>
              <BrandItem
                key={`r2-${i}`}
                name={b.name}
                icon={b.icon}
                faint={i % 4 === 2}
              />
              <Dot key={`d2-${i}`} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
