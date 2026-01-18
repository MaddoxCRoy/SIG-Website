import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MStarRole() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <section ref={ref} className="py-32 bg-[#FFFFF0]">
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
                    The MStAR Fund integrates research from both the Fundamental and
                    Quantitative teams, serving as a shared decision environment.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-6 max-w-2xl text-[#4B5563] leading-relaxed"
                >
                    The fund exists to reinforce discipline, accountability, and thoughtful
                    engagement with uncertainty — not to showcase outcomes.
                </motion.p>
            </div>
        </section>
    );
}
