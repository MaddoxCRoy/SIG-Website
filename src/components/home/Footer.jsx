import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      className="bg-[#FFFFF0] border-t border-[#7A1626]/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-20 md:py-24 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-light text-[#1F2933]">
            Join us.
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-[#4B5563] leading-relaxed">
            Applications for Spring 2026 recruitment has not been opened yet. Check back soon.
          </p>

          {/* Apply / Contact Button */}
          <a
            href="mailto:scarletinvestmentgroup@gmail.com"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-[#7A1626] px-8 py-4 font-secondary text-sm tracking-wide text-[#FFFFF0] hover:bg-[#9E1B32] transition-colors"
          >
            Apply / Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 border-t border-[#7A1626]/20"
        >
          {/* Identity */}
          <div className="text-center md:text-left">
            <div className="text-sm font-light text-[#1F2933] tracking-wide">
              Scarlet Investment Group
            </div>
            <div className="mt-1 font-secondary text-xs text-[#4B5563]">
              The Ohio State University
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:scarletinvestmentgroup@gmail.com"
              className="flex items-center gap-2 font-secondary text-sm text-[#4B5563] hover:text-[#1F2933] transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>
            <a
              href="https://www.linkedin.com/company/scarlet-investment-group/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-secondary text-sm text-[#4B5563] hover:text-[#1F2933] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="font-secondary text-xs text-[#4B5563]">
            © {new Date().getFullYear()} Scarlet Investment Group.&nbsp; All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
