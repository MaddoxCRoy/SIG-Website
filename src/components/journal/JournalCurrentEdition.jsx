import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* FUTURE-PROOF DATA */
const editions = [
  { label: "Spring 2026", status: "In Progress", active: true },
];

export default function JournalCurrentEdition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-[#FFFFF0] border-t border-[#7A1626]/20"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-start">

        {/* LEFT — UNCHANGED */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7 max-w-3xl"
        >
          <span className="block font-secondary text-xs tracking-[0.3em] uppercase text-[#9E1B32] mb-4">
            Current Edition
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-[#1F2933]">
            Spring 2026 Edition
          </h2>

          <div className="mt-6 inline-block px-4 py-2 border border-[#7A1626]/30">
            <span className="font-secondary text-sm text-[#7A1626] tracking-wide">
              In Progress
            </span>
          </div>

          <p className="mt-6 text-[#4B5563] leading-relaxed max-w-xl">
            The inaugural edition of the SIG Research Journal is currently being
            developed. This edition will synthesize research produced across
            fundamental, quantitative, and macro-focused work during the
            Spring 2026 semester.
          </p>

          <p className="mt-4 text-[#4B5563] leading-relaxed max-w-xl">
            The journal will be published later in the semester and archived
            here upon release.
          </p>
        </motion.div>

        {/* RIGHT — SCALABLE ARCHIVE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="md:col-span-5"
        >
          <div className="border border-[#7A1626]/30 p-8 h-[300px] flex flex-col">
            <span className="block font-secondary text-xs tracking-[0.3em] uppercase text-[#6B7280] mb-6">
              Journal Archive
            </span>

            {/* Scrollable list */}
            <div className="overflow-y-auto pr-2 space-y-5">
              {editions.map((edition) => (
                <div
                  key={edition.label}
                  className={`border-l-2 pl-4 ${
                    edition.active
                      ? "border-[#9E1B32]"
                      : "border-transparent"
                  }`}
                >
                  <div
                    className={`text-base ${
                      edition.active
                        ? "text-[#1F2933] font-medium"
                        : "text-[#9CA3AF]"
                    }`}
                  >
                    {edition.label}
                  </div>

                  {edition.status && (
                    <div className="mt-1 text-sm text-[#9E1B32]">
                      {edition.status}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
