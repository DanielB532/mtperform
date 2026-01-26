import { motion } from "framer-motion";
import { Wrench, Settings, Car, Building2 } from "lucide-react";
const businessTypes = [{
  icon: Settings,
  title: "Tyre & Alignment Centres",
  problem: "Customers need replacement wheels, but holding stock is impractical and sourcing one-offs is slow.",
  solution: "Access vehicle-specific forged wheels on demand. We supply, you fit. Turn damage into revenue without the inventory headache.",
  benefit: "New revenue stream with zero stockholding risk."
}, {
  icon: Wrench,
  title: "Alloy Repair Specialists",
  problem: "When repair isn't viable, customers are left without options or are referred elsewhere.",
  solution: "Offer premium replacement as a seamless upsell. We supply the wheel, you complete the job and retain the customer.",
  benefit: "Convert unrepairable jobs into high-margin sales."
}, {
  icon: Car,
  title: "Garages & Workshops",
  problem: "Wheel replacements require sourcing from multiple unknown suppliers with inconsistent quality.",
  solution: "One reliable supply partner for all premium wheel replacements. Consistent quality, known lead times, simple process.",
  benefit: "Simplify your supply chain and protect your reputation."
}, {
  icon: Building2,
  title: "Dealers & Prep Centres",
  problem: "Vehicles with damaged or mismatched wheels affect presentation and resale value.",
  solution: "Vehicle-specific OEM+ replacements that restore the original look. White-label packaging available.",
  benefit: "Present every vehicle at its best, every time."
}];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
export const WhoWeWorkWith = () => {
  return <section id="who-we-work-with" className="section-padding bg-background opacity-100 text-secondary">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Who We Work With
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6 font-semibold">
            Built for Automotive Businesses
          </h2>
          <p className="text-lg max-w-2xl mb-4 text-secondary font-medium">We partner with a wide range of automotive businesses that need a reliable, premium wheel supply solution, whether for replacement, upgrade, or resale. 


From independent tyre fitters to multi-site operations, our model is designed to integrate with your existing workflow.</p>
          <p className="max-w-2xl text-secondary">
        </p>
        </motion.div>

        {/* Business Type Cards */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {businessTypes.map((business, index) => <motion.div key={index} variants={item} className="group bg-card border border-border p-8 hover:shadow-card-hover transition-all duration-300">
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <business.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-foreground mb-4">
                {business.title}
              </h3>

              {/* Problem */}
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider font-medium text-secondary">
                  The Challenge
                </span>
                <p className="mt-1 text-secondary">{business.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider font-medium text-secondary">
                  How We Help
                </span>
                <p className="text-foreground mt-1">{business.solution}</p>
              </div>

              {/* Benefit */}
              <div className="pt-4 border-t border-border">
                <p className="text-primary font-medium">{business.benefit}</p>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};