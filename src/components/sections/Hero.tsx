import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroWheel from "@/assets/hero-wheel.jpg";

const benefitChips = [
  "Spec-accurate fitment",
  "Premium finishes",
  "Reliable fulfilment"
];

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
      <div className="relative z-10 section-padding container-narrow w-full text-primary-foreground">
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

          {/* Brand Name & Slogan */}
          <div className="mb-6">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-secondary-foreground leading-[0.95]">
              FORGE<span className="text-primary">SUPPLY</span>
            </h1>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-foreground leading-[1.1] mb-4">
            Premium Forged Wheels
            <br />
            <span className="text-primary">For Automotive Businesses</span>
          </h2>

          {/* Subheadline - Single line */}
          <p className="text-lg md:text-xl max-w-xl mb-3 leading-relaxed font-light text-secondary-foreground">
            Trade-first supply for tyre shops, refurb centres, garages and dealers.
          </p>

          {/* Slogan */}
          <p className="text-sm mb-8 font-semibold text-primary uppercase tracking-wide">
            Stop going round in circles.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Explore a B2B Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#enquiries">NOT A BUSINESS? BUY A PERSONAL SET</a>
            </Button>
          </motion.div>

          {/* Benefit Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {benefitChips.map((chip, index) => (
              <span
                key={index}
                className="inline-flex items-center px-4 py-2 bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground text-sm font-medium"
              >
                {chip}
              </span>
            ))}
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
