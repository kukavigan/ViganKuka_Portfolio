import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Front-End Developer',
    company: 'Digital ++',
    period: '2024 - Present',
  },
  {
    role: 'Full Stack Developer',
    company: 'Root Development L.L.C',
    period: '2022 - 2024',
  },
  {
    role: 'Web Developer',
    company: 'Fondi KGK',
    period: '2020 - 2022',
  },
  {
    role: 'Freelance / Projects',
    company: 'Various Clients',
    period: '2018 - Present',
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative bg-black text-white py-28 md:py-36">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        
        {/* TOP BORDER */}
        <div className="border-t border-white/10 pt-12">

          <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_1fr] gap-10 lg:gap-20">

            {/* LEFT TITLE */}
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                Experience
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="grid grid-cols-2 md:grid-cols-3 items-center py-6 border-b border-white/10"
                >
                  {/* ROLE */}
                  <div className="text-white/90 text-base md:text-lg">
                    {item.role}
                  </div>

                  {/* COMPANY */}
                  <div className="text-white/60 text-base md:text-lg">
                    {item.company}
                  </div>

                  {/* PERIOD */}
                  <div className="text-right text-white/50 text-base md:text-lg">
                    {item.period}
                  </div>
                </motion.div>
              ))}

              {/* VIEW ALL */}
              <div className="pt-6">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}