import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const instruments = [
  "Public Equities",
  "Options",
  "Digital Assets",
  "Systematic Strategies",
];

export default function MStarInstruments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-28 bg-[#FFFFF0]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-light text-[#1F2933] text-center"
        >
          Scope of Decisions
        </motion.h2>

        {/* Instrument Cards */}
        <div className="mt-14 grid md:grid-cols-4 gap-8">
          {instruments.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              className="
                bg-[#7A1626]
                border border-[#7A1626]
                px-6 py-10
                text-center
                transition
              "
            >
              <span className="font-secondary text-sm tracking-wide text-[#FFFFF0]">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
