"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const events = [
  {
    name: "The Town & Lollapalooza",
    tag: "Festival",
    img: "https://musicnonstop.uol.com.br/wp-content/uploads/2020/03/Lollapalooza-Brasill-1536x864.jpg",
    offset: 0,
  },
  {
    name: "BGS & Gamescom",
    tag: "Gaming",
    img: "https://emtodolugar.facha.edu.br/wp-content/uploads/2023/10/20230928_16303617_bgs-2019-publico.jpg",
    offset: 0,
  },
  {
    name: "CCXP",
    tag: "Cultura",
    img: "/ccxp-banner.webp",
    offset: 0,
  },
];

export default function Events() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="eventos" className="py-40 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline font-black tracking-tighter mb-20"
          style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
        >
          SPOT ON{" "}
          <span
            className="italic px-3.5"
            style={{
              background: "linear-gradient(135deg, #ffe135, #ffd100)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            TOUR
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: e.offset } : {}}
              transition={{
                duration: 0.9,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: e.offset - 12 }}
              className="group relative h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={e.img}
                alt={e.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.08] transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="font-label text-primary font-bold tracking-widest uppercase text-[10px] mb-3 block">
                  {e.tag}
                </span>
                <h3 className="font-headline text-3xl font-black text-white group-hover:text-primary transition-colors duration-300">
                  {e.name}
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "3rem" }}
                  className="h-[2px] bg-primary mt-4 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
