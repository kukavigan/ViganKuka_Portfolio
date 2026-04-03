import { motion } from 'framer-motion';
import ReactivePhysioImage from '../assets/reactive-physio-clinic.jpg';
import WeddingAppImage from '../assets/wedding-app.jpg';
import VaillantWebImage from '../assets/vaillantWeb.jpg';
import AnviRentImage from '../assets/anvi-rent.jpg';

const builds = [
  {
    title: 'Reactive Physio Clinic',
    description:
      'A modern clinic website focused on trust, clarity, and a clean healthcare experience.',
    tech: 'React · TypeScript · Tailwind',
    image: ReactivePhysioImage,
  },
  {
    title: 'Wedding Seating App',
    description:
      'An interactive wedding seating experience with guest search and table discovery.',
    tech: 'React · TypeScript · UI/UX',
    image: WeddingAppImage,
  },
  {
    title: 'Vaillant Partner Website',
    description:
      'A product-focused website created for an authorized Vaillant partner, designed to present heating solutions with clarity, trust, and strong brand visibility.',
    tech: 'Frontend · Business Website · Product Presentation',
    image: VaillantWebImage,
  },
  {
    title: 'ANVI Rent a Car',
    description:
      'A commercial car rental website with a strong hero section and booking-oriented layout.',
    tech: 'React · Tailwind · Business Website',
    image: AnviRentImage,
  },
];

export default function SelectedBuilds() {
  return (
    <section className="relative bg-black pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        <div className="mb-16 lg:mb-20">
          <p className="text-white/35 text-xs lg:text-sm tracking-[0.35em] uppercase font-light mb-6">
            Selected Builds
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white/95 tracking-tight max-w-3xl leading-[1]">
            Smaller projects across booking, business, and interactive web experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {builds.map((build, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="group rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <div className="h-[240px] lg:h-[260px] overflow-hidden bg-[#111] flex items-center justify-center">
                <img
                  src={build.image}
                  alt={build.title}
                  className="w-full h-full object-contain bg-[#111] group-hover:scale-[1.02] transition duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-white/95 text-xl font-light tracking-tight">
                  {build.title}
                </h3>

                <p className="text-white/55 text-sm leading-[1.7] font-light">
                  {build.description}
                </p>

                <p className="text-white/30 text-xs tracking-[0.16em] uppercase">
                  {build.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}