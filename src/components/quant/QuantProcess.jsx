import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import QuantProcessImage from "../../assets/QuantProcessImage.png";

export default function QuantProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-28 bg-[#FFFFF0]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-4"
        >
          <h2 className="text-2xl md:text-3xl font-light text-[#1F2933]">
            Research Process
          </h2>

          <p className="mt-6 max-w-xl text-[#4B5563] leading-relaxed">
            Quantitative research is the process of gathering data, interpreting data, and making investment decisions with data.
            This includes managing risk and creating proprietary strategies.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="md:col-span-8 flex justify-center"
        >
          <img
            src={QuantProcessImage}
            alt="Quantitative Research Process"
            className="w-full max-w-3xl h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}
