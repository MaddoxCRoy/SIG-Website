import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

export default function Hero() {
  /* Cursor tracking */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 24, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 24, damping: 18 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x * 16);
      mouseY.set(y * 16);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden bg-[#FFFFF0] scroll-mt-24"
      style={{ minHeight: "calc(100vh - 96px)" }}
    >
      {/* =====================
          Scarlet Dot Field (Single Layer)
         ===================== */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          backgroundImage: `
            radial-gradient(rgba(158,27,50,0.9) 1.6px, transparent 1.6px)
          `,
          backgroundSize: "20px 20px",
          opacity: 0.26,
        }}
        animate={{
          backgroundPosition: ["0px 0px", "48px 36px", "0px 0px"],
        }}
        transition={{
          duration: 32,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Soft ivory wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFF0]/45 via-[#FFFFF0]/65 to-[#FFFFF0]" />

      {/* =====================
          Content
         ===================== */}
      <div className="relative z-10 max-w-6xl text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="leading-[0.95]">
            <h1 className="text-[clamp(3.25rem,7vw,6.5rem)] font-light tracking-[-0.04em] text-[#1F2933]">
              Scarlet
            </h1>
            <h1 className="text-[clamp(3.25rem,7vw,6.5rem)] font-light tracking-[-0.04em] text-[#1F2933]">
              Investment Group
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10"
        >
          <div className="w-12 h-px bg-[#9E1B32] mx-auto mb-6" />

          <p className="text-base md:text-lg text-[#4B5563] font-light leading-relaxed max-w-2xl mx-auto">
            The premier multi-strategy investment organization
            <br className="hidden md:block" />
            at The Ohio State University
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-14"
        >
          <span className="text-xs tracking-[0.3em] text-[#1F2933] uppercase">
            Est. 2024
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-5 h-5 text-[#4B5563]" />
      </motion.div>
    </section>
  );
}
