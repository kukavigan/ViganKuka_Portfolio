import InspireHubImage from '../assets/InspireHub.jpg';

import InspireHubHomepage from '../assets/InspireHubHomepage.jpg';
import InspireHubDashboard from '../assets/InspireHubDashboard.jpg';
import InspireHubTrainings from '../assets/InspireHubTrainings.jpg';

import InspireHubContracts from '../assets/InspireHubContracts.jpg';
import InspireHubInvoices from '../assets/InspireHubInvoices.jpg';
import InspireHubAdmin from '../assets/InspireHubAdmin.jpg';
import { Link } from 'react-router-dom';

export default function InspireHubProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 lg:px-16 pt-28 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          
          <p className="text-white/35 text-xs lg:text-sm tracking-[0.35em] uppercase font-light mb-6">
            Enterprise Resource Planning
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[96px] font-light tracking-tighter leading-[0.95] text-white/98 max-w-4xl">
            Inspire Hub ERP
          </h1>

          <p className="mt-8 max-w-3xl text-white/55 text-base lg:text-lg leading-[1.9] font-light">
            A custom ERP platform built for an educational academy, bringing together
            student management, training workflows, contracts, invoices, and internal
            operations in one centralized system.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
              <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-2">
                Project Type
              </p>
              <p className="text-white/80 text-sm lg:text-base font-light">
                ERP Platform
              </p>
            </div>

            <div>
              <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-2">
                Year
              </p>
              <p className="text-white/80 text-sm lg:text-base font-light">
                2024
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900">
            <img
              src={InspireHubImage}
              alt="Inspire Hub ERP project preview"
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
        Inspire Hub needed more than a simple educational website. The academy
        also needed an internal platform that could centralize operations and make
        day-to-day management more efficient.
      </p>

      <p>
        The project combined a public-facing academy website with a custom ERP
        system for handling trainings, students, contracts, invoices, applications,
        and other internal workflows in one place.
      </p>

      <p>
        The result is a structured platform that supports both communication and
        administration, giving the team a clearer and more scalable way to manage
        their educational operations.
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
        Public experience and system overview
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {[InspireHubHomepage, InspireHubDashboard, InspireHubTrainings].map((img, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111]"
        >
          <img
            src={img}
            alt="Inspire Hub preview"
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
        Operations and system functionality
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {[InspireHubContracts, InspireHubInvoices, InspireHubAdmin].map((img, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111]"
        >
          <img
            src={img}
            alt="Inspire Hub preview"
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
          UI/UX Design, Frontend Development, ERP Structure
        </p>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
        <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-4">
          Scope
        </p>
        <p className="text-white/80 text-sm lg:text-base font-light leading-[1.8]">
          Public academy website, internal ERP dashboard, admin workflows, training and student operations
        </p>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
        <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-4">
          Features
        </p>
        <p className="text-white/80 text-sm lg:text-base font-light leading-[1.8]">
          Trainings, students, contracts, invoices, applications, admin access
        </p>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 lg:p-7">
        <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-4">
          Outcome
        </p>
        <p className="text-white/80 text-sm lg:text-base font-light leading-[1.8]">
          A centralized ERP platform that helps the academy manage operations more clearly, efficiently, and at scale.
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