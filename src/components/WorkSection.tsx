import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BigScoopImage from '../assets/BigScoop.jpg';
import InspireHubImage from '../assets/InspireHub.jpg';
import RootDevelopmentImage from '../assets/RootDevFirstPic.jpeg';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Big Scoop CMS',
    category: 'Content Management System',
    description: 'A custom content management system built for Big Scoop, combining a vibrant brand website with an internal platform for managing products, categories, blogs, franchise content, subscription and customer questions',
    image: BigScoopImage,
    link: '/work/big-scoop-cms',
  },
  {
    id: 2,
    title: 'Inspire Hub ERP',
    category: 'Enterprise Resource Planning',
    description: 'A custom ERP platform built for an educational academy, bringing together student management, training workflows, contracts, invoices, and internal operations in one centralized system.',
    image: InspireHubImage,
    link: '/work/inspire-hub-erp',
  },
  {
    id: 3,
    title: 'Root Development',
    category: 'Website Development',
    description: 'A modern software company website focused on digital products, UI systems, and clean user experience.',
    image: RootDevelopmentImage,
    link: '/work/root-development',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const titleVariants: Variants = {
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

export default function WorkSection() {
  return (
    <section id="work" className="relative bg-black pt-20 pb-40 lg:pt-24 lg:pb-56 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-28 lg:mb-40"
        >
          <p className="text-white/35 text-xs lg:text-sm tracking-[0.35em] uppercase font-light mb-8">
            Selected Works
          </p>
          <h2 className="text-6xl lg:text-8xl xl:text-[100px] font-light text-white/98 tracking-tighter leading-[0.95]">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-150px' }}
          className="space-y-40 lg:space-y-56"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group relative"
            >
              <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[1.1fr_1fr]' : 'lg:grid-cols-[1fr_1.1fr]'} gap-12 lg:gap-20 xl:gap-28 items-center`}>
                <div className={`relative overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    className="relative h-[280px] md:h-[380px] lg:h-[500px] overflow-hidden rounded-[24px] bg-neutral-900"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.12, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className={`space-y-8 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                  variants={titleVariants}
                >
                  <div className="space-y-4">
                    <p className="text-white/30 text-xs lg:text-sm tracking-[0.35em] uppercase font-light">
                      {project.category}
                    </p>
                    <h3 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white/98 tracking-tighter leading-[0.95]">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-white/50 text-sm lg:text-base font-light leading-[1.9] max-w-lg">
                    {project.description}
                  </p>

                <Link to={project.link}>
                  <motion.button
                    whileHover={{ x: 12 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="inline-flex items-center gap-4 text-white/50 hover:text-white text-xs tracking-widest uppercase group/btn pt-8 transition-colors duration-500"
                  >
                    <span>View Project</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </motion.div>
                  </motion.button>
                </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
