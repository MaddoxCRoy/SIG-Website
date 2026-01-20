import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    "Research Inputs",
    "Discussion & Review",
    "Risk Consideration",
    "Portfolio Decisions",
    "Iteration",
];

export default function MStarDecisionProcess() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <section ref={ref} className="py-36 bg-[#FFFFF0]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl md:text-3xl font-light text-[#1F2933]"
                >
                    Decision-Making
                </motion.h2>

                {/* Process Flow */}
                <div className="mt-10 grid md:grid-cols-5 gap-8">
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

                {/* Active Management Statement */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="mt-10 max-w-2xl text-[#4B5563] leading-relaxed"
                >
                    The MStAR Fund is actively managed, with responsibility split evenly
                    between the Fundamental and Quantitative teams.
                </motion.p>

                {/* Team Responsibilities */}
                <div className="mt-15 grid md:grid-cols-12 gap-16">
                    {/* Fundamental */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="md:col-span-6"
                    >
                        <h3 className="text-lg font-light text-[#9E1B32] mb-4">
                            Fundamental Team
                        </h3>
                        <p className="text-[#4B5563] leading-relaxed max-w-md">
                            The Fundamental Team manages its portion of the portfolio through
                            company analysis and macroeconomic research.
                            Members build valuation models, conduct industry and equity
                            research, and develop sector-level views that inform trade
                            decisions within their respective coverage areas.
                        </p>
                    </motion.div>

                    {/* Quantitative */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
                        className="md:col-span-6"
                    >
                        <h3 className="text-lg font-light text-[#9E1B32] mb-4">
                            Quantitative Team
                        </h3>
                        <p className="text-[#4B5563] leading-relaxed max-w-md">
                            The Quantitative Team manages its portion of the portfolio through
                            systematic research and model-driven strategies. Members design
                            and validate trading models intended to exploit market
                            inefficiencies and play a central role in risk analysis and
                            portfolio risk management.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
