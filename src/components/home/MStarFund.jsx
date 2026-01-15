import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Target, Shield, Activity } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Alpha Generation",
    description:
      "Pursuing returns uncorrelated to market beta through differentiated research.",
  },
  {
    icon: Layers,
    title: "Multi-Strategy",
    description:
      "Diversified across fundamental equity and quantitative approaches.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Disciplined position sizing and portfolio-level risk controls.",
  },
  {
    icon: Activity,
    title: "Active Oversight",
    description:
      "Weekly investment committee reviews and continuous monitoring.",
  },
];

export default function MStarFund() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="mstar"
      className="relative py-24 md:py-32 bg-[#FFFFF0] overflow-hidden"
    >
      {/* Subtle scarlet accent */}
      <div className="absolute inset-y-0 right-0 w-1/2" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-14 items-start">
          {/* Left: Fund Identity */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5"
          >
            <span className="block font-secondary text-xs tracking-[0.3em] uppercase text-[#9E1B32] mb-6">
              Flagship Fund
            </span>

            <h2 className="text-[clamp(3rem,6vw,4.5rem)] font-light tracking-tight text-[#1F2933]">
              MStAR
            </h2>

            <p className="mt-2 font-secondary text-sm text-[#4B5563]">
              Multi-Strategy Alpha Research
            </p>

            <p className="mt-8 max-w-md text-[#4B5563] leading-relaxed">
              The <span className="text-[#9E1B32]">MStAR Fund</span> represents
              the culmination of SIG’s research capabilities—a unified paper
              portfolio where both fundamental and quantitative teams deploy
              their highest-conviction ideas within a disciplined risk
              framework.
            </p>

            {/* Fund Metrics — Scarlet */}
            <div className="mt-10 grid grid-cols-2 gap-6 bg-[#7A1626] p-6">
              <div>
                <div className="text-xl font-light text-[#FFFFF0]">
                  Long / Short
                </div>
                <div className="mt-1 font-secondary text-sm text-[#FFFFF0]/80">
                  Equity Strategy
                </div>
              </div>
              <div>
                <div className="text-xl font-light text-[#FFFFF0]">Paper</div>
                <div className="mt-1 font-secondary text-sm text-[#FFFFF0]/80">
                  Trading Format
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.25 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="bg-[#7A1626] p-6"
                >
                  <pillar.icon className="h-5 w-5 text-[#FFFFF0] mb-4" />
                  <h4 className="text-[#FFFFF0] font-medium mb-2">
                    {pillar.title}
                  </h4>
                  <p className="font-secondary text-sm text-[#FFFFF0]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Philosophy Quote (kept light for contrast) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="mt-12 pl-6 border-l border-[#7A1626]/30"
            >
              <p className="italic text-[#4B5563] leading-relaxed max-w-lg">
                “Our objective is not only to generate returns, but to develop
                investment professionals who think rigorously about risk and
                reward.”
              </p>
              <p className="mt-4 font-secondary text-sm text-[#1F2933]">
                — SIG Investment Philosophy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
