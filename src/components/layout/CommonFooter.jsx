import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";


export default function CommonFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      id="join"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
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
