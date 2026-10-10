import { WHATSAPP_NUMBER } from "@/lib/enquiries";

const message = encodeURIComponent(
  "*Wheel enquiry (individual)*\n\nCar (make, model, year):\nWhat I'm looking for:\nMy area:"
);

export const ForIndividuals = () => {
  return (
    <section id="individuals" className="bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-24">
        <div className="border border-border p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Buying for your own car?
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight mb-4">
              We'll point you to a shop we work with.
            </h2>
            <p className="text-muted-foreground text-base font-normal leading-relaxed">
              We source on behalf of UK workshops, so we don't sell to individuals directly. Send us your car and what you're after, and we'll put you in touch with one of our partner shops to supply and fit your wheels.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 shrink-0 text-grey100 text-sm font-semibold tracking-wide px-8 py-4 border border-grey700 hover:bg-white/5 transition-colors duration-200"
          >
            Send us your car on WhatsApp
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
