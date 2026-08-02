import { motion } from "framer-motion";
import { Check } from "lucide-react";

const qualityPoints = [
  {
    label: "Fitment",
    text: "Vehicle-specific specs for accurate installation every time.",
  },
  {
    label: "Finish",
    text: "Premium quality that holds up in real use, not just under showroom lights.",
  },
  {
    label: "Consistency",
    text: "Workshop-ready delivery, consistent comms, reliable lead times.",
  },
];

const features = [
  "Premium forged monoblock construction",
  "Forged 6061-T6 aluminium alloy",
  '15" to 26" rim sizes available',
  "Vehicle-specific fitments",
  "Multiple designs and finishes",
  "OEM+ quality standards",
  "Construction options: Monoblock, 2-piece, 3-piece, wrapped carbon fibre, full carbon fibre.",
];

export const TheWheels = () => {
  return (
    <section id="the-wheels" className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1 overflow-hidden"
          >
            <img
              src="/mtp-wheel-front.jpg"
              alt="Premium forged wheel detail"
              className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain mx-auto"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Quality
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.0] mb-12">
              Quality without compromise.
            </h2>

            {/* Quality Points */}
            <div className="space-y-8 mb-12">
              {qualityPoints.map((point, index) => (
                <div key={index}>
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-2">
                    {point.label}
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature List */}
            <div className="border-t border-border pt-10">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-3.5 h-3.5 text-primary mt-1 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-foreground text-sm font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Forged Stamp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 lg:mt-32 grid lg:grid-cols-2 gap-16 lg:gap-28 items-center"
        >
          <div className="overflow-hidden">
            <img
              src="/mtp-forged-stamp.jpg"
              alt="Etched forged wheel spec stamp"
              className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain mx-auto"
            />
          </div>
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Certified Forged
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight leading-tight mb-6">
              Every wheel is stamped and traceable.
            </h3>
            <ul className="space-y-2 text-foreground text-sm font-light mb-6">
              <li>Forged</li>
              <li>19x8.5J</li>
              <li>ET45</li>
              <li>PCD 5x112</li>
              <li>CB 57.1</li>
              <li>Max load 750kg</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Mill test reports available on request.
            </p>
          </div>
        </motion.div>

        {/* Build Quality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 lg:mt-32"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-center">
            Build Quality
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <img
                src="/mtp-hub-face.jpg"
                alt="Wheel hub face detail"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain mx-auto"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="/mtp-barrel-profile.jpg"
                alt="Wheel barrel profile detail"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain mx-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
