import { motion } from "framer-motion";
const useCases = [{
  title: "Beyond Repair",
  description: "When a wheel is structurally compromised or cosmetically beyond economical repair, offer a premium replacement instead of referring the customer elsewhere."
}, {
  title: "Premium Over Aftermarket",
  description: "Low-quality aftermarket wheels carry reputation risk. Offer OEM+ forged alternatives that reflect your professional standards."
}, {
  title: "OEM+ Upgrades",
  description: "Vehicle-specific fitments at competitive lead times, with quality that meets or exceeds original specifications. No main dealer wait times."
}];
export const UseCases = () => {
  return <section id="use-cases" className="section-padding bg-background">
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
      }} className="mb-16 text-center">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Use Cases
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl text-foreground mt-4 mb-6 font-semibold">
            When Premium Replacement
            <br />
            Makes Sense
          </h2>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="border-l-2 border-primary pl-6">
              <h3 className="font-display text-2xl text-foreground mb-3 font-semibold">
                {useCase.title}
              </h3>
              <p className="leading-relaxed text-secondary">
                {useCase.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};