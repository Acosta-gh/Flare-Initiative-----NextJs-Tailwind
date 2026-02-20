import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MissionSection from "@/components/home/MissionSection";
import StatsSection from "@/components/home/StatsSection";
import ApproachSection from "@/components/home/ApproachSection";
import HowYouCanHelpSection from "@/components/home/HowYouCanHelpSection";
import ContactSection from "@/components/home/ContactSection";
import CrisisSupportSection from "@/components/home/CrisisSupportSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <StatsSection />
      <ApproachSection />
      <HowYouCanHelpSection />
      <ContactSection />
      <CrisisSupportSection />
    </>
  );
}