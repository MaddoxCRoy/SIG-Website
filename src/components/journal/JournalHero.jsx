import { motion } from "framer-motion";

export default function JournalHero() {
    return (
        <section className="pt-40 pb-28 bg-[#7A1626]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[clamp(3.25rem,6vw,5rem)] font-light tracking-tight text-[#FFFFF0]"
                >
                    SIG Research Journal
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                    className="mt-6 max-w-2xl text-[#FFFFF0] leading-relaxed"
                >
                    A semesterly publication capturing and showcasing the ideas, analysis, and
                    research produced within the Scarlet Investment Group.
                </motion.p>
            </div>
        </section>
    );
}
