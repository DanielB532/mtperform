import { motion } from "framer-motion";
import { Package, Warehouse } from "lucide-react";

const models = [
  {
    icon: Package,
    title: "Per-Vehicle Sourcing",
    description:
      "Specify wheels as you need them and each one is sourced, specified with the factory, and dispatched directly to your workshop or customer. There's no minimum batch size and no stock risk.",
  },
  {
    icon: Warehouse,
    title: "Optional Stock Holding",
    description:
      "For high-demand fitments, you can hold a small stock of popular wheels sourced in batches for faster turnaround on common replacements. We'll advise you on which fitments move fastest.",
  },
];

export const PartnershipModels = () => {
  return (
    <section id="partnership" className="bg-secondary border-t border-grey700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Sourcing Model
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.0] max-w-xl">
              Flexible sourcing options.
            </h2>
            <p className="text-muted-foreground text-base font-light max-w-sm leading-relaxed">
              We adapt to how you work, whether that's per-vehicle sourcing or holding fast-moving fitments in stock.
            </p>
          </div>
        </motion.div>

        {/* Models: static render; per-card animation caused second card to stay at partial opacity */}
        <div className="grid md:grid-cols-2 gap-0 border border-border">
          {models.map((model, index) => (
            <div
              key={index}
              className="group p-10 lg:p-16 border-r-0 md:border-r border-border last:border-r-0 hover:bg-muted/30 transition-colors duration-300"
            >
              <model.icon className="w-5 h-5 text-muted-foreground mb-10" strokeWidth={1.5} />
              <h3 className="text-foreground font-semibold text-2xl tracking-tight mb-4">
                {model.title}
              </h3>
              <p className="text-foreground/80 font-light leading-relaxed">
                {model.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#quote"
            className="inline-flex items-center gap-3 bg-foreground text-background text-sm font-semibold tracking-wide px-8 py-4 hover:bg-[hsl(var(--gold-dim))] hover:text-grey100 transition-colors duration-200"
          >
            Request a Sourcing Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};
