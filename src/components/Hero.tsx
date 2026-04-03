import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import { useEffect } from 'react';
import { Globe, Linkedin } from 'lucide-react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.5 });

  const mainX = useTransform(smoothX, [-500, 500], [-10, 10]);
  const mainY = useTransform(smoothY, [-500, 500], [-8, 8]);

  const ghostX = useTransform(smoothX, [-500, 500], [-20, 20]);
  const ghostY = useTransform(smoothY, [-500, 500], [-16, 16]);

  const spotlightX = useTransform(smoothX, (value) =>
    typeof window !== 'undefined' ? value + window.innerWidth / 2 : value
  );

  const spotlightY = useTransform(smoothY, (value) =>
    typeof window !== 'undefined' ? value + window.innerHeight / 2 : value
  );

  const spotlightBackground = useMotionTemplate`radial-gradient(
    600px circle at ${spotlightX}px ${spotlightY}px,
    rgba(255,255,255,0.10),
    transparent 40%
  )`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{ background: spotlightBackground }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />

      <div className="relative z-10 flex items-center justify-center w-full px-6">
        <div className="relative text-center">
          <motion.div
            style={{ x: ghostX, y: ghostY }}
            initial={{ opacity: 0, y: 80, scale: 1.04 }}
            animate={{ opacity: 0.18, y: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 blur-[14px] select-none"
          >
            <h1 className="text-[18vw] md:text-[15vw] leading-[0.82] font-medium tracking-[-0.06em] text-white/60 uppercase">
              VIGAN
              <br />
              KUKA
            </h1>
          </motion.div>

          <motion.div
            style={{ x: mainX, y: mainY }}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="overflow-hidden">
              <motion.h1
                variants={{
                  hidden: { y: '120%', opacity: 0 },
                  visible: {
                    y: '0%',
                    opacity: 1,
                    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="text-[18vw] md:text-[15vw] leading-[0.82] font-medium tracking-[-0.06em] text-white uppercase"
              >
                VIGAN
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                variants={{
                  hidden: { y: '120%', opacity: 0 },
                  visible: {
                    y: '0%',
                    opacity: 1,
                    transition: {
                      duration: 1.1,
                      delay: 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="text-[18vw] md:text-[15vw] leading-[0.82] font-medium tracking-[-0.06em] text-white uppercase"
              >
                KUKA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-6 md:mt-8 text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
              >
                Developer focused on building modern web experiences, combining clean design, motion, and AI-driven workflows.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-0 right-0 z-20">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="flex items-center gap-2 sm:gap-3 text-white/70 text-xs sm:text-sm lg:text-base font-medium"
          >
            <Globe
              size={16}
              strokeWidth={1.7}
              className="text-white/80 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 shrink-0"
            />
            <span className="leading-none sm:leading-normal whitespace-nowrap">
              Based in Prishtina, Kosovo
            </span>
          </motion.div>

          <motion.a
            href="https://www.linkedin.com/in/vigan-kuka-49a946179/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="flex items-center justify-center text-white/70 hover:text-white transition shrink-0"
          >
            <Linkedin
              size={17}
              strokeWidth={1.7}
              className="text-white/80 sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}