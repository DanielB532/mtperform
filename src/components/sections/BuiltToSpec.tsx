const specs = [
  { label: "Diameter", text: '15" to 26"' },
  { label: "Width (J)", text: "How wide the rim is, set to suit the tyre and arch." },
  { label: "Offset (ET)", text: "How far the wheel sits in or out of the arch, from flush to aggressive." },
  { label: "PCD and centre bore", text: "Matched to the hub, no spacers or adapters needed." },
  { label: "Load rating", text: "Set to the vehicle's weight, up to 1,200kg per wheel." },
  { label: "Staggered setups", text: "Different front and rear sizes on request." },
  { label: "Finish and construction", text: "Monoblock, two-piece, three-piece or carbon, in any finish." },
];

export const BuiltToSpec = () => {
  return (
    <section id="built-to-spec" className="paper bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Fully Customisable
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.0] max-w-xl">
              Every measurement is set per order.
            </h2>
            <p className="text-muted-foreground text-base font-medium max-w-md leading-relaxed">
              Nothing is off the shelf. Each set is made to the exact vehicle it's going on.
            </p>
          </div>
        </div>

        {/* Spec rows */}
        <dl className="border border-border">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-2 md:gap-12 p-6 lg:px-10 border-b border-border last:border-b-0 hover:bg-muted/40 transition-colors duration-300"
            >
              <dt className="text-foreground font-bold text-base tracking-tight">{spec.label}</dt>
              <dd className="text-muted-foreground text-sm font-medium leading-relaxed">{spec.text}</dd>
            </div>
          ))}
        </dl>

        {/* Closing CTA */}
        <p className="mt-10 text-muted-foreground text-sm font-medium">
          Not sure what your customer needs?{" "}
          <a
            href="#quote"
            className="text-foreground underline underline-offset-4 hover:text-[hsl(var(--gold-dim))] transition-colors duration-200"
          >
            Send us the car and we'll specify it.
          </a>
        </p>
      </div>
    </section>
  );
};
