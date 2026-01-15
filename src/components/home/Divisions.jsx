import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, BarChart3, ArrowRight } from "lucide-react";

const divisions = [
  {
    id: "fundamental",
    title: "Fundamental",
    subtitle: "Deep Value Research",
    description:
      "Our fundamental analysts conduct bottom-up research across sectors, building detailed financial models and developing differentiated investment theses. The team focuses on identifying mispriced securities through rigorous due diligence and variant perception.",
    capabilities: [
      "Financial statement analysis",
      "Industry & competitive dynamics",
      "Management assessment",
      "Valuation frameworks",
    ],
    icon: TrendingUp,
  },
  {
    id: "quantitative",
    title: "Quantitative",
    subtitle: "Systematic Strategies",
    description:
      "The quantitative team develops systematic trading strategies using statistical analysis, machine learning, and alternative data. Members build and backtest models that identify market inefficiencies across asset classes.",
    capabilities: [
      "Factor-based investing",
      "Statistical arbitrage",
      "Machine learning models",
      "Alternative data analysis",
    ],
    icon: BarChart3,
  },
];

function DivisionCard({ division, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="group"
    >
    <div
      className="
        relative h-full bg-[#7A1626] p-10 md:p-12 rounded-md overflow-hidden
        transition-all duration-300
        group-hover:bg-[#831A2C]
        group-hover:-translate-y-[2px]
        group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]
      "
    >
        {/* Subtle integration line (always visible) */}
        <div className="absolute inset-x-0 top-0 h-px bg-[#FFFFF0]/25" />

        {/* Hover accent (clear + intentional) */}
        <div className="absolute inset-x-0 top-0 h-px bg-[#9E1B32] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Icon */}
        <div className="mb-6">
          <division.icon className="h-7 w-7 text-[#FFFFF0]" />
        </div>

        {/* Content */}
        <span className="block font-secondary text-xs tracking-[0.25em] uppercase text-[#FFFFF0]/80 mb-3">
          {division.subtitle}
        </span>

        <h3 className="text-2xl md:text-[1.75rem] font-light text-[#FFFFF0] mb-5">
          {division.title}
        </h3>

        <p className="text-[#FFFFF0]/80 leading-relaxed mb-8">
          {division.description}
        </p>

        {/* Capabilities */}
        <ul className="space-y-3">
          {division.capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-center gap-3 font-secondary text-sm text-[#FFFFF0]/80"
            >
              <span className="h-1 w-1 rounded-full bg-[#FFFFF0]" />
              {capability}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-2 font-secondary text-sm text-[#FFFFF0]">
          <span>Learn more</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Divisions() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, {
    once: true,
    margin: "-120px",
  });

  return (
    <section id="divisions" className="py-24 md:py-32 bg-[#FFFFF0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="block font-secondary text-xs tracking-[0.3em] uppercase text-[#9E1B32] mb-4">
            Our Structure
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#1F2933] max-w-2xl">
            Two distinct approaches.
            <br />
            One unified mission.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {divisions.map((division, index) => (
            <DivisionCard
              key={division.id}
              division={division}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
