import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectorAllocationImage from '../../assets/SectorAllocationImage.png';

export default function FundamentalSectors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-28 bg-[#FFFFF0]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-6 flex justify-center"
        >
          <img
            src={SectorAllocationImage}
            alt="Scarlet Investment Group"
            className="w-full max-w-3xl h-auto"
          />
        </motion.div>

        {/* Text + Scarlet Rule */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="md:col-span-6 relative pl-6"
        >
          {/* Scarlet vertical line */}
          <motion.div
            className="absolute left-0 top-1 w-px bg-[#7A1626] origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ height: "100%" }}
          />

          <h2 className="text-2xl md:text-3xl font-light text-[#1F2933] mb-6">
            Sector-Based Research
          </h2>

          <p className="text-[#4B5563] leading-relaxed max-w-md">
            The fundamental team is split into 8 industry sectors:
            Technology, Financials, Healthcare, Consumer Discretionary,
            Industrials, Commodities and Crypto, Energy and Utilities,
            Consumer Staples.
          </p>

          <p className="mt-6 text-[#4B5563] leading-relaxed max-w-md">
            Each sector is responsible for conducting ongoing research within
            its coverage area and contributing sector-level perspectives to
            portfolio decisions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
