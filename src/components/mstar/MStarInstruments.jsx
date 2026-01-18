import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const instruments = [
    "Public Equities",
    "Options",
    "Digital Assets",
    "Systematic Strategies",
];

export default function MStarInstruments() {
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
                    Scope of Decisions
                </motion.h2>

                <div className="mt-12 grid md:grid-cols-4 gap-6">
                    {instruments.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.2 + index * 0.1,
                                ease: "easeOut",
                            }}
                            className="border border-[#7A1626]/20 px-6 py-8 text-center"
                        >
                            <span className="font-secondary text-sm text-[#1F2933]">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
