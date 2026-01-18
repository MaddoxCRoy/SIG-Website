import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function JournalAbout() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <section ref={ref} className="py-24 bg-[#FFFFF0]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="md:col-span-4"
                >
                    <span className="font-secondary text-xs tracking-[0.3em] uppercase text-[#9E1B32]">
                        Purpose
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="md:col-span-8"
                >
                    <p className="text-[#4B5563] leading-relaxed max-w-2xl">
                        The SIG Research Journal exists to capture how the organization
                        thinks over time. Rather than highlighting isolated conclusions,
                        the journal reflects the process, synthesis, and intellectual
                        development that emerge from ongoing research across the club.
                    </p>

                    <p className="mt-6 text-[#4B5563] leading-relaxed max-w-2xl">
                        Each edition represents a snapshot of collective thinking — shaped
                        by collaboration, debate, and iteration — rather than a definitive
                        statement on markets or outcomes.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
