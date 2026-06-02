import AboutSection from "../components/AboutSection";
import CTASection from "../components/CTASection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import GlobalReachSection from "../components/GlobalReachSection";
import Hero from "../components/Hero";
import PlatformSection from "../components/PlatformSection";
import ProblemSection from "../components/ProblemSection";
import ServicesSection from "../components/ServicesSection";
import StatsBar from "../components/StatsBar";
import WhyChooseSection from "../components/WhyChooseSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProblemSection/>
      <AboutSection/>
      <ServicesSection/>
      <PlatformSection/>
      <WhyChooseSection/>
      <GlobalReachSection/>
      <FAQ/>
      <CTASection/>
      <Footer/>
    </>
  );
}