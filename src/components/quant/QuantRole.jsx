import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function QuantRole() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <section ref={ref} className="py-28 bg-[#FFFFF0]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-light text-[#1F2933]"
                >
                    Role Within SIG
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="mt-8 max-w-2xl text-[#4B5563] leading-relaxed"
                >
                    The Quantitative Team operates alongside the Fundamental Team as part
                    of a unified research organization. Quantitative insights contribute
                    systematic perspectives on risk, behavior, and uncertainty.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-6 max-w-2xl text-[#4B5563] leading-relaxed"
                >
                    Research feeds into portfolio discussions through the MStAR Fund,
                    where ideas are evaluated in the context of portfolio construction
                    and risk awareness.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                    className="mt-6 max-w-2xl text-[#4B5563] leading-relaxed"
                >
                    Decision-making reflects multiple viewpoints. Quantitative research
                    complements fundamental judgment rather than operating in isolation.
                </motion.p>
            </div>
        </section>
    );
}
