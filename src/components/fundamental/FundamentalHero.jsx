import { motion } from "framer-motion";

export default function FundamentalHero() {
    return (
        <section className="pt-40 pb-28 bg-[#7A1626]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[clamp(3.25rem,6vw,5rem)] font-light tracking-tight text-[#FFFFF0]"
                >
                    Fundamental Research
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="mt-8 max-w-2xl text-[#FFFFF0] leading-relaxed"
                >
                    The Fundamental Team evaluates businesses and markets through
                    structured research, combining macroeconomic context, industry
                    analysis, and company-level valuation.
                </motion.p>
            </div>
        </section>
    );
}
