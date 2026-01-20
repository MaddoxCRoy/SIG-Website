import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    "Data & Assumptions",
    "Research & Hypothesis Formation",
    "Testing & Validation",
    "Risk Considerations",
    "Portfolio Discussion & Review",
];

export default function QuantProcess() {
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
                    Research Process
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="mt-6 max-w-xl text-[#4B5563] leading-relaxed"
                >
                    Quantitative research is the process of gathering data, interpreting data, and making investment decisions with data.
                    This includes managing risk and creating proprietary strategies.
                </motion.p>

                {/* Pipeline */}
                <div className="mt-16 grid md:grid-cols-5 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.25 + index * 0.1,
                                ease: "easeOut",
                            }}
                            className="border border-[#7A1626]/20 px-4 py-6 text-center"
                        >
                            <span className="font-secondary text-sm text-[#1F2933]">
                                {step}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
