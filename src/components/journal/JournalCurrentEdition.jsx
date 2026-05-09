import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import SpringJournal2026 from '../../assets/spring-2026-journal.pdf';
import SpringCover2026 from '../../assets/spring-2026-cover.jpg';

const editions = [
  {
    label: "Spring 2026",
    status: "Published",
    active: true,
    pdf: SpringJournal2026,
    cover: SpringCover2026,
  },
  // Add future editions below:
  // {
  //   label: "Fall 2026",
  //   status: "Published",
  //   active: false,
  //   pdf: Fall2026Journal,
  //   cover: Fall2026Cover,
  // },
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

        {/* LEFT */}
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
              Published
            </span>
          </div>

          <p className="mt-6 text-[#4B5563] leading-relaxed max-w-xl">
            The inaugural edition of the SIG Research Journal synthesizes research
            produced across fundamental, quantitative, and macro-focused work during
            the Spring 2026 semester.
          </p>

          <a
            href={SpringJournal2026}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-3 border border-[#7A1626] text-sm text-[#7A1626] hover:bg-[#7A1626] hover:text-white transition-colors duration-200"
          >
            View Journal →
          </a>
        </motion.div>

        {/* RIGHT — Archive box */}
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

            <div className="overflow-y-auto pr-2 space-y-6">
              {editions.map((edition) => (
                <div key={edition.label} className="flex gap-4 items-start">

                  {/* Cover thumbnail */}
                  {edition.cover ? (
                    <img
                      src={edition.cover}
                      alt={`${edition.label} cover`}
                      className="w-16 h-20 object-cover border border-[#7A1626]/20 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-20 bg-[#F3F4F6] border border-[#7A1626]/20 flex-shrink-0" />
                  )}

                  {/* Info + link */}
                  <div className="flex flex-col justify-between h-20">
                    <div>
                      <div className="text-base text-[#1F2933] font-medium">
                        {edition.label}
                      </div>
                      <div className="text-sm text-[#9E1B32] mt-0.5">
                        {edition.status}
                      </div>
                    </div>
                    {edition.pdf && (
                      <a
                        href={edition.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#6B7280] hover:text-[#7A1626] underline underline-offset-2 transition-colors"
                      >
                        View PDF →
                      </a>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}