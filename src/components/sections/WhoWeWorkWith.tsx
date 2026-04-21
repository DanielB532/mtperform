import { motion } from "framer-motion";
import { Wrench, Settings, Car, Building2 } from "lucide-react";

const businessTypes = [
  {
    icon: Settings,
    title: "Tyre & Alignment Centres",
    bullets: [
      "Access vehicle-specific forged wheels on demand",
      "We supply, you fit and retain full margin",
      "No inventory or stockholding required",
    ],
    idealFor: "Independent fitters to multi-site operations",
  },
  {
    icon: Wrench,
    title: "Alloy Repair Specialists",
    bullets: [
      "Offer premium replacement when repair isn't viable",
      "Convert unrepairable jobs into high-margin sales",
      "Retain the customer instead of referring out",
    ],
    idealFor: "Shops handling high volumes of damaged wheels",
  },
  {
    icon: Car,
    title: "Bodykit & Customisation Specialists",
    bullets: [
      "Premium forged upgrades for custom builds and widebody projects",
      "Fitment support for staggered setups and aggressive offsets",
      "Consistent supply for customer builds and showcase cars",
    ],
    idealFor: "Kit installers, styling garages, wrap/PPF studios",
  },
  {
    icon: Building2,
    title: "Dealers & Prep Centres",
    bullets: [
      "Vehicle-specific OEM+ replacements",
      "Restore original look for resale presentation",
      "White-label packaging available",
    ],
    idealFor: "Used car prep and dealer groups",
  },
];

export const WhoWeWorkWith = () => {
  return (
    <section id="who-we-work-with" className="bg-secondary overflow-hidden">
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
            Built for Trade
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.0] max-w-xl">
              Built for Automotive Businesses
            </h2>
            <div className="max-w-md">
              <p className="text-white/60 text-base font-light leading-relaxed mb-4">
                We partner with automotive businesses that need a reliable, premium wheel supply solution. From independent tyre fitters to multi-site operations, our model integrates with your workflow.
              </p>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Other fits include: performance tuners, wrap/PPF studios, detailing centres, bodyshops, specialist installers and independent retailers. If you fit or want to add wheels to what you offer, contact us as your business is most likely a fit.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Business Type Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {businessTypes.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 lg:p-10 border-b lg:border-b-0 last:border-b-0 border-r-0 md:border-r border-white/10 hover:bg-white/5 transition-colors duration-300"
            >
              <business.icon
                className="w-5 h-5 text-primary mb-8"
                strokeWidth={1.5}
              />
              <h3 className="text-primary font-semibold text-base tracking-tight mb-5 leading-snug">
                {business.title}
              </h3>
              <ul className="space-y-3 mb-8">
                {business.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2.5">
                    <span className="text-primary mt-[5px] text-[8px]">●</span>
                    <span className="text-white/65 text-sm font-light leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-white/40 font-light">
                  <span className="text-primary font-medium">Ideal for:</span>{" "}
                  {business.idealFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
