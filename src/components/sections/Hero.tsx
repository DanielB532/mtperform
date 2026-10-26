import { TRADE_WHATSAPP_URL } from "@/lib/enquiries";
import { motion } from "framer-motion";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background lg:h-screen lg:min-h-[760px] lg:max-h-[1000px] flex flex-col lg:flex-row lg:items-center">
      {/* Photo: banner on phones, right-hand side on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[340px] sm:h-[440px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[62%]"
        aria-hidden="true"
      >
        <img
          src="/hero/hero-bronze-two-piece.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[45%_50%]"
        />
        {/* Fade into the page: down on phones, left on desktop */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.55)_0%,rgba(14,14,14,0)_30%,rgba(14,14,14,0)_55%,#0E0E0E_100%)] lg:bg-[linear-gradient(90deg,#0E0E0E_0%,rgba(14,14,14,0.75)_22%,rgba(14,14,14,0.15)_55%,rgba(14,14,14,0.05)_100%)]" />
        <div className="hidden lg:block absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(14,14,14,0.75)_0%,rgba(14,14,14,0)_100%)]" />
        <div className="hidden lg:block absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,#0E0E0E_0%,rgba(14,14,14,0)_100%)]" />
      </motion.div>

      {/* Copy */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 -mt-16 pb-16 lg:mt-0 lg:pt-20 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-[640px]"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-semibold tracking-tight leading-[1.03] mb-6 text-grey100">
            We connect you to a trusted forged wheel supplier.
          </h1>

          <p className="text-grey300 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-[520px]">
            Forged wheels specified for your customer's car, sourced direct from a vetted factory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={TRADE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-grey100 text-ink text-sm font-semibold tracking-wide px-8 py-4 hover:bg-[hsl(var(--gold-dim))] hover:text-grey100 transition-colors duration-200"
            >
              Enquire on WhatsApp
              <Arrow />
            </a>
            <a
              href="/catalogue.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-grey100 text-sm font-semibold tracking-wide px-8 py-4 border border-grey700 bg-background/40 hover:bg-white/5 transition-colors duration-200"
            >
              View the Catalogue
              <Arrow />
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 items-start">
            <a
              href="#individuals"
              className="group inline-flex items-center gap-2 text-sm text-grey300 hover:text-grey100 transition-colors duration-200"
            >
              <span>
                <span className="text-gold font-semibold">Buying for your own car?</span>{" "}
                We'll point you to a partner shop
              </span>
              <span className="transition-transform group-hover:translate-x-0.5">
                <Arrow />
              </span>
            </a>
            <a
              href="#workshop-services"
              className="group inline-flex items-center gap-2 text-sm text-grey300 hover:text-grey100 transition-colors duration-200"
            >
              <span>
                <span className="text-gold font-semibold">Not just wheels.</span>{" "}
                Refurb, wraps, PPF and more through our workshop partner
              </span>
              <span className="transition-transform group-hover:translate-x-0.5">
                <Arrow />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
