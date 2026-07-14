import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-secondary">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src="/images/1000021533.jpg"
          alt="Premium forged wheel"
          className="w-full h-full object-cover object-[60%_center]"
        />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-transparent" />
        {/* Left shield — fades out before centre so wheel face is visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 to-transparent" />
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

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0] mb-3 uppercase">
            <span className="text-white">MT </span>
            <span className="text-primary">Performance</span>
          </h1>

          <p className="text-primary text-2xl md:text-3xl font-bold tracking-[0.04em] leading-snug mb-8 uppercase">
            Stop going round in circles.
          </p>

          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-lg">
            We're a UK-based premium forged wheel supplier building trade-first partnerships with workshops, dealers, and automotive specialists.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
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
            <a
              href="/catalogue.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white text-sm font-semibold tracking-wide px-8 py-4 border border-white/25 hover:bg-white/10 transition-colors duration-200"
            >
              View the Catalogue
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
