import { motion } from "framer-motion";
import heroWheel from "@/assets/hero-wheel.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-secondary">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src={heroWheel}
          alt="Premium forged wheel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-secondary/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/30 to-transparent" />
      </div>

      {/* Content — bottom-left anchored */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6"
          >
            Premium Forged Wheel Supply
          </motion.p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.0] mb-8">
            The wheel supply partner for serious automotive businesses.
          </h1>

          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-lg">
            UK-based premium forged wheel supplier. Trade-first partnerships for workshops, dealers, and automotive specialists.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#quote"
              className="inline-flex items-center gap-3 bg-primary text-white text-sm font-semibold tracking-wide px-8 py-4 hover:bg-primary/90 transition-colors duration-200"
            >
              Request a Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-16 hidden lg:flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mb-2">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};
