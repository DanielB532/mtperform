import { motion } from "framer-motion";
import { Award, TrendingDown, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Award,
    stat: "OEM+",
    label: "Quality Standards",
    description:
      "Every wheel is manufactured from forged 6061-T6 aluminium alloy to exceed OEM tolerances. Consistent quality on every order.",
  },
  {
    icon: TrendingDown,
    stat: "Trade",
    label: "Pricing Structure",
    description:
      "Built for businesses, not consumers. Our pricing model is designed around margin for our partners — no hidden fees, no surprises.",
  },
  {
    icon: MapPin,
    stat: "UK",
    label: "Based & Supported",
    description:
      "We're a UK-based team. Real people, real communication. From first enquiry to delivery, you'll always have a contact.",
  },
];

export const WhyMT = () => {
  return (
    <section id="why-mt" className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32 lg:py-40">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-28"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Why MT Performance
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.0] max-w-xl">
            Premium product. Simple supply.
          </h2>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group px-0 md:px-12 first:pl-0 last:pr-0 py-12 md:py-0"
            >
              <div className="mb-8">
                <pillar.icon className="w-6 h-6 text-primary mb-6" strokeWidth={1.5} />
                <span className="text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
                  {pillar.stat}
                </span>
                <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mt-2">
                  {pillar.label}
                </p>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed font-light">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
