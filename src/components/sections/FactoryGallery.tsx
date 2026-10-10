import { TRADE_WHATSAPP_URL } from "@/lib/enquiries";
const photos = [
  { src: "/gallery/gloss-black-monoblock.jpg", label: "Monoblock", finish: "Gloss black" },
  { src: "/gallery/two-piece-bronze-carbon-lip.jpg", label: "Two-piece", finish: "Brushed bronze centre, carbon fibre lip" },
  { src: "/gallery/chrome-monoblock.jpg", label: "Monoblock", finish: "Chrome" },
  { src: "/gallery/gloss-black-split-five.jpg", label: "Monoblock", finish: "Gloss black, split five-spoke" },
  { src: "/gallery/black-diamond-cut.jpg", label: "Monoblock", finish: "Gloss black, diamond-cut face" },
  { src: "/gallery/satin-gunmetal.jpg", label: "Monoblock", finish: "Satin gunmetal" },
];

export const FactoryGallery = () => {
  return (
    <section id="factory-gallery" className="bg-background border-t border-grey700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            From the Factory Floor
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.0] max-w-xl">
              Real wheels, not renders.
            </h2>
            <p className="text-muted-foreground text-base font-normal max-w-md leading-relaxed">
              Finished sets photographed at the manufacturer before dispatch. Every finish shown here can be specified to your customer's car.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <figure key={photo.src} className="m-0">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={photo.src}
                  alt={`${photo.label} forged wheel, ${photo.finish.toLowerCase()}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-foreground text-sm font-semibold whitespace-nowrap">{photo.label}</span>
                <span className="text-muted-foreground text-sm font-normal text-right">{photo.finish}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA */}
        <p className="mt-12 text-muted-foreground text-sm font-normal">
          Seen a finish you like?{" "}
          <a
            href={TRADE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-[hsl(var(--gold-dim))] transition-colors duration-200"
          >
            Send us the car and we'll spec it.
          </a>
        </p>
      </div>
    </section>
  );
};
