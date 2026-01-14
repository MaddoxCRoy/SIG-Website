import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0D12]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0D12]/50 to-[#0A0D12]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Wordmark */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white">
              Scarlet
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white">
              Investment
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] text-white">
              Group
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Scarlet accent line */}
          <div className="w-16 h-[2px] bg-[#BB0000] mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            The premier multi-strategy investment organization<br className="hidden md:block" /> at The Ohio State University
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <span className="text-xs tracking-[0.3em] text-slate-500 uppercase">
            Est. 2024
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}