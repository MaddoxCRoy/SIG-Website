import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 md:py-32 bg-[#FFFFF0]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-3"
          >
            <span className="font-secondary text-xs tracking-[0.3em] uppercase text-[#9E1B32]">
              About
            </span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="md:col-span-9"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light leading-[1.25] text-[#1F2933]">
              We cultivate the next generation of investment professionals
              through rigorous research and active portfolio management.
            </h2>

            <div className="mt-8 grid md:grid-cols-2 gap-10">
              <p className="text-[#4B5563] leading-relaxed">
                Scarlet Investment Group brings together Ohio State’s most driven
                students to conduct institutional-grade research across public
                equities and quantitative strategies. Members develop frameworks
                used by leading asset managers worldwide.
              </p>

              <p className="text-[#4B5563] leading-relaxed">
                Through our flagship <span className="text-[#9E1B32]">MStAR Fund</span>,
                members gain hands-on experience managing real capital,
                presenting investment theses, and defending positions—skills
                that translate directly to careers in asset management, private
                equity, and hedge funds.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-20 md:mt-24 pt-12 border-t border-[#7A1626]/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "40+", label: "Active Members" },
              { value: "2", label: "Investment Divisions" },
              { value: "$25K", label: "AUM" },
              { value: "100%", label: "Student-Led" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-light text-[#1F2933]">
                  {stat.value}
                </div>
                <div className="mt-1 font-secondary text-sm text-[#4B5563] tracking-wide">
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
