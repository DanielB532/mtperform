import { motion } from "framer-motion";
import { Check } from "lucide-react";
import heroWheel from "@/assets/hero-wheel.jpg";

const features = [
  "Premium forged monoblock construction",
  "18\" to 24\" rim sizes available",
  "Vehicle-specific fitments",
  "Multiple designs and finishes available",
  "OEM+ quality standards",
  "Built for replacement and upgrade scenarios",
  "Suitable for wheel + tyre packages"
];

export const TheWheels = () => {
  return (
    <section id="the-wheels" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/20 -z-10" />
            <div className="absolute -inset-8 border border-border -z-20" />
            
            {/* Main image container */}
            <div className="relative overflow-hidden bg-secondary">
              <img
                src={heroWheel}
                alt="Premium forged wheel detail"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Accent corner */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              The Wheels
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6 font-semibold">
              Quality Without Compromise
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
              Our rims are made from forged 6061-T6 aluminium, a material known for being 
              strong without feeling heavy. This matters when a wheel has to look 
              premium and still perform day to day. The finish is designed to stay looking 
              clean in real use, not just under showroom lights, and the build quality is 
              the kind you can comfortably put your name behind when supplying customers. 
              UK driving conditions are a decent reality check as well, because potholes, 
              uneven surfaces, and rough patches are part of normal driving here, not a 
              rare event. Put those pieces together and it becomes easier to see why this 
              material, and this type of build, makes sense for anyone who wants wheels 
              that hold up, fit properly, and still turn heads.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
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
                  <span className="text-foreground">{feature}</span>
                </motion.li>)}
            </ul>

            {/* Note */}
            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Specific designs, sizes, and specifications are discussed directly with B2B partners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};