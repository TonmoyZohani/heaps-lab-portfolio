import HeroSection from "@/components/home/HeroSection";
import WorkSection from "@/components/home/WorkSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import TechStackSection from "@/components/home/TechStackSection";
import StatsSection from "@/components/home/StatsSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}
