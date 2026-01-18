import { motion } from "framer-motion";

export default function QuantHero() {
    return (
        <section className="pt-40 pb-28 bg-[#FFFFF0]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[clamp(3.25rem,6vw,5rem)] font-light tracking-tight text-[#1F2933]"
                >
                    Quantitative Research
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="mt-8 max-w-2xl text-[#4B5563] leading-relaxed"
                >
                    The Quantitative Team applies systematic, data-driven thinking to
                    investment research and decision-making. The emphasis is on structure,
                    validation, and risk awareness — using data to support judgment, not
                    replace it.
                </motion.p>
            </div>
        </section>
    );
}
