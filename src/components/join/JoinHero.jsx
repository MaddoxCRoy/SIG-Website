import { motion } from "framer-motion";

export default function JoinHero() {
    return (
        <section className="pt-44 pb-32 bg-[#7A1626]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[clamp(3.5rem,7vw,5.5rem)] font-light tracking-tight text-[#FFFFF0]"
                >
                    Join Us
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                    className="mt-8 max-w-2xl text-lg italic text-[#FFFFF0] leading-relaxed"
                >
                    Recruitment for the Spring 2026 semester has concluded.
                </motion.p>
            </div>
        </section>
    );
}
