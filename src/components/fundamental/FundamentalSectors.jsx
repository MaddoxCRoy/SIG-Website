import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FundamentalSectors() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <section ref={ref} className="py-28 bg-[#FFFFF0]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
                {/* Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:col-span-5"
                >
                    <div className="aspect-square bg-[#E5E7EB]" />
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="md:col-span-7"
                >
                    <h2 className="text-2xl md:text-3xl font-light text-[#1F2933] mb-6">
                        Sector-Based Research
                    </h2>

                    <p className="text-[#4B5563] leading-relaxed max-w-xl">
                        Members are organized by industry sectors to promote continuity,
                        accountability, and deeper understanding over time.
                    </p>

                    <p className="mt-6 text-[#4B5563] leading-relaxed max-w-xl">
                        Senior Associates oversee sector research, guiding project direction
                        and ensuring consistency in analytical standards and assumptions.
                    </p>

                    <p className="mt-6 text-[#4B5563] leading-relaxed max-w-xl">
                        Projects are designed to build durable insight rather than isolated
                        conclusions, reinforcing a long-term perspective on businesses and
                        industries.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
