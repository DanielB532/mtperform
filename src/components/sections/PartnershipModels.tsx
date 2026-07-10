import { motion } from "framer-motion";
import { Package, Warehouse } from "lucide-react";

const models = [
  {
    icon: Package,
    title: "Build-to-Order Supply",
    description:
      "Order wheels as you need them. Each wheel is built to specification and shipped directly to your workshop or customer. No minimum orders, no stock risk.",
  },
  {
    icon: Warehouse,
    title: "Optional Stock Holding",
    description:
      "For high-demand fitments, hold a small stock of popular wheels. Faster turnaround for common replacements. We advise on which fitments move fastest.",
  },
];

export const PartnershipModels = () => {
  return (
    <section id="partnership" className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Supply Options
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.0] max-w-xl">
              Flexible supply options.
            </h2>
            <p className="text-muted-foreground text-base font-light max-w-sm leading-relaxed">
              We adapt to how you work. Build-to-order flexibility or stock fast-moving fitments.
            </p>
          </div>
        </motion.div>

        {/* Models — static render; per-card animation caused second card to stay at partial opacity */}
        <div className="grid md:grid-cols-2 gap-0 border border-border">
          {models.map((model, index) => (
            <div
              key={index}
              className="group p-10 lg:p-16 border-r-0 md:border-r border-border last:border-r-0 hover:bg-muted/30 transition-colors duration-300"
            >
              <model.icon className="w-5 h-5 text-primary mb-10" strokeWidth={1.5} />
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
            className="inline-flex items-center gap-3 bg-primary text-white text-sm font-semibold tracking-wide px-8 py-4 hover:bg-primary/90 transition-colors duration-200"
          >
            Request a Quote
          </a>
          <a
            href="#enquiries"
            className="inline-flex items-center gap-3 text-foreground text-sm font-medium tracking-wide px-8 py-4 border border-border hover:bg-muted/50 transition-colors duration-200"
          >
            Not a business? Buy a personal set →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
