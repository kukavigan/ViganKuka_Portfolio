import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: 'afterChildren',
    },
  },
  open: {
    opacity: 1,
    backdropFilter: 'blur(8px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: 'beforeChildren',
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const linkVariants: Variants = {
  closed: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setTimeout(() => onClose(), 150);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => onClose(), 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 bg-black/95"
        >
          <div className="absolute top-6 right-6">
            <motion.button
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-white/75 hover:text-white transition-colors p-2"
            >
              <X size={28} strokeWidth={1.5} />
            </motion.button>
          </div>

          <div className="h-full flex flex-col items-center justify-center gap-6 px-6">
            {['home', 'work', 'contact'].map((item) => (
              <motion.button
                key={item}
                variants={linkVariants}
                onClick={() => scrollToSection(item)}
                className="text-5xl sm:text-6xl font-light text-white/90 hover:text-white uppercase tracking-tighter transition-colors duration-500 leading-[1.1]"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.div
            variants={linkVariants}
            className="absolute bottom-20 left-0 right-0 text-center"
          >
            <p className="text-white/35 text-xs tracking-[0.35em] uppercase font-light">
              Select projects available
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}