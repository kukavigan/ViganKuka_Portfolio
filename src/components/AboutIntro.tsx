import { motion } from 'framer-motion';
import ViganKuka from '../assets/ViganKuka.jpg';
import CursorIcon from '../assets/cursor.png';
import ClaudeIcon from '../assets/claude.png';
import ChatGPTIcon from '../assets/chatgpt.png';
import BoltIcon from '../assets/bolt.png';

export default function AboutIntro() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-28 md:py-36 lg:py-44"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <div className="border-t border-white/10 pt-14 md:pt-16 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                Selected Profile
              </p>

              <div className="relative w-full max-w-[420px] overflow-hidden rounded-[24px] border border-white/10 bg-white/5 group">
                <img
                  src={ViganKuka}
                  alt="Vigan Kuka portrait"
                  className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 backdrop-blur-md px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/75">
                    <span className="h-2 w-2 rounded-full bg-white/70" />
                     <span>AI-Driven Workflow</span>
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              <h2 className="max-w-5xl text-[clamp(2.2rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.05em] font-medium text-white">
                Designing and building
                <br />
                web experiences with
                <br />
                clarity, motion, and edge.
              </h2>

              <div className="max-w-2xl space-y-6 text-white/58 text-base md:text-lg leading-[1.85]">
                <p>
                  Frontend-focused creative developer working across modern
                  websites, interactive interfaces, and digital products.
                </p>

                <p>
                  My approach combines clean structure, motion, and visual
                  precision to create work that feels both functional and
                  memorable.
                </p>
              </div>

              <div className="pt-4 space-y-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                  Technology
                </p>

              <div className="flex flex-wrap gap-3">
                {[
                  'React',
                  'TypeScript',
                  'JavaScript',
                  'Tailwind CSS',
                  'Python',
                  'Supabase',
                  'Framer Motion',
                ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-white/12 bg-white/[0.03] text-sm text-white/70"
              >
              {tech}
              </span>
              ))}
            </div>

                <p className="text-white/60 text-sm max-w-xl leading-relaxed">
                  I actively use AI to accelerate development, automate workflows, and build smarter digital experiences as part of my workflow.
                </p>

              <div className="flex items-center gap-4 pt-3">
                <img
                  src={CursorIcon}
                  alt="Cursor"
                  className="h-6 w-6 object-contain rounded opacity-70 hover:opacity-100 transition duration-300"
                />
                <img
                  src={ClaudeIcon}
                  alt="Claude"
                  className="h-6 w-6 object-contain rounded opacity-70 hover:opacity-100 transition duration-300"
                  />
                <img
                  src={ChatGPTIcon}
                  alt="ChatGPT"
                  className="h-6 w-6 object-contain bg-white rounded opacity-70 hover:opacity-100 transition duration-300"
                />
                <img
                  src={BoltIcon}
                  alt="Bolt"
                  className="h-6 w-6 object-contain bg-white rounded opacity-70 hover:opacity-100 transition duration-300"
                />
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}