import STRSTourImage from '../../assets/STRSTourImage.png';
import { motion } from 'framer-motion';

export default function AboutWhatWeDo() {
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
          className="md:col-span-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src={STRSTourImage}
            alt="Scarlet Investment Group"
            className="w-full max-w-3xl h-auto"
          />
        </motion.div>

        {/* Text + Scarlet Line */}
        <motion.div
          className="md:col-span-6 relative pl-6"
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
            Our Mission
          </h2>

          <p className="text-[#4B5563] leading-relaxed max-w-md">
            We aim to develop the next generation of investment professionals who lead
            with thoughtfulness. SIG emphasizes the values of challenging assumptions,
            exploring nuance, and making disciplined decisions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
