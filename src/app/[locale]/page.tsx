import Hero from "@/components/sections/Hero";
import LiveClasses from "@/components/sections/LiveClasses";
import SkillsSection from "@/components/sections/SkillsSection";
import VoicesSection from "@/components/sections/VoicesSection";
import ApplicationProcess from "@/components/sections/application-process";
import AboutMiraiMinds from "@/components/sections/about-mirai-minds";
import FAQSection from "@/components/sections/faq-section";
import CtaTrialSection from "@/components/sections/cta-trial-section";
import FooterSection from "@/components/sections/footer-section";


export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start">
      <Hero />
      <LiveClasses />
      <SkillsSection />
      <VoicesSection />
      <ApplicationProcess />
      <AboutMiraiMinds />
      <FAQSection />
      <CtaTrialSection />
      <FooterSection />
      
    </main>
  );
}
