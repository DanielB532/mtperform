
const proofPoints = [
  {
    title: "TÜV Rheinland certified.",
    text: "An independent German testing body has audited the plant, covering quality assurance, production flow, production process management and product sampling.",
  },
  {
    title: "Their own test laboratory.",
    text: "Purpose-built equipment on site for radial fatigue, impact, cornering fatigue and salt spray corrosion testing, from a specialist wheel test equipment manufacturer.",
  },
  {
    title: "Registered to export to the US.",
    text: "The forging plant is registered with the US National Highway Traffic Safety Administration under 49 CFR Part 551 with a designated US agent. Evidence of an established exporter into a regulated western market.",
  },
  {
    title: "Documented material testing.",
    text: "Tensile strength, metallographic structure and grain size tested per batch against GB/T 26036, the Chinese national standard for forged aluminium road wheels. Reports available on request.",
  },
  {
    title: "Five-year warranty.",
    text: "Covering leaks, cracks, breaks and non-human-caused damage, with replacement and shipping included where a claim is accepted.",
  },
  {
    title: "Insured in transit.",
    text: "Every shipment is covered while in transit, so a damaged delivery is handled rather than argued over.",
  },
];

export const Manufacturer = () => {
  return (
    <section id="manufacturer" className="paper bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            The Manufacturer
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.0] max-w-xl">
              We vet the factory so you don't have to.
            </h2>
            <p className="text-muted-foreground text-base font-medium max-w-md leading-relaxed">
              We work with a single forge in China with over 15 years in the industry, chosen after checking the things that actually matter. Here is what sits behind every set we source.
            </p>
          </div>
        </div>

        {/* Proof point grid: static render so every card is always visible */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
          {proofPoints.map((point, index) => (
            <div key={index} className="p-8 lg:p-10 border-b border-border md:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0 md:[&:nth-child(n+5)]:border-b-0 [&:last-child]:border-b-0 hover:bg-muted/40 transition-colors duration-300">
              <h3 className="text-foreground font-bold text-lg tracking-tight mb-3 leading-snug">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
