import { motion } from "framer-motion";
import { Check } from "lucide-react";
import heroWheel from "@/assets/hero-wheel.jpg";
const features = ["Premium forged monoblock construction", "18\" to 24\" rim sizes available", "Vehicle-specific fitments", "Multiple designs and finishes available", "OEM+ quality standards", "Built for replacement and upgrade scenarios", "Suitable for wheel + tyre packages"];
export const TheWheels = () => {
  return <section id="the-wheels" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="relative">
            <div className="aspect-square bg-secondary overflow-hidden">
              <img src={heroWheel} alt="Premium forged wheel detail" className="w-full h-full object-cover" />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 -z-10" />
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
        }}>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              The Wheels
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6 font-semibold">
              Quality Without Compromise
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-secondary">
              Our rims are made from forged 6061-T6 aluminium, a material known for being 
              strong without feeling heavy — which tends to matter when a wheel has to look 
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
    </section>;
};