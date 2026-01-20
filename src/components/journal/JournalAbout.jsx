import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function JournalAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-24 bg-[#FFFFF0]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:col-span-4"
        >
          <span className="font-secondary text-xs tracking-[0.3em] uppercase text-[#9E1B32]">
            Purpose
          </span>
        </motion.div>

        {/* Text + Scarlet Rule */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="md:col-span-8 relative pl-6"
        >
          {/* Scarlet vertical line */}
          <motion.div
            className="absolute left-0 top-1 w-px bg-[#7A1626] origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ height: "100%" }}
          />

          <p className="text-[#4B5563] leading-relaxed max-w-2xl">
            The SIG Research Journal showcases the research and analytical work produced by members across the organization.
            It serves as a curated collection of the ideas,
            questions, and analysis developed throughout the semester.
          </p>

          <p className="mt-6 text-[#4B5563] leading-relaxed max-w-2xl">
            Each edition documents a moment in the club’s ongoing intellectual work,
            emphasizing judgment, synthesis, and the progression of thought over time
            instead of definitive market views or outcomes.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
