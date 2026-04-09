import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

export const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  onItemClick,
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  // 1. Criamos um estado para controlar as colunas responsivas
  const [responsiveCols, setResponsiveCols] = useState(6);

  const demo = [
    // ... (Mantenha os dados do demo iguais aqui) ...
  ];

  const data = items?.length ? items : demo;

  // 2. useEffect para ouvir o tamanho da tela e ajustar as colunas
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setResponsiveCols(2); // Celular: 2 colunas
      } else if (width < 1024) {
        setResponsiveCols(3); // Tablet: 3 colunas
      } else {
        setResponsiveCols(4); // Desktop: 4 colunas
      }
    };

    // Roda uma vez quando monta e depois escuta o resize
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (item, index) => {
    onItemClick?.(item, index);
    const { url } = item;
    if (url && url !== "#") {
      // Adicionei isso pra não abrir janela nova vazia
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        "--r": `${radius}px`,
        // 3. Passamos o número de colunas dinâmico para o CSS
        "--cols": responsiveCols,
        // 4. Calculamos as linhas automaticamente com base no total de itens
        "--rows": Math.ceil(data.length / responsiveCols),
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          // 5. Removi aquelas classes erradas daqui de dentro!
          className="chroma-card w-full"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c, i)}
          style={{
            "--card-border": c.borderColor || "transparent",
            "--card-gradient": c.gradient,
            cursor: c.url && c.url !== "#" ? "pointer" : "default",
          }}
        >
          <div className="chroma-img-wrapper">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className=" w-full h-full aspect-3/4 object-cover"
            />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
