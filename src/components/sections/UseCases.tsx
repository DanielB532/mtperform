import { motion } from "framer-motion";

const useCases = [
  {
    number: "01",
    title: "Beyond Repair",
    description:
      "When a wheel is structurally compromised or cosmetically beyond economical repair, offer a premium replacement instead of referring the customer elsewhere.",
  },
  {
    number: "02",
    title: "Premium Over Aftermarket",
    description:
      "Low-quality aftermarket wheels carry reputation risk. Offer OEM+ forged alternatives that reflect your professional standards.",
  },
  {
    number: "03",
    title: "OEM+ Upgrades",
    description:
      "Vehicle-specific fitments at competitive lead times, with quality that meets or exceeds original specifications. No main dealer wait times.",
  },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="bg-muted/20 overflow-hidden">
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
            Use Cases
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.0] max-w-xl">
            When premium replacement makes sense.
          </h2>
        </motion.div>

        {/* Use Cases */}
        <div className="grid md:grid-cols-3 gap-0 border border-border">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 lg:p-12 border-b md:border-b-0 border-r-0 md:border-r border-border last:border-r-0 hover:bg-background transition-colors duration-300 group"
            >
              <span className="text-primary text-xs font-semibold tracking-[0.2em] block mb-8">
                {useCase.number}
              </span>
              <h3 className="text-foreground font-semibold text-xl tracking-tight mb-4 leading-snug">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
