import { motion } from "framer-motion";
import { Check } from "lucide-react";
import qualityWheels from "@/assets/quality-wheels.jpg";
const qualityPoints = [{
  label: "Fitment",
  text: "Vehicle-specific specs for accurate installation every time."
}, {
  label: "Finish",
  text: "Premium quality that holds up in real use, not just under showroom lights."
}, {
  label: "Consistency",
  text: "Workshop-ready delivery, consistent comms, reliable lead times."
}];
const features = ["Premium forged monoblock construction", "Forged 6061-T6 aluminium alloy", "15\" to 26\" rim sizes available", "Vehicle-specific fitments", "Multiple designs and finishes", "OEM+ quality standards"];
export const TheWheels = () => {
  return <section id="the-wheels" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="relative order-2 lg:order-1">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/20 -z-10" />
            <div className="absolute -inset-8 border border-border -z-20" />

            {/* Main image container */}
            <div className="relative overflow-hidden bg-secondary">
              <img src={heroWheel} alt="Premium forged wheel detail" className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700" />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Accent corner */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="order-1 lg:order-2">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Quality
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-8 font-semibold">
              Quality Without Compromise
            </h2>

            {/* Quality Points */}
            <div className="space-y-6 mb-8">
              {qualityPoints.map((point, index) => <div key={index}>
                  <h4 className="text-sm uppercase tracking-wider text-primary font-medium mb-2">
                    {point.label}
                  </h4>
                  <p className="leading-relaxed text-secondary">
                    {point.text}
                  </p>
                </div>)}
            </div>

            {/* Feature List */}
            <ul className="space-y-3">
              {features.map((feature, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.08
            }} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>;
};