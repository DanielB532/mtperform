import { motion } from "framer-motion";
import { Award, TrendingDown, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Award,
    stat: "OEM+",
    label: "Quality Standards",
    description:
      "Every wheel is manufactured from forged 6061-T6 aluminium alloy to exceed OEM tolerances, so you get consistent quality on every order.",
  },
  {
    icon: TrendingDown,
    stat: "Trade",
    label: "Pricing Structure",
    description:
      "We built our pricing for businesses rather than consumers. The model is designed around margin for our partners, with no hidden fees and no surprises.",
  },
  {
    icon: MapPin,
    stat: "UK",
    label: "Based & Supported",
    description:
      "We're UK-based, and you'll always deal with someone who knows your order personally, from first enquiry through to delivery. No call centres and no being passed around.",
  },
];

export const WhyMT = () => {
  return (
    <section id="why-mt" className="bg-[#0d0d0d] overflow-hidden">
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
            Why MT Performance
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.0] max-w-xl">
            Premium product. Simple supply.
          </h2>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
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
                <span className="text-5xl lg:text-6xl font-semibold text-white tracking-tight">
                  {pillar.stat}
                </span>
                <p className="text-white/50 text-sm font-medium tracking-wide uppercase mt-2">
                  {pillar.label}
                </p>
              </div>
              <p className="text-white/60 text-base leading-relaxed font-light">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
