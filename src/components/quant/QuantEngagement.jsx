import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RandomWalksImage from "../../assets/RandomWalksImage.png";

export default function QuantEngagement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="py-28 bg-[#FFFFF0]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-start">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7"
        >
          <img
            src={RandomWalksImage}
            alt="Quantitative research visualization"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="md:col-span-5"
        >
          <h2 className="text-2xl md:text-3xl font-light text-[#1F2933] mb-6">
            Member Engagement
          </h2>

          <p className="text-[#4B5563] leading-relaxed max-w-xl">
            Members work in small teams or project-based structures throughout
            the semester. Research emphasizes careful problem definition,
            thoughtful analysis, and clear mathematical backtesting.
          </p>

          <p className="mt-6 text-[#4B5563] leading-relaxed max-w-xl">
            Work is collaborative and reviewed regularly. Members are expected
            to explain assumptions, discuss limitations, and engage
            constructively with feedback.
          </p>

          <p className="mt-6 text-[#4B5563] leading-relaxed max-w-xl">
            Experience levels vary, but all members are expected to approach
            research with rigor, curiosity, and intellectual honesty.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
