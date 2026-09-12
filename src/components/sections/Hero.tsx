import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[640px] lg:h-screen lg:min-h-[720px] flex items-center overflow-hidden bg-background">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-32 pb-16 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-8"
          >
            Sourcing for the Automotive Trade
          </motion.p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.0] mb-8 uppercase">
            <span className="text-grey100">MT </span>
            <span className="text-gold">Sourcing Partners</span>
          </h1>

          <p className="text-grey300 text-lg font-medium leading-relaxed mb-10 max-w-2xl">
            Currently specialising in forged wheels. We find and vet the manufacturer, confirm every specification in writing before production, and coordinate the whole process for UK workshops.
          </p>

          {/* Specification detail, small mono type */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-figure text-grey500 text-xs sm:text-sm tracking-[0.12em] uppercase mb-12"
          >
            Forged &middot; 19 &times; 8.5J &middot; ET 45 &middot; PCD 5&times;112 &middot; CB 57.1 &middot; Max load 750 kg
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#quote"
              className="inline-flex items-center gap-3 bg-grey100 text-ink text-sm font-semibold tracking-wide px-8 py-4 hover:bg-[hsl(var(--gold-dim))] hover:text-grey100 transition-colors duration-200"
            >
              Request a Sourcing Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/catalogue.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-grey100 text-sm font-semibold tracking-wide px-8 py-4 border border-grey700 hover:bg-white/5 transition-colors duration-200"
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
        <span className="text-grey500 text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mb-2">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-grey500 to-transparent" />
      </motion.div>
    </section>
  );
};
