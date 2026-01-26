import { motion } from "framer-motion";
import { Package, Warehouse, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const models = [
  {
    icon: Package,
    title: "Build-to-Order Supply",
    description: "Order wheels as you need them. Each wheel is built to specification and shipped directly to your workshop or customer. No minimum orders, no stock risk."
  },
  {
    icon: Warehouse,
    title: "Optional Stock Holding",
    description: "For high-demand fitments, hold a small stock of popular wheels. Faster turnaround for common replacements. We advise on which fitments move fastest."
  }
];

export const PartnershipModels = () => {
  return (
    <section id="partnership" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Supply Options
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6 font-semibold">
            Flexible Supply Options
          </h2>
          <p className="text-lg max-w-2xl text-muted-foreground">
            We adapt to how you work. Build-to-order flexibility or stock fast-moving fitments.
          </p>
        </motion.div>

        {/* Models Grid - Just 2 cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border p-8"
            >
              <model.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-display text-2xl text-foreground mb-3 font-semibold">
                {model.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Explore a B2B Partnership
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-white text-primary border-primary hover:bg-primary/5 uppercase font-bold"
          >
            <a href="#enquiries">
              NOT A BUSINESS? BUY A PERSONAL SET
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
