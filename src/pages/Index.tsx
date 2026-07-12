import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { UseCases } from "@/components/sections/UseCases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TheWheels } from "@/components/sections/TheWheels";
import { ForgedComparison } from "@/components/sections/ForgedComparison";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { WhyMT } from "@/components/sections/WhyMT";
import { PartnershipModels } from "@/components/sections/PartnershipModels";
import { FAQ } from "@/components/sections/FAQ";
import { GeneralEnquiries } from "@/components/sections/GeneralEnquiries";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <a
            href="#quote"
            className="inline-flex items-center gap-2.5 bg-primary text-white text-[13px] font-semibold tracking-wide px-6 py-3.5 shadow-xl hover:bg-primary/90 transition-all duration-200"
          >
            Request a Quote
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Index = () => {
  return (
    <div className="bg-secondary">
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Intro / Who We Work With */}
        <WhoWeWorkWith />
        {/* 3. Use Cases */}
        <UseCases />
        {/* 4. Product Categories Grid */}
        <ProductCategories />
        {/* 5. Quality section */}
        <TheWheels />
        {/* 5b. Why 6061-T6 Forged comparison */}
        <ForgedComparison />
        {/* 6. Why MT Performance */}
        <WhyMT />
        {/* 7. Process */}
        <HowItWorks />
        {/* 8. Supply/Partnership Options */}
        <PartnershipModels />
        {/* 9. Request a Quote Form */}
        <QuoteForm />
        {/* 10. FAQ */}
        <FAQ />
        {/* 11. Personal Enquiries */}
        <GeneralEnquiries />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
