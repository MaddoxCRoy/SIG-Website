import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, BarChart3, ArrowRight } from 'lucide-react';

const divisions = [
  {
    id: 'fundamental',
    title: 'Fundamental',
    subtitle: 'Deep Value Research',
    description: 'Our fundamental analysts conduct bottom-up research across sectors, building detailed financial models and developing differentiated investment theses. The team focuses on identifying mispriced securities through rigorous due diligence and variant perception.',
    capabilities: [
      'Financial statement analysis',
      'Industry & competitive dynamics',
      'Management assessment',
      'Valuation frameworks',
    ],
    icon: TrendingUp,
  },
  {
    id: 'quantitative',
    title: 'Quantitative',
    subtitle: 'Systematic Strategies',
    description: 'The quantitative team develops systematic trading strategies using statistical analysis, machine learning, and alternative data. Members build and backtest models that identify market inefficiencies across asset classes.',
    capabilities: [
      'Factor-based investing',
      'Statistical arbitrage',
      'Machine learning models',
      'Alternative data analysis',
    ],
    icon: BarChart3,
  },
];

function DivisionCard({ division, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative p-8 md:p-12 bg-[#12161F] border border-slate-800/50 rounded-sm hover:border-slate-700/50 transition-all duration-500">
        {/* Hover accent */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#BB0000] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        
        {/* Icon */}
        <div className="mb-8">
          <division.icon className="w-8 h-8 text-slate-600 group-hover:text-[#BB0000] transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="mb-8">
          <span className="text-xs tracking-[0.2em] text-slate-500 uppercase mb-3 block">
            {division.subtitle}
          </span>
          <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
            {division.title}
          </h3>
          <p className="text-slate-400 leading-relaxed">
            {division.description}
          </p>
        </div>

        {/* Capabilities */}
        <div className="space-y-3">
          {division.capabilities.map((capability, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
              <div className="w-1 h-1 bg-[#BB0000] rounded-full" />
              <span>{capability}</span>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600 group-hover:text-slate-400 transition-colors">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Divisions() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-40 bg-[#0D1017]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-[#BB0000] uppercase font-medium block mb-6">
            Our Structure
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-white max-w-2xl">
            Two distinct approaches. One unified mission.
          </h2>
        </motion.div>

        {/* Division Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {divisions.map((division, index) => (
            <DivisionCard key={division.id} division={division} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}