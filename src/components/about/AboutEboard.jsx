import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AkanshaHeadshot from '../../assets/AkanshaHeadshot.jpg';
import IshanHeadshot from '../../assets/IshanHeadshot.jpeg';
import DylanHeadshot from '../../assets/DylanHeadshot.png';
import JackHeadshot from '../../assets/JackHeadshot.jpg';
import JuliaHeadshot from '../../assets/JuliaHeadshot.jpg';
import MeredithHeadshot from '../../assets/MeredithHeadshot.jpg';
import NavyaHeadshot from '../../assets/NavyaHeadshot.jpg';
import MaddoxHeadshot from '../../assets/MaddoxHeadshot.jpg';

const eboard = {
  top: [
    {
      role: 'President',
      name: 'Jakcrus Huynh',
      image: JackHeadshot,
      year: 'Senior',
      majors: 'Finance & Mathematics',
      minors: 'N/A',
      email: 'huynh.260@osu.edu',
      linkedin: 'https://www.linkedin.com/in/jakcrushuynh/',
      objectPosition: '50% 0%',
    },
    {
      role: 'Executive Vice President',
      name: 'Ishan Patel',
      image: IshanHeadshot,
      year: 'Junior',
      majors: 'Finance & Mathematics',
      minors: 'N/A',
      email: 'patel.5987@osu.edu',
      linkedin: 'https://www.linkedin.com/in/ishan--patel/',
      objectPosition: '50% 20%',
    },
    {
      role: 'Fundamental Portfolio Manager',
      name: 'Dylan Solley',
      image: DylanHeadshot,
      year: 'Senior',
      majors: 'Finance',
      minors: 'N/A',
      email: 'solley.3@osu.edu',
      linkedin: 'https://www.linkedin.com/in/dylan-solley-a1898628b/',
      objectPosition: '58% 0%',
      zoom: 1.5,
    },
    {
      role: 'Quantitative Portfolio Manager',
      name: 'Maddox Roy',
      image: MaddoxHeadshot,
      year: 'Senior',
      majors: 'Computer Engineering',
      minors: 'Quantitative Economics',
      email: 'roy.493@osu.edu',
      linkedin: 'https://www.linkedin.com/in/maddox-roy-b5a097298/',
      objectPosition: '50% 31%',
      zoom: 1.28,
    },
  ],
  bottom: [
    {
      role: 'Treasurer',
      name: 'Julia Nix',
      image: JuliaHeadshot,
      year: 'Junior',
      majors: 'Finance',
      minors: 'Accounting',
      email: 'nix.52@osu.edu',
      linkedin: 'https://www.linkedin.com/in/julia-nix/',
      objectPosition: '50% 30%',
      zoom: 1,
    },
    {
      role: 'VP of Recruitment',
      name: 'Navya Chauhan',
      image: NavyaHeadshot,
      year: 'Junior',
      majors: 'Integrated Math and English & Business Administration',
      minors: 'N/A',
      email: 'chauhan.167@osu.edu',
      linkedin: 'https://www.linkedin.com/in/navyachauhan/',
      objectPosition: '50% 50%',
      zoom: 1.24,
    },
    {
      role: 'VP of Membership Development',
      name: 'Akansha Anand',
      image: AkanshaHeadshot,
      year: 'Junior',
      majors: 'Computer Science Engineering',
      minors: 'N/A',
      email: 'anand.240@osu.edu',
      linkedin: 'https://www.linkedin.com/in/akanshaanandd/',
      objectPosition: '50% 0%',
      zoom: 1.3,
    },
    {
      role: 'VP of Marketing',
      name: 'Meredith Hurley',
      image: MeredithHeadshot,
      year: 'Sophomore',
      majors: 'Economics',
      minors: 'Roman Civilization',
      email: 'hurley.373@osu.edu',
      linkedin: 'https://www.linkedin.com/in/meredith-hurley-523965288/',
      objectPosition: '50% 0%',
      zoom: 1.1,
    },
  ],
};

export default function AboutEboard() {
  const [activeMember, setActiveMember] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const Card = ({ member }) => (
    <motion.button
      variants={cardVariants}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      onClick={() => setActiveMember(member)}
      className="flex flex-col items-center text-center cursor-pointer group focus:outline-none"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-gray-200 ring-2 ring-transparent group-hover:ring-[#7A1626]/60 transition duration-200">
        <div
          className="w-full h-full transition-transform duration-200 group-hover:scale-[1.04]"
          style={{
            transform: `scale(${member.zoom || 1})`,
            transformOrigin: 'center',
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            style={{ objectPosition: member.objectPosition || '50% 50%' }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="font-medium text-[#1F2933] group-hover:text-[#7A1626] transition-colors">
        {member.name}
      </h3>
      <p className="text-sm text-[#6B7280]">{member.role}</p>
    </motion.button>
  );

  return (
    <>
      <section className="py-32 bg-[#FFFFF0]">
        <motion.div
          className="max-w-5xl mx-auto px-6"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h2
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="text-3xl font-light text-[#1F2933] mb-16 text-center"
          >
            Executive Board
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {eboard.top.map((member) => (
              <Card key={member.role} member={member} />
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {eboard.bottom.map((member) => (
              <Card key={member.role} member={member} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {activeMember && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <button
                onClick={() => setActiveMember(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <h3 className="text-xl font-medium mb-1">{activeMember.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{activeMember.role}</p>
              <div className="space-y-2 text-sm text-[#374151]">
                <p><strong>Year:</strong> {activeMember.year}</p>
                <p><strong>Major(s):</strong> {activeMember.majors}</p>
                {activeMember.minors && (
                  <p><strong>Minor(s):</strong> {activeMember.minors}</p>
                )}
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href={`mailto:${activeMember.email}`}
                  className="text-sm text-red-700 hover:underline"
                >
                  OSU Email
                </a>
                <a
                  href={activeMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-700 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}