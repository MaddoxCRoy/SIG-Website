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
                    Members engage in repeated cycles of research, discussion, and review.
                    Emphasis is placed on forming well-reasoned views and articulating
                    underlying assumptions clearly.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-6 max-w-2xl text-[#4B5563] leading-relaxed"
                >
                    Research is collaborative and discussion-driven. Members are encouraged
                    to challenge ideas constructively and refine conclusions through
                    feedback rather than persuasion.
                </motion.p>
            </div>
        </section>
    );
}
