import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="py-24 md:py-32 bg-[#080A0E] border-t border-slate-800/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Join the next class
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10">
            We recruit exceptional students each semester who demonstrate intellectual 
            curiosity, analytical rigor, and a passion for financial markets.
          </p>
          <a 
            href="mailto:scarletinvestmentgroup@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#BB0000] text-white text-sm tracking-wide hover:bg-[#9A0000] transition-colors duration-300"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-800/30"
        >
          {/* Logo */}
          <div>
            <span className="text-white font-light tracking-wide">
              Scarlet Investment Group
            </span>
            <p className="text-sm text-slate-600 mt-1">
              The Ohio State University
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a 
              href="mailto:scarletinvestmentgroup@gmail.com"
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} SIG. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}