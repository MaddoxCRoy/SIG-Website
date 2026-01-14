import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 md:py-40 bg-[#0A0D12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-3"
          >
            <span className="text-xs tracking-[0.3em] text-[#BB0000] uppercase font-medium">
              About
            </span>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-9"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-[1.2] mb-10">
              We cultivate the next generation of investment professionals through rigorous research and active portfolio management.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <p className="text-slate-400 leading-relaxed">
                Scarlet Investment Group brings together Ohio State's most driven students 
                to conduct institutional-grade research across public equities and quantitative strategies. 
                Our members develop frameworks used by leading asset managers worldwide.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Through our flagship MStAR Fund, members gain hands-on experience managing 
                real capital, presenting investment theses, and defending positions—skills that 
                translate directly to careers in asset management, private equity, and hedge funds.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-16 border-t border-slate-800/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '40+', label: 'Active Members' },
              { value: '2', label: 'Investment Divisions' },
              { value: '$25K', label: 'AUM' },
              { value: '100%', label: 'Student-Led' },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-light text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}