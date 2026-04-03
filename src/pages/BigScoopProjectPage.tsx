import BigScoopImage from '../assets/BigScoop.jpg';
import BigScoopHomepage from '../assets/BigScoopHomepage.jpg';
import BigScoopDashboard from '../assets/BigScoopDashboard.jpg';
import BigScoopMenu from '../assets/BigScoopMenu.jpg';
import BigScoopCategories from '../assets/BigScoopCategories.jpg';
import BigScoopProducts from '../assets/BigScoopProducts.jpg';
import BigScoopAboutUs from '../assets/BigScoopAboutUs.jpg';
import { Link } from 'react-router-dom';

export default function BigScoopProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 lg:px-16 pt-28 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/35 text-xs lg:text-sm tracking-[0.35em] uppercase font-light mb-6">
            Content Management System
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[96px] font-light tracking-tighter leading-[0.95] text-white/98 max-w-5xl">
            Big Scoop CMS
          </h1>

          <p className="mt-8 max-w-3xl text-white/55 text-base lg:text-lg leading-[1.9] font-light">
            A custom content management system built for Big Scoop, combining a
            vibrant customer-facing website with an internal platform for managing
            products, categories, blogs, franchise content, subscriptions, and customer questions.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
                <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-2">
                Project Type
                </p>
                <p className="text-white/80 text-sm lg:text-base font-light">
                Business CMS Platform
                </p>
            </div>

            <div>
                <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-2">
                Year
                </p>
                <p className="text-white/80 text-sm lg:text-base font-light">
                2021
                </p>
            </div>

            <div>
                <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-2">
                Live Site
                </p>
                <a
                    href="https://bigscoop-ks.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white text-sm lg:text-base font-light transition-colors duration-300"
                >
                Visit Live Website ↗
                </a>
            </div>
        </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900">
            <img
              src={BigScoopImage}
              alt="Big Scoop CMS project preview"
              className="w-full h-full object-cover"
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
        Big Scoop needed more than a visually engaging website. The brand also
        needed an internal system that made content management simple, flexible,
        and practical for everyday use.
      </p>

      <p>
        The project combined a vibrant public-facing digital experience with a
        custom CMS that allows the team to manage products, categories, blogs,
        franchise content, subscriptions, and customer questions from one place.
      </p>

      <p>
        The result is a business-focused platform that supports growth while
        keeping the content workflow clear, visual, and easy to control for
        non-technical users.
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
        Public experience and CMS control
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-neutral-900">
        <img
          src={BigScoopHomepage}
          alt="Big Scoop homepage preview"
          className="w-full h-[240px] lg:h-[300px] object-contain bg-[#111]"
        />
      </div>

      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-neutral-900">
        <img
          src={BigScoopDashboard}
          alt="Big Scoop dashboard preview"
          className="w-full h-[240px] lg:h-[300px] object-contain bg-[#111]"
        />
      </div>

      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-neutral-900">
        <img
          src={BigScoopMenu}
          alt="Big Scoop menu preview"
          className="w-full h-[240px] lg:h-[300px] object-contain bg-[#111]"
        />
      </div>
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
        Content structure and management flows
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111]">
        <img
          src={BigScoopCategories}
          alt="Big Scoop categories preview"
          className="w-full h-[240px] lg:h-[300px] object-contain bg-[#111]"
        />
      </div>

      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111]">
        <img
          src={BigScoopProducts}
          alt="Big Scoop products preview"
          className="w-full h-[240px] lg:h-[300px] object-contain bg-[#111]"
        />
      </div>

      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111]">
        <img
          src={BigScoopAboutUs}
          alt="Big Scoop about us preview"
          className="w-full h-[240px] lg:h-[300px] object-contain bg-[#111]"
        />
      </div>
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
          UI/UX Design, Frontend Development, CMS Structure
        </p>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
        <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-4">
          Scope
        </p>
        <p className="text-white/80 text-sm lg:text-base font-light leading-[1.8]">
          Public website, admin dashboard, content management flows, product structure
        </p>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
        <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-4">
          Features
        </p>
        <p className="text-white/80 text-sm lg:text-base font-light leading-[1.8]">
          Product categories, product management, blog system, franchise content, questions, subscriptions
        </p>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
        <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-4">
          Outcome
        </p>
        <p className="text-white/80 text-sm lg:text-base font-light leading-[1.8]">
          A scalable CMS platform that gives the team full control over content and supports future growth.
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