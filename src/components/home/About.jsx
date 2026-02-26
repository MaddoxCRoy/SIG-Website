import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";



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
              Developing the next generation of investment professionals.
            </h2>

            <div className="mt-8 grid md:grid-cols-2 gap-10">
              <p className="text-[#4B5563] leading-relaxed">
                Scarlet Investment Group brings together Ohio State’s most driven
                students to conduct research across
                equities and quantitative strategies.
                Members become thoughtful and well-rounded leaders through applied research and collaboration.
              </p>

              <p className="text-[#4B5563] leading-relaxed">
                Through our flagship <span className="text-[#9E1B32]">MStAR Fund</span>,
                members gain hands-on experience in managing capital,
                presenting investment theses, developing strategies, and defending their decisions.

              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-12 gap-12">
            {/* Empty column to match label */}
            <div className="md:col-span-3" />

            {/* CTA aligned with text column */}
            <div className="md:col-span-9">
              <Link
                to="/about"
                className="
          inline-flex items-center
          font-secondary text-sm tracking-wide
          text-[#9E1B32]
          hover:text-[#7A1626]
          transition-colors
        "
              >
                Learn more about Scarlet Investment Group →
              </Link>
            </div>
          </div>
        </motion.div>



        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-20 md:mt-24 pt-12 border-t border-[#7A1626]/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "50+", label: "Active Members" },
              { value: "2", label: "Investment Divisions" },
              { value: "Semesterly", label: "Journal Publication" },
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
