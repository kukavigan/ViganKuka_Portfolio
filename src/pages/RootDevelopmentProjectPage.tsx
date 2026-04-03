import { Link } from 'react-router-dom';

import RootDevelopmentImage from '../assets/RootDevFirstPic.jpeg';

import RootDevHomepage from '../assets/RootDevHomepage.jpg';
import RootDevWhatWeDo from '../assets/RootDevWhatWeDo.jpg';
import RootDevSelectedProject from '../assets/RootDevSelectedProject.jpg';

import RootDevAboutUs from '../assets/RootDevAboutUs.jpg';
import RootDevTechUse from '../assets/RootDevTechUse.jpg';
import RootDevFooter from '../assets/RootDevFooter.jpg';

export default function RootDevelopmentProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 lg:px-16 pt-28 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">

          <p className="text-white/35 text-xs lg:text-sm tracking-[0.35em] uppercase font-light mb-6">
            Software Solutions Website
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[96px] font-light tracking-tighter leading-[0.95] text-white/98 max-w-4xl">
            Root Development
          </h1>

          <p className="mt-8 max-w-3xl text-white/55 text-base lg:text-lg leading-[1.9] font-light">
            A modern software company website focused on service presentation,
            project credibility, and a polished digital identity across desktop and mobile.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
              <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-2">
                Project Type
              </p>
              <p className="text-white/80 text-sm lg:text-base font-light">
                Software Company Website
              </p>
            </div>

            <div>
              <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-2">
                Year
              </p>
              <p className="text-white/80 text-sm lg:text-base font-light">
                2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111]">
            <img
              src={RootDevelopmentImage}
              alt="Root Development project preview"
              className="w-full h-full object-contain bg-[#111]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24">
          <div>
            <p className="text-white/35 text-xs lg:text-sm tracking-[0.35em] uppercase font-light mb-6">
              Overview
            </p>
          </div>

          <div className="space-y-6 text-white/55 text-base lg:text-lg leading-[1.9] font-light">
            <p>
              Root Development was designed as a modern software company website focused on
              clarity, trust, and a strong digital presence for service-based offerings.
            </p>

            <p>
              The project combines a bold homepage, service presentation, project showcase,
              company information, and technology credibility into one consistent brand experience.
            </p>

            <p>
              The result is a polished and responsive website that communicates software
              solutions clearly while maintaining a clean, high-end visual identity across sections.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-white/35 text-xs lg:text-sm tracking-[0.35em] uppercase font-light mb-4">
              Selected Screens
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/95">
              Brand presentation and service structure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[RootDevHomepage, RootDevWhatWeDo, RootDevSelectedProject].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111]"
              >
                <img
                  src={img}
                  alt="Root Development preview"
                  className="w-full h-[240px] lg:h-[300px] object-contain bg-[#111]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-white/35 text-xs lg:text-sm tracking-[0.35em] uppercase font-light mb-4">
              More Screens
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/95">
              Company story, technologies, and final call to action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[RootDevAboutUs, RootDevTechUse, RootDevFooter].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111]"
              >
                <img
                  src={img}
                  alt="Root Development preview"
                  className="w-full h-[240px] lg:h-[300px] object-contain bg-[#111]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-white/35 text-xs lg:text-sm tracking-[0.35em] uppercase font-light mb-4">
              Project Details
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-white/95">
              Scope, features, and execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
              <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-4">
                Role
              </p>
              <p className="text-white/80 text-sm lg:text-base font-light leading-[1.8]">
                UI/UX Design, Frontend Development, Responsive Layout
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
              <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-4">
                Scope
              </p>
              <p className="text-white/80 text-sm lg:text-base font-light leading-[1.8]">
                Public website, service sections, company presentation, project showcase, CTA structure
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
              <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-4">
                Features
              </p>
              <p className="text-white/80 text-sm lg:text-base font-light leading-[1.8]">
                Homepage hero, service cards, selected projects, about section, tech stack, footer CTA
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
              <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-4">
                Outcome
              </p>
              <p className="text-white/80 text-sm lg:text-base font-light leading-[1.8]">
                A modern software company website that presents services clearly and reinforces a strong digital brand identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/#work"
            className="inline-flex items-center gap-3 text-white/45 hover:text-white text-xs lg:text-sm tracking-[0.28em] uppercase transition-colors duration-500"
          >
            <span>Back to Projects</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}