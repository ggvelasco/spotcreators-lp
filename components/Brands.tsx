"use client";
const brands = [
  "WARNER BROS.",
  "BOTICÁRIO",
  "MAGALU",
  "HAVAIANAS",
  "SHEIN",
  "SHOPEE",
  "ITAÚ",
  "TIM",
  "LOGITECH",
  "EA GAMES",
  "AMAZON",
  "ADOBE",
  "SPOTIFY",
  "VANS",
  "DUOLINGO",
  "GLOBOPLAY",
  "MERCADO LIVRE",
  "SEARA",
];

export default function Brands() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="mb-12 text-center">
        <span className="font-label font-bold text-[10px] tracking-[0.35em] uppercase text-white/25">
          Marcas que confiam na Spot Creators
        </span>
      </div>

      {/* Row 1 — Left */}
      <div className="marquee-mask mb-5 overflow-hidden">
        <div className="flex animate-marquee gap-14 whitespace-nowrap">
          {doubled.map((b, i) => (
            <div
              key={i}
              className={`font-headline font-black text-2xl tracking-tighter flex-shrink-0 transition-colors duration-300 hover:text-primary cursor-default ${
                i % 3 === 1 ? "text-primary/70" : "text-white/20"
              }`}
            >
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Right (reverse) */}
      <div className="marquee-mask overflow-hidden">
        <div className="flex animate-marquee-reverse gap-14 whitespace-nowrap">
          {[...doubled].reverse().map((b, i) => (
            <div
              key={i}
              className={`font-headline font-black text-2xl tracking-tighter flex-shrink-0 transition-colors duration-300 hover:text-primary cursor-default ${
                i % 4 === 2 ? "text-primary/60" : "text-white/10"
              }`}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
