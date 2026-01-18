import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, FileText, Users, Layers } from "lucide-react";

const highlights = [
    {
        icon: FileText,
        title: "Institutional-Grade Research",
        description:
            "Semesterly publication featuring original equity research, quantitative strategies, and market analysis produced by SIG members.",
    },
    {
        icon: Layers,
        title: "Unified Research Platform",
        description:
            "Integrates fundamental analysis, systematic research, macro commentary, and club initiatives into a single cohesive publication.",
    },
    {
        icon: Users,
        title: "Member Showcase",
        description:
            "Provides a tangible, resume-worthy deliverable that demonstrates technical skill, intellectual rigor, and collaboration.",
    },
    {
        icon: BookOpen,
        title: "Enduring Record",
        description:
            "Preserves SIG’s intellectual output semester after semester as a growing body of student-produced investment research.",
    },
];

export default function ResearchJournal() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-120px" });

    return (
        <section
            ref={ref}
            id="journal"
            className="py-24 md:py-32 bg-[#FFFFF0]"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-14 items-start">
                    {/* Section Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="md:col-span-3"
                    >
                        <span className="font-secondary text-xs tracking-[0.3em] uppercase text-[#9E1B32]">
                            Research Journal
                        </span>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                        className="md:col-span-9"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light leading-[1.25] text-[#1F2933] max-w-3xl">
                            The flagship publication showcasing the depth,
                            rigor, and ambition of SIG’s research culture.
                        </h2>

                        <p className="mt-8 max-w-2xl text-[#4B5563] leading-relaxed">
                            The <span className="text-[#9E1B32]">SIG Research Journal</span>{" "}
                            captures the highest-quality work produced by our members across
                            fundamental research, quantitative development,
                            and macroeconomic analysis.
                        </p>

                        {/* Highlights Grid */}
                        <div className="mt-14 grid sm:grid-cols-2 gap-10">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.25 + index * 0.1,
                                        ease: "easeOut",
                                    }}
                                >
                                    <item.icon className="h-5 w-5 text-[#9E1B32] mb-4" />
                                    <h4 className="font-medium text-[#1F2933] mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="font-secondary text-sm text-[#4B5563] leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                            className="mt-16"
                        >
                            <button
                                type="button"
                                className="
                  inline-flex items-center gap-2
                  rounded-sm bg-[#7A1626]
                  px-8 py-4
                  font-secondary text-sm tracking-wide
                  text-[#FFFFF0]
                  hover:bg-[#9E1B32]
                  transition-colors
                "
                            >
                                Explore the Research Journal
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
