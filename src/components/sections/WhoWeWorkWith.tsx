import { motion } from "framer-motion";
import { Wrench, Settings, Car, Building2 } from "lucide-react";

const businessTypes = [
  {
    icon: Settings,
    title: "Tyre & Alignment Centres",
    bullets: [
      "Access vehicle-specific forged wheels on demand",
      "We supply, you fit and retain full margin",
      "No inventory or stockholding required"
    ],
    idealFor: "Independent fitters to multi-site operations"
  },
  {
    icon: Wrench,
    title: "Alloy Repair Specialists",
    bullets: [
      "Offer premium replacement when repair isn't viable",
      "Convert unrepairable jobs into high-margin sales",
      "Retain the customer instead of referring out"
    ],
    idealFor: "Shops handling high volumes of damaged wheels"
  },
  {
    icon: Car,
    title: "Garages & Workshops",
    bullets: [
      "One reliable partner for all wheel replacements",
      "Consistent quality and known lead times",
      "Simplify your supply chain"
    ],
    idealFor: "General workshops adding wheel services"
  },
  {
    icon: Building2,
    title: "Dealers & Prep Centres",
    bullets: [
      "Vehicle-specific OEM+ replacements",
      "Restore original look for resale presentation",
      "White-label packaging available"
    ],
    idealFor: "Used car prep and dealer groups"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const WhoWeWorkWith = () => {
  return (
    <section id="who-we-work-with" className="section-padding bg-background">
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
            Who We Work With
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6 font-semibold">
            Built for Automotive Businesses
          </h2>
          <p className="text-lg max-w-2xl text-muted-foreground">
            We partner with automotive businesses that need a reliable, premium wheel supply solution. 
            From independent tyre fitters to multi-site operations, our model integrates with your workflow.
          </p>
        </motion.div>

        {/* Business Type Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {businessTypes.map((business, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-card border border-border p-8 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <business.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-foreground mb-4">
                {business.title}
              </h3>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {business.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5 text-xs">●</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Ideal For */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm">
                  <span className="text-muted-foreground">Ideal for:</span>{" "}
                  <span className="text-primary font-medium">{business.idealFor}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
