import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroWheel from "@/assets/hero-wheel.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroWheel}
          alt="Premium forged wheel"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding container-narrow w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              B2B Wheel Supply Partner
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-secondary-foreground leading-[0.95] mb-6">
            Premium Forged Wheels
            <br />
            <span className="text-primary">For Automotive Businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-xl mb-10 leading-relaxed font-light">
            A flexible wheel supply partner for tyre centres, workshops, and dealers across the UK. 
            Vehicle-specific fitments. Build-to-order or stock. No inventory required.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Explore a B2B Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#enquiries">General Wheel Enquiries</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-secondary-foreground/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-secondary-foreground/30" />
        </div>
      </motion.div>
    </section>
  );
};
