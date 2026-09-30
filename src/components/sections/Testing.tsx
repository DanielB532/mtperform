const steps = [
  {
    number: "01",
    title: "Material.",
    text: "6061-T6 aluminium, with each batch tested for tensile strength, hardness and grain structure against GB/T 26036. Typical results are tensile 344 to 369 MPa against 330 required, and yield 320 to 353 MPa against 290.",
  },
  {
    number: "02",
    title: "Forging.",
    text: "Pressed from a solid billet, so the grain follows the shape of the wheel instead of running randomly through it.",
    // [grain-flow image]: set this to the image path once the grain-flow photo is added to /public
    image: null as string | null,
  },
  {
    number: "03",
    title: "Design.",
    text: "Every design goes through finite element analysis for load, impact and stress before production.",
  },
  {
    number: "04",
    title: "Factory lab.",
    text: "On-site radial fatigue, impact, cornering fatigue and salt spray testing equipment.",
  },
  {
    number: "05",
    title: "Every wheel.",
    // [confirm what the 50 micron figure measures before going live]
    text: "Vibration tested before dispatch, and held to 50 microns against the 80-micron industry standard.",
  },
  {
    number: "06",
    title: "Finish.",
    text: "Austrian Tiger clear powder coat, applied at double the usual thickness.",
  },
  {
    number: "07",
    title: "Traceability.",
    text: "Size, offset, load rating and production date are engraved on every barrel.",
  },
];

export const Testing = () => {
  return (
    <section id="testing" className="paper bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Testing
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.0] max-w-xl">
              From billet to barrel.
            </h2>
            <p className="text-muted-foreground text-base font-medium max-w-md leading-relaxed">
              What every set goes through before it reaches your workshop.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">
          {steps.map((step) => (
            <div key={step.number} className="p-8 lg:p-10 border-r border-b border-border">
              <span className="text-gold font-figure text-xs font-semibold tracking-[0.2em] block mb-8">
                {step.number}
              </span>
              <h3 className="text-foreground font-bold text-lg tracking-tight mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                {step.text}
              </p>
              {"image" in step && step.image && (
                <img
                  src={step.image}
                  alt="Grain flow following the wheel profile"
                  className="mt-6 w-full h-auto border border-border"
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer line */}
        <p className="mt-10 text-muted-foreground text-sm font-medium max-w-2xl leading-relaxed">
          The manufacturer's production is independently audited by TÜV Rheinland. Test reports are available on request.
        </p>
      </div>
    </section>
  );
};
