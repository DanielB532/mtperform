import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manufacturer } from "@/components/sections/Manufacturer";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { UseCases } from "@/components/sections/UseCases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TheWheels } from "@/components/sections/TheWheels";
import { ForgedComparison } from "@/components/sections/ForgedComparison";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { WhyMT } from "@/components/sections/WhyMT";
import { PartnershipModels } from "@/components/sections/PartnershipModels";
import { WorkshopObjections } from "@/components/sections/WorkshopObjections";
import { FAQ } from "@/components/sections/FAQ";
import { QuoteForm } from "@/components/sections/QuoteForm";

const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. The Manufacturer */}
        <Manufacturer />
        {/* 3. Intro / Who We Work With */}
        <WhoWeWorkWith />
        {/* 4. Use Cases */}
        <UseCases />
        {/* 5. Quality section */}
        <TheWheels />
        {/* 6. Why 6061-T6 Forged comparison */}
        <ForgedComparison />
        {/* 7. Why MT Sourcing Partners */}
        <WhyMT />
        {/* 8. Process */}
        <HowItWorks />
        {/* 9. Sourcing Model */}
        <PartnershipModels />
        {/* 10. Workshop objections: working with us */}
        <WorkshopObjections />
        {/* 11. Product Categories / Catalogue */}
        <ProductCategories />
        {/* 12. FAQ */}
        <FAQ />
        {/* 13. Request a Quote Form */}
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
