import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MStarWhatItIs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <section ref={ref} className="py-28 bg-[#FFFFF0]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:col-span-5"
                >
                    <h2 className="text-2xl md:text-3xl font-light text-[#1F2933]">
                        What the Fund Is
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="md:col-span-7 space-y-6"
                >
                    <p className="text-[#4B5563] leading-relaxed max-w-xl">
                        The MStAR Fund is a student-managed paper portfolio that integrates
                        research from both teams of SIG into a unified decision environment.
                    </p>

                    <p className="text-[#4B5563] leading-relaxed max-w-xl">
                        The fund allows members to turn their ideas into execution. The fund exists to give research consequence.
                        Members implement strategies, express conviction, and observe how their decisions unfold in real market conditions.
                    </p>

                </motion.div>
            </div>
        </section>
    );
}
