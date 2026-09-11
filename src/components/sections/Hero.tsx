import { motion } from "framer-motion";

const SpecDiagram = () => (
  <svg
    viewBox="0 0 600 600"
    className="w-full h-full"
    role="img"
    aria-label="Rendered wheel specification: 19 x 8.5J, ET45, PCD 5x112, CB 57.1, max load 750kg"
  >
    {/* Blueprint hairline field */}
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0H0V40" fill="none" stroke="#3A3A3A" strokeOpacity="0.25" strokeWidth="1" />
      </pattern>
    </defs>
    <rect x="0" y="0" width="600" height="600" fill="url(#grid)" />

    {/* Centerlines */}
    <line x1="300" y1="20" x2="300" y2="580" stroke="#3A3A3A" strokeWidth="1" strokeDasharray="2 6" />
    <line x1="20" y1="300" x2="580" y2="300" stroke="#3A3A3A" strokeWidth="1" strokeDasharray="2 6" />

    {/* Outer rim */}
    <circle cx="300" cy="300" r="220" fill="none" stroke="#A8A8A8" strokeWidth="1.5" />
    {/* PCD bolt circle */}
    <circle cx="300" cy="300" r="95" fill="none" stroke="#6E6E6E" strokeWidth="1" strokeDasharray="3 4" />
    {/* Hub */}
    <circle cx="300" cy="300" r="34" fill="none" stroke="#E4E4E2" strokeWidth="1.5" />

    {/* Spokes */}
    {Array.from({ length: 5 }).map((_, i) => {
      const angle = (i * 72 - 90) * (Math.PI / 180);
      const x1 = 300 + 40 * Math.cos(angle);
      const y1 = 300 + 40 * Math.sin(angle);
      const x2 = 300 + 214 * Math.cos(angle);
      const y2 = 300 + 214 * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3A3A3A" strokeWidth="10" strokeLinecap="round" />;
    })}

    {/* PCD bolt points */}
    {Array.from({ length: 5 }).map((_, i) => {
      const angle = (i * 72 - 90) * (Math.PI / 180);
      const x = 300 + 95 * Math.cos(angle);
      const y = 300 + 95 * Math.sin(angle);
      return <circle key={i} cx={x} cy={y} r="4" fill="#E4E4E2" />;
    })}

    {/* Diameter dimension line */}
    <line x1="80" y1="90" x2="520" y2="90" stroke="#6E6E6E" strokeWidth="1" />
    <line x1="80" y1="80" x2="80" y2="100" stroke="#6E6E6E" strokeWidth="1" />
    <line x1="520" y1="80" x2="520" y2="100" stroke="#6E6E6E" strokeWidth="1" />
    <text x="300" y="72" textAnchor="middle" fontFamily="'Roboto Mono', monospace" fontSize="20" fill="#B8974A" fontWeight="600">
      19 × 8.5J
    </text>

    {/* Offset marker */}
    <line x1="300" y1="300" x2="300" y2="480" stroke="#6E6E6E" strokeWidth="1" />
    <text x="316" y="470" fontFamily="'Roboto Mono', monospace" fontSize="16" fill="#B8974A" fontWeight="600">
      ET45
    </text>

    {/* PCD label */}
    <text x="300" y="215" textAnchor="middle" fontFamily="'Roboto Mono', monospace" fontSize="14" fill="#A8A8A8">
      PCD 5×112
    </text>

    {/* CB label */}
    <text x="300" y="303" textAnchor="middle" fontFamily="'Roboto Mono', monospace" fontSize="11" fill="#E4E4E2">
      CB 57.1
    </text>

    {/* Load rating */}
    <text x="300" y="560" textAnchor="middle" fontFamily="'Roboto Mono', monospace" fontSize="14" fill="#A8A8A8" letterSpacing="1">
      MAX LOAD 750KG
    </text>
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative min-h-[820px] lg:h-screen lg:min-h-[760px] flex items-center overflow-hidden bg-background">
      {/* Rendered specification, not a wheel photo */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
        <div className="w-[560px] h-[560px] lg:w-[720px] lg:h-[720px] opacity-90 lg:mr-[-80px] translate-y-6">
          <SpecDiagram />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content — bottom-left anchored */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-32 pb-16 lg:py-0">
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
