import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Replacement Required",
    description:
      "Your customer needs a wheel, whether it's damaged beyond repair, unsafe, or simply due an upgrade. You spot the need and bring it to us.",
  },
  {
    number: "02",
    title: "Select Vehicle Fit",
    description:
      "Share the vehicle make, model, and year. We identify the exact fitment across popular platforms including Audi, BMW, and Mercedes.",
  },
  {
    number: "03",
    title: "We Confirm & Quote",
    description:
      "We confirm the specification, finish options, and lead time, then send you a clear trade price with nothing left ambiguous.",
  },
  {
    number: "04",
    title: "Delivered to Your Workshop",
    description:
      "Wheels are dispatched directly to your site. You fit, invoice your customer, and retain the full relationship.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-28"
        >
          <p className="text-[hsl(0,84%,60%)] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.0]">
            Four steps to supply.
          </h2>
        </motion.div>

        {/* Steps — static render, no per-card animation to guarantee visibility */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 border-b lg:border-b-0 border-r-0 md:border-r border-white/10 last:border-r-0"
            >
              <span className="text-primary text-xs font-semibold tracking-[0.2em] block mb-8">
                {step.number}
              </span>
              <h3 className="text-white font-semibold text-lg tracking-tight mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="text-white/65 text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
