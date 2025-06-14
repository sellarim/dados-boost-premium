
// Landing page para Grupo Premium de Dados

import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoIsForSection from "@/components/WhoIsForSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScarcitySection from "@/components/ScarcitySection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen w-full flex flex-col items-center">
      <HeroSection />
      <SocialProofSection />
      <BenefitsSection />
      <HowItWorksSection />
      <WhoIsForSection />
      <TestimonialsSection />
      <ScarcitySection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;

