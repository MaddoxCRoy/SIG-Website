import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const instruments = [
  "Public Equities",
  "Options",
  "Digital Assets",
  "Currencies",
  "Commodities",
  "Systematic Strategies"
];

export default function MStarInstruments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  // Repeat the list generously so the strip never runs out of content,
  // regardless of screen width — this is what makes the loop seamless.
  const REPEATS = 6;
  const track = Array(REPEATS).fill(instruments).flat();

  return (
    <section ref={ref} className="py-20 bg-[#FFFFF0]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-light text-[#1F2933] mb-10"
        >
          Scope of Decisions
        </motion.h2>
      </div>

      {/* Ticker strip — full-bleed, bordered top/bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative border-y border-[#1F2933]/15 py-6 overflow-hidden group"
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFFFF0] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFFFF0] to-transparent z-10" />

        <div className="flex w-max whitespace-nowrap animate-mstar-ticker group-hover:[animation-play-state:paused]">
          {track.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="text-lg md:text-xl font-light text-[#1F2933] px-8">
                {item}
              </span>
              <span className="text-[#7A1626] text-sm">—</span>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes mstar-ticker-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-100% / ${REPEATS})); }
          }
          .animate-mstar-ticker {
            animation: mstar-ticker-scroll 20s linear infinite;
          }
        `}</style>
      </motion.div>
    </section>
  );
}