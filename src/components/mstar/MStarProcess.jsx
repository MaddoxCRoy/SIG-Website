import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    "Research Inputs",
    "Discussion & Review",
    "Risk Consideration",
    "Portfolio Decisions",
    "Reassessment & Iteration",
];

export default function MStarDecisionProcess() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <section ref={ref} className="py-36 bg-[#FFFFF0]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-light text-[#1F2933]"
                >
                    Decision-Making Process
                </motion.h2>

                {/* Process Flow */}
                <div className="mt-20 grid md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: 0.2 + index * 0.12,
                                ease: "easeOut",
                            }}
                            className="border border-[#7A1626]/20 px-6 py-10 text-center"
                        >
                            <span className="font-secondary text-sm text-[#1F2933]">
                                {step}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    className="mt-16 max-w-2xl text-[#4B5563] leading-relaxed"
                >
                    Decisions are revisited continuously. The process is iterative by
                    design, reflecting changing information, evolving risk, and ongoing
                    debate.
                </motion.p>
            </div>
        </section>
    );
}
