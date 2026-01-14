import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Target, Shield, Activity } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Alpha Generation',
    description: 'Pursuing returns uncorrelated to market beta through differentiated research',
  },
  {
    icon: Layers,
    title: 'Multi-Strategy',
    description: 'Diversified across fundamental equity and quantitative approaches',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Disciplined position sizing and portfolio-level risk controls',
  },
  {
    icon: Activity,
    title: 'Active Oversight',
    description: 'Weekly investment committee reviews and continuous monitoring',
  },
];

export default function MStarFund() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 md:py-40 bg-[#0A0D12] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#BB0000]/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left: Fund Identity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <span className="text-xs tracking-[0.3em] text-[#BB0000] uppercase font-medium block mb-8">
              Flagship Fund
            </span>
            
            {/* Fund Name */}
            <div className="mb-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-4">
                MStAR
              </h2>
              <p className="text-slate-500 text-lg">
                Multi-Strategy Alpha Research
              </p>
            </div>

            {/* Fund Description */}
            <p className="text-slate-400 leading-relaxed mb-10">
              The MStAR Fund represents the culmination of SIG's research capabilities—a 
              paper portfolio where both fundamental and quantitative teams deploy their 
              highest-conviction ideas in a unified, risk-managed framework.
            </p>

            {/* Fund Metrics */}
            <div className="grid grid-cols-2 gap-6 p-6 bg-[#12161F] border border-slate-800/50 rounded-sm">
              <div>
                <div className="text-2xl font-light text-white mb-1">Long/Short</div>
                <div className="text-sm text-slate-500">Equity Strategy</div>
              </div>
              <div>
                <div className="text-2xl font-light text-white mb-1">Paper</div>
                <div className="text-sm text-slate-500">Trading Format</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group p-6 bg-[#12161F]/50 border border-slate-800/30 rounded-sm hover:border-slate-700/50 transition-all duration-300"
                >
                  <pillar.icon className="w-5 h-5 text-slate-600 group-hover:text-[#BB0000] transition-colors mb-4" />
                  <h4 className="text-white font-medium mb-2">{pillar.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 pl-6 border-l-2 border-[#BB0000]/30"
            >
              <p className="text-slate-400 italic leading-relaxed">
                "Our goal is not just to generate returns, but to develop 
                investment professionals who think rigorously about risk and reward."
              </p>
              <p className="text-sm text-slate-600 mt-4">— SIG Investment Philosophy</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}