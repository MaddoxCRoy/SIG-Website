import { motion } from "framer-motion";

export default function MStarHero() {
    return (
        <section className="relative pt-44 pb-36 overflow-hidden bg-[#7A1626]">
            {/* Subtle background motion */}
            <motion.div
                aria-hidden
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 30% 40%, rgba(122,22,38,0.12), transparent 60%)",
                }}
            />

            <div className="relative max-w-6xl mx-auto px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[clamp(3.5rem,7vw,5.5rem)] font-light tracking-tight text-[#FFFFF0]"
                >
                    MStAR Fund
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                    className="
  mt-8
  max-w-2xl
  text-lg md:text-xl
  italic
  text-[#FFFFF0]/90
  leading-normal
"

                >
                    Where research meets execution
                </motion.p>

            </div>
        </section>
    );
}
