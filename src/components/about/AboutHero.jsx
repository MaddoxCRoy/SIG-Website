import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="pt-40 pb-28 bg-[#FFFFF0]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[clamp(3.5rem,7vw,5.5rem)] font-light tracking-tight text-[#1F2933]"
                >
                    About Us
                </motion.h1>
            </div>
        </section>
    );
}
