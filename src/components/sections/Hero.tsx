import { motion } from "framer-motion";

/* Specification plate — flat type, no illustration.
   Highlighted spec figures are one of the four permitted places for gold. */
const SpecPlate = () => (
  <div className="font-figure uppercase select-none">
    <p className="text-grey500 text-sm tracking-[0.4em] mb-8">Forged</p>
    <p className="text-gold text-5xl xl:text-6xl font-medium tracking-tight mb-6 whitespace-nowrap">
      19 × 8.5J
    </p>
    <p className="text-grey100 text-3xl xl:text-4xl tracking-tight mb-8">ET 45</p>
    <div className="space-y-3 text-grey300 text-lg xl:text-xl">
      <p>PCD 5×112</p>
      <p>CB 57.1</p>
      <p>Max load 750 kg</p>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-[700px] lg:h-screen lg:min-h-[760px] flex items-center overflow-hidden bg-background">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-32 pb-16 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_auto] items-center gap-16 lg:gap-24">
          {/* Content */}
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
              className="text-grey500 text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            >
              Wheel Sourcing &amp; Specification
            </motion.p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0] mb-6 uppercase">
              <span className="text-grey100">MT </span>
              <span className="text-gold">Sourcing Partners</span>
            </h1>

            <p className="text-grey100 text-lg font-light leading-relaxed mb-4 max-w-lg">
              We source and specify forged wheels for UK workshops, and coordinate the process with the factory from first enquiry to confirmed specification.
            </p>

            <p className="text-grey300 text-base font-light leading-relaxed mb-10 max-w-lg">
              Workshops import directly from the factory and are the importer of record. Our fee covers sourcing, specification and production coordination only — we never take title to the goods.
            </p>

            <div className="flex items-baseline gap-3 mb-10 font-figure">
              <span className="text-gold text-4xl font-semibold">613</span>
              <span className="text-grey500 text-xs tracking-[0.15em] uppercase">designs on file, every one specified before production</span>
            </div>

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

          {/* Specification plate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="hidden lg:block pr-4 xl:pr-12"
          >
            <SpecPlate />
          </motion.div>
        </div>
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
