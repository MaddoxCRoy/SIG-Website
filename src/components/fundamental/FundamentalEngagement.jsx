import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FundamentalEngagement() {
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
                    Member Engagement
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="mt-8 max-w-2xl text-[#4B5563] leading-relaxed"
                >
                    Members on the Fundamental Team engage with a mix of ongoing research, discussion, and structured presentations.
                    Work is collaborative and iterative, with members contributing analysis, questioning assumptions, and refining sector views over time.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-6 max-w-2xl text-[#4B5563] leading-relaxed"
                >
                    As members progress, responsibilities expand from supporting research and thesis development to leading portions of sector analysis and trading.
                    This structure allows members to develop both technical skills and investment judgment through exposure to real analytical decisions.
                </motion.p>
            </div>
        </section>
    );
}
