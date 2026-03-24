"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const creators = [
  {
    name: "Bento Ribeiro",
    handle: "@ribeirobentto",
    tags: "Humor • Cultura Pop",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPmUrSvJFEbqGPQrzjSZXNfQ4uy90P_h_Lb4Msf0Ll2VPl_SyTtNy2V3NLgz9ZSGpSKgWPLsLbLGgB4ZddzAYErqPm91U3A9ang4FXNjMedVsuNtRBUV0H0mFS_SS6m3NiiuwjzjBMG46l_xay_1l7zJ4QNo37HEvRJ-Q55vFnAuBVdjWdcWIHHl8jJnStrHTl11CG7A9sVSm7wImKKbA7xwWQ3nv13usjW30148wfYgBETOU3bpPFhXzZf9HxZ02rTYYp5IBX4iE",
    offset: 0,
  },
  {
    name: "Mab Horse",
    handle: "@mab_horse",
    tags: "Música • Lifestyle",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtdbu_MdiZbcaA6NxxyS4bLrmsB_Iygg8BObW4Ryg0WtQsfdEVKu_3z2xhmcLsqH3hxEdmw6xcG0UP2F5RDqgRL7XgXu4dD3A1KoXRfv8Tw4r3cgnHKqMUL_MrhMKXT-y8dhBHX-SrNO_NgNP5K_jQgMKQT1uI8D3WBVbmA138CoxLEamrNM0mOc5zOrqzfTusPzbm4y8QzCEv8dz-QGk9Mdaw3jVUDJvmRlx3mO9o1xr3NI2KC3eZySeMyifLddSaaGFBRpbd-1U",
    offset: 0,
  },
  {
    name: "Tuitabi",
    handle: "@tuitabi",
    tags: "Games • Pop",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZCJJACzeSOlfnJrKDdgBAVu--LsiukJkzDKQO4ngGD2I3uGIvO7pqhUDpn_RQn-3ZguE1qR_GrTzljDINCu_w1cej4GaPeGq55h2YZlxIQDkwQXmZFXYTI4RvgDiNhSjIRfylc_7vBu-BiBOXhVKok3D1f3RHJertQNWQbaOrQnsJ7iu05Y1IHk7h1ViVdqlqYztH3_od5D5MRYE4aZ1EE34te2dV9r-IF42AKvxIQHoL3gxM40F-VdiILrbaAbIUTionhfADFSM",
    offset: 0,
  },
  {
    name: "Dengoso",
    handle: "@dengoso",
    tags: "Gaming • Fortnite",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoCsrdXb9txN_q0uKStnQ-6GL__7sd8eBHFGxv2a93P8izX9Y-lQeiLLlYiSN8ZYZ_8DJhYS1nZj4FpDDqbR_dyEqybIi_lH4UXZZEOCrOyTPD25oKO-02qZTzvVzGEdgSqS-l94MztfgMb8hZgs6UAC4J_2R7Jf1vzgYnJB4wP11D6_fniFwOBZEoq4FtB55odcGH0awewFzfXyNW2QFlMu02bUrpDZGIO6NIiSfow8bUcJ5U6gNihH9KS06IM6UI9H20oJJHNPI",
    offset: 0,
  },
  {
    name: "Kalera",
    handle: "@iamkalera",
    tags: "Música • R6",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4PZxGJN2RlUHMYhSh9OxPu_tBg35lAiQ0i4KHu32SvukN6vBB7yufj9OAADljlcsJ8FPlli6GXsj0iSJ5jyEZ1bs2eYGEm0xiwiSwml5G2RLIfLF-pEBqm6fRoCoVHv_8HeTGPFTuXrtsKeRNzUWKkVJCM-dV7uKYQ-RRJtxnHBGW7Ygh-hQCWzc58qzwpenl3Siq30HRtFXHXZzGYv8YmsEHprGiXFutq-Bbp9jtlDdu6wIC62HKbEpU_-H-21ey-WWyRg8nbVg",
    offset: 0,
  },
  {
    name: "Vina Aguiar",
    handle: "@outrovina",
    tags: "Stand-up • K-pop",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfxtIh1exeNJgvWF0y-11d2dwwxP230vPqPTwSJ2ZTk21E5lesD0S79wiuvVmxdiYwfpbuc4n32YxJAbK1iDzsA_K6z-7bECFithLEuOIJshlRX-_OLc81_Ag-D3rdEFcFRDyuEVd4tOE6TXetx2eryeI1c2jRV5dBc3kw8_qCaoOsPRJRVYPR6MXb6LsVfyy5j4MYdIr0adYtGfwTM9nQ9Wh0HSKTltR2cjN7EmKGY2Xsx0w-EMHgeKTLWrJYex7E93yXBQg2vA0",
    offset: 0,
  },
  {
    name: "Vick",
    handle: "@vick.art",
    tags: "Artes Visuais",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPmUrSvJFEbqGPQrzjSZXNfQ4uy90P_h_Lb4Msf0Ll2VPl_SyTtNy2V3NLgz9ZSGpSKgWPLsLbLGgB4ZddzAYErqPm91U3A9ang4FXNjMedVsuNtRBUV0H0mFS_SS6m3NiiuwjzjBMG46l_xay_1l7zJ4QNo37HEvRJ-Q55vFnAuBVdjWdcWIHHl8jJnStrHTl11CG7A9sVSm7wImKKbA7xwWQ3nv13usjW30148wfYgBETOU3bpPFhXzZf9HxZ02rTYYp5IBX4iE",
    offset: 0,
  },
  {
    name: "Julia Campos",
    handle: "@juliampos",
    tags: "Games • Lives",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtdbu_MdiZbcaA6NxxyS4bLrmsB_Iygg8BObW4Ryg0WtQsfdEVKu_3z2xhmcLsqH3hxEdmw6xcG0UP2F5RDqgRL7XgXu4dD3A1KoXRfv8Tw4r3cgnHKqMUL_MrhMKXT-y8dhBHX-SrNO_NgNP5K_jQgMKQT1uI8D3WBVbmA138CoxLEamrNM0mOc5zOrqzfTusPzbm4y8QzCEv8dz-QGk9Mdaw3jVUDJvmRlx3mO9o1xr3NI2KC3eZySeMyifLddSaaGFBRpbd-1U",
    offset: 0,
  },
  {
    name: "Thatales",
    handle: "@_thatales",
    tags: "The Sims • Humor",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZCJJACzeSOlfnJrKDdgBAVu--LsiukJkzDKQO4ngGD2I3uGIvO7pqhUDpn_RQn-3ZguE1qR_GrTzljDINCu_w1cej4GaPeGq55h2YZlxIQDkwQXmZFXYTI4RvgDiNhSjIRfylc_7vBu-BiBOXhVKok3D1f3RHJertQNWQbaOrQnsJ7iu05Y1IHk7h1ViVdqlqYztH3_od5D5MRYE4aZ1EE34te2dV9r-IF42AKvxIQHoL3gxM40F-VdiILrbaAbIUTionhfADFSM",
    offset: 0,
  },
  {
    name: "Camila Masri",
    handle: "@eucamilamasri",
    tags: "Dublagem • Humor",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoCsrdXb9txN_q0uKStnQ-6GL__7sd8eBHFGxv2a93P8izX9Y-lQeiLLlYiSN8ZYZ_8DJhYS1nZj4FpDDqbR_dyEqybIi_lH4UXZZEOCrOyTPD25oKO-02qZTzvVzGEdgSqS-l94MztfgMb8hZgs6UAC4J_2R7Jf1vzgYnJB4wP11D6_fniFwOBZEoq4FtB55odcGH0awewFzfXyNW2QFlMu02bUrpDZGIO6NIiSfow8bUcJ5U6gNihH9KS06IM6UI9H20oJJHNPI",
    offset: 0,
  },
  {
    name: "Isa Faracco",
    handle: "@isafaracco",
    tags: "Fortnite • Games",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4PZxGJN2RlUHMYhSh9OxPu_tBg35lAiQ0i4KHu32SvukN6vBB7yufj9OAADljlcsJ8FPlli6GXsj0iSJ5jyEZ1bs2eYGEm0xiwiSwml5G2RLIfLF-pEBqm6fRoCoVHv_8HeTGPFTuXrtsKeRNzUWKkVJCM-dV7uKYQ-RRJtxnHBGW7Ygh-hQCWzc58qzwpenl3Siq30HRtFXHXZzGYv8YmsEHprGiXFutq-Bbp9jtlDdu6wIC62HKbEpU_-H-21ey-WWyRg8nbVg",
    offset: 0,
  },
  {
    name: "Murart",
    handle: "@omurart",
    tags: "Música • Geek",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfxtIh1exeNJgvWF0y-11d2dwwxP230vPqPTwSJ2ZTk21E5lesD0S79wiuvVmxdiYwfpbuc4n32YxJAbK1iDzsA_K6z-7bECFithLEuOIJshlRX-_OLc81_Ag-D3rdEFcFRDyuEVd4tOE6TXetx2eryeI1c2jRV5dBc3kw8_qCaoOsPRJRVYPR6MXb6LsVfyy5j4MYdIr0adYtGfwTM9nQ9Wh0HSKTltR2cjN7EmKGY2Xsx0w-EMHgeKTLWrJYex7E93yXBQg2vA0",
    offset: 0,
  },
];

export default function Casting() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="casting"
      className="py-40 relative overflow-hidden bg-black/30"
    >
      {/* Watermark text */}
      <div className="absolute top-16 left-8 font-headline font-black text-[12rem] text-white/[0.02] uppercase leading-none pointer-events-none select-none">
        Creators
      </div>

      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/[0.07] pb-14">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-label font-bold text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block"
            >
              The Collective
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-headline font-black tracking-tighter leading-[0.8]"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
            >
              CREATORS <span className="text-white/15 italic">2026</span>
            </motion.h2>
          </div>
          <div className="max-w-sm">
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Vozes que dominam as plataformas com autenticidade absoluta.
            </p>

            <a
              href="#contato"
              className="inline-block border-b-2 border-primary text-primary font-headline font-bold uppercase tracking-widest text-xs py-2 hover:bg-primary hover:text-on-primary transition-all px-3"
            >
              Quero ser creator →
            </a>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {creators.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 + c.offset }}
              animate={inView ? { opacity: 1, y: c.offset } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[3/4] rounded-[1.75rem] overflow-hidden creator-card-shadow cursor-pointer"
            >
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.12]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <motion.div
                  initial={{ y: 10, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="space-y-1"
                >
                  <div className="font-headline font-black text-base text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                    {c.name}
                  </div>
                  <div className="font-label text-[9px] text-white/40 uppercase tracking-[0.15em] group-hover:text-primary/70 transition-colors">
                    {c.handle}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="font-label text-[9px] text-white/50 tracking-wide pt-1">
                      {c.tags}
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-on-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
