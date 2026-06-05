import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import ProblemSection from "../components/ProblemSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PlatformSection from "../components/PlatformSection";
import WhyChooseSection from "../components/WhyChooseSection";
import GlobalReachSection from "../components/GlobalReachSection";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Problem */}
      <section id="problem">
        <ProblemSection />
      </section>

      {/* About */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Services */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Platform */}
      <section id="platform">
        <PlatformSection />
      </section>

      {/* Why Choose Us */}
      <section id="why-choose">
        <WhyChooseSection />
      </section>

      {/* Global Reach */}
      <section id="global">
        <GlobalReachSection />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* CTA */}
      <section id="contact">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}