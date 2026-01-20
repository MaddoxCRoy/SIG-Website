import TreeBreakdownImage from '../../assets/TreeBreakdownImage.png';
import { motion } from 'framer-motion';

export default function AboutMission() {
  return (
    <section className="py-24 bg-[#FFFFF0]">
      <motion.div
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Image */}
        <motion.div
          className="md:col-span-8"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src={TreeBreakdownImage}
            alt="Scarlet Investment Group"
            className="w-full max-w-3xl h-auto"
          />
        </motion.div>

        {/* Text + Scarlet Line */}
        <motion.div
          className="md:col-span-4 relative pl-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Scarlet vertical rule */}
          <motion.div
            className="absolute left-0 top-1 w-px bg-[#7A1626] origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ height: '100%' }}
          />

          <h2 className="text-2xl md:text-3xl font-light text-[#1F2933] mb-6">
            A student-run investment organization
          </h2>

          <p className="text-[#4B5563] leading-relaxed max-w-md">
            Scarlet Investment Group is a student-led organization at
            The Ohio State University focused on developing rigorous,
            research-driven investors. Our members engage in deep
            fundamental analysis and systematic quantitative research
            to better understand financial markets and investment risk.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
