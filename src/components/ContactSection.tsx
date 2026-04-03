import { motion, type Variants } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:kukavigan@gmail.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/kukavigan' },
  { icon: Linkedin, label: 'LinkedIn', href: "https://www.linkedin.com/in/vigan-kuka-49a946179/" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-black py-40 lg:py-56 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 lg:gap-32 xl:gap-40"
        >
          <motion.div variants={itemVariants} className="space-y-14">
            <div className="space-y-8">
              <p className="text-white/30 text-xs lg:text-sm tracking-[0.35em] uppercase font-light">
                Let's Talk
              </p>
              <h2 className="text-6xl lg:text-8xl xl:text-[100px] font-light text-white/98 tracking-tighter leading-[0.95]">
                Create
                Something
                Extraordinary
              </h2>
            </div>

            <p className="text-white/45 text-sm lg:text-base font-light leading-[1.8] max-w-lg">
              Available for select high-caliber projects. If you're seeking a partner who combines strategic thinking with creative excellence, let's explore a collaboration.
            </p>

            <motion.a
              href="mailto:kukavigan@gmail.com?subject=Portfolio%20Inquiry"
              whileHover={{
                x: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                borderColor: 'rgba(255, 255, 255, 0.4)'
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white/70 hover:text-white text-xs tracking-widest uppercase font-light transition-all duration-500 group"
            >
              <span>Start Conversation</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ExternalLink size={16} strokeWidth={1.5} />
              </motion.div>
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-16">
            <motion.a
              href="mailto:kukavigan@gmail.com"
              whileHover={{ x: 12 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group block"
            >
              <p className="text-xs lg:text-sm text-white/30 tracking-[0.35em] uppercase font-light mb-4">
                Email
              </p>
              <p className="text-2xl lg:text-3xl xl:text-4xl font-light text-white/80 group-hover:text-white transition-colors duration-500">
                kukavigan@gmail.com
              </p>
            </motion.a>

            <motion.div variants={itemVariants} className="space-y-6 pt-4">
              <p className="text-xs lg:text-sm text-white/30 tracking-[0.35em] uppercase font-light">
                Presence
              </p>
              <div className="flex gap-5">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -6,
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="w-14 h-14 border border-white/15 hover:border-white/30 flex items-center justify-center transition-all duration-500 group backdrop-blur-sm hover:bg-white/5"
                    aria-label={social.label}
                  >
                    <social.icon
                      size={18}
                      className="text-white/50 group-hover:text-white transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-40 lg:mt-56 pt-16 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <p className="text-white/35 text-xs lg:text-sm font-light tracking-wider">
                © 2023 Vigan Kuka - Built with React & AI-assisted workflow
              </p>
            </div>
            <div className="flex gap-10">
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
