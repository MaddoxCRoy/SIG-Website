import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const framework = [
  "Macroeconomic Context",
  "Industry Research",
  "Company Analysis",
  "Valuation & Assumptions",
  "Portfolio Perspective",
];

export default function FundamentalFramework() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-28 bg-[#FFFFF0]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">

        <div className="md:col-span-6 relative pl-6">
        {/* Scarlet vertical rule */}
        <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-0 top-1 w-px bg-[#7A1626] origin-top"
            style={{ height: "100%" }}
        />

        {/* Eyebrow */}
        <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="block text-xs tracking-widest uppercase text-[#7A1626] mb-3"
        >
            Investment Process
        </motion.span>

        {/* Heading */}
        <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#1F2933]"
        >
            Research Framework
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-md text-[#4B5563] leading-relaxed"
        >
            Fundamental research follows a structured progression that moves from
            macroeconomic context to company-level understanding.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="mt-4 max-w-md text-[#4B5563] leading-relaxed"
        >
            Each stage builds conviction while maintaining awareness of portfolio-level
            risk and opportunity.
        </motion.p>

        {/* Key principles */}
        <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mt-6 space-y-2 text-sm text-[#1F2933]"
        >
            <li>• Discipline over intuition</li>
            <li>• Bottom-up analysis informed by top-down context</li>
            <li>• Portfolio-aware decision making</li>
        </motion.ul>
        </div>


        {/* Right: Framework Visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            {framework.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.35 + index * 0.08,
                  ease: "easeOut",
                }}
                className="border border-[#7A1626]/20 px-6 py-5 text-left"
              >
                <span className="font-secondary text-sm text-[#1F2933]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
