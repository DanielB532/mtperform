import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Replacement Required",
    description:
      "Your customer needs a wheel replacement due to damage, safety, or upgrade.",
  },
  {
    number: "02",
    title: "Select Vehicle-Specific Fit",
    description:
      "Choose the correct specification for popular platforms including Audi, BMW, Mercedes.",
  },
  {
    number: "03",
    title: "Confirm Spec & Finish",
    description:
      "Finalise size, finish, and delivery. Build-to-order or from stock options available.",
  },
  {
    number: "04",
    title: "Fulfilment & Delivery",
    description:
      "Wheels delivered to your workshop. You fit, balance, and retain the customer relationship.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-secondary overflow-hidden">
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
            Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.0]">
            Four steps to supply.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 lg:p-10 border-b lg:border-b-0 border-r-0 md:border-r border-white/8 last:border-r-0"
            >
              <span className="text-primary text-xs font-semibold tracking-[0.2em] block mb-8">
                {step.number}
              </span>
              <h3 className="text-white font-semibold text-lg tracking-tight mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="text-white/35 text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
