import { motion } from "framer-motion";
import { Award, TrendingDown, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Award,
    stat: "OEM+",
    label: "Quality Standards",
    description:
      "Every wheel is manufactured from forged 6061-T6 aluminium alloy to exceed OEM tolerances, so you get consistent quality on every specification we source.",
  },
  {
    icon: TrendingDown,
    stat: "No margin on the goods, ever.",
    statement: true,
    label: "Fee Structure",
    description:
      "Our fee is agreed upfront and varies by product. You always see exactly what we charge.",
  },
  {
    icon: MapPin,
    stat: "UK",
    label: "Based & Supported",
    description:
      "We're UK-based, and you'll always deal with someone who knows your specification personally, from first enquiry through to delivery. No call centres and no being passed around.",
  },
];

export const WhyMT = () => {
  return (
    <section id="why-mt" className="bg-secondary overflow-hidden">
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
            Why MT Sourcing Partners
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.0] max-w-xl">
            Premium product. Simple sourcing.
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
                <pillar.icon className="w-6 h-6 text-muted-foreground mb-6" strokeWidth={1.5} />
                {/* Headline stat, one of the four permitted places for gold */}
                <span
                  className={
                    "statement" in pillar && pillar.statement
                      ? "block text-3xl lg:text-4xl font-semibold text-gold tracking-tight leading-tight"
                      : "text-5xl lg:text-6xl font-semibold text-gold tracking-tight font-figure"
                  }
                >
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
