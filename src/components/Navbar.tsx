import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onMenuToggle: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
  if (location.pathname !== '/') {
    navigate(`/#${id}`);
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    
  <motion.nav
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/55 backdrop-blur-xl' : 'bg-transparent'
  }`}
  >
    <div className="max-w-[1800px] mx-auto px-6 lg:px-16 py-5 lg:py-6 flex items-center justify-between">
      
      {/* LEFT */}
      <motion.button
        onClick={() => scrollToSection('home')}
        whileHover={{ opacity: 0.7 }}
        className="flex items-center text-base lg:text-lg text-white/95 hover:text-white transition"
      >
        <span className="tracking-[0.18em] uppercase text-sm lg:text-base">Portfolio</span>
      </motion.button>

      {/* RIGHT*/}
      <motion.button
        onClick={onMenuToggle}
        whileHover={{ opacity: 0.6 }}
        className="flex items-center gap-3 text-sm lg:text-base text-white/95 hover:text-white transition"
      >
        Menu
      <div className="flex flex-col gap-[5px]">
        <span className="w-7 h-[1px] bg-white block"></span>
        <span className="w-7 h-[1px] bg-white block"></span>
      </div>
      </motion.button>

    </div>
  </motion.nav>
);
}
