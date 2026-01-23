import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { UseCases } from "@/components/sections/UseCases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TheWheels } from "@/components/sections/TheWheels";
import { PartnershipModels } from "@/components/sections/PartnershipModels";
import { FAQ } from "@/components/sections/FAQ";
import { GeneralEnquiries } from "@/components/sections/GeneralEnquiries";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhoWeWorkWith />
        <UseCases />
        <HowItWorks />
        <TheWheels />
        <PartnershipModels />
        <FAQ />
        <GeneralEnquiries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
