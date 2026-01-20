import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MStarDecisionProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-36 bg-[#FFFFF0]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-light text-[#1F2933]"
        >
          Decision-Making
        </motion.h2>

        {/* Scarlet divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px bg-[#7A1626] origin-center mt-6 mx-auto w-24"
        />

        {/* Active Management Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-10 max-w-3xl mx-auto text-[#4B5563] leading-relaxed"
        >
          The MStAR Fund is actively managed, with responsibility split evenly
          between the Fundamental and Quantitative teams.
        </motion.p>

        {/* Team Responsibilities */}
        <div className="mt-16 grid md:grid-cols-2 gap-16 text-left">

          {/* Fundamental */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="border border-[#7A1626]/20 p-8"
          >
            <h3 className="text-lg font-light text-[#9E1B32] mb-4">
              Fundamental Team
            </h3>
            <p className="text-[#4B5563] leading-relaxed">
              The Fundamental Team manages its portion of the portfolio through
              company analysis and macroeconomic research.
              Members build valuation models, conduct industry and equity
              research, and develop sector-level views that inform trade
              decisions within their respective coverage areas.
            </p>
          </motion.div>

          {/* Quantitative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="border border-[#7A1626]/20 p-8"
          >
            <h3 className="text-lg font-light text-[#9E1B32] mb-4">
              Quantitative Team
            </h3>
            <p className="text-[#4B5563] leading-relaxed">
              The Quantitative Team manages its portion of the portfolio through
              systematic research and model-driven strategies. Members design
              and validate trading models intended to exploit market
              inefficiencies and play a central role in risk analysis and
              portfolio risk management.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
