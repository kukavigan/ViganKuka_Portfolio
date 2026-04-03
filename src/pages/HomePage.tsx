import Hero from '../components/Hero';
import AboutIntro from '../components/AboutIntro';
import ExperienceSection from '../components/ExperienceSection';
import WorkSection from '../components/WorkSection';
import SelectedBuilds from '../components/SelectedBuilds';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutIntro />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="work">
        <WorkSection />
      </section>

      <section id="builds">
        <SelectedBuilds />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}