import { motion } from "framer-motion";
const steps = [{
  number: "01",
  title: "Replacement Required",
  description: "Your customer needs a wheel replacement due to damage, safety, or upgrade."
}, {
  number: "02",
  title: "Select Vehicle-Specific Fit",
  description: "Choose the correct specification for popular platforms including Audi, BMW, Mercedes."
}, {
  number: "03",
  title: "Confirm Spec & Finish",
  description: "Finalise size, finish, and delivery. Build-to-order or from stock options available."
}, {
  number: "04",
  title: "Fulfilment & Delivery",
  description: "Wheels delivered to your workshop. You fit, balance, and retain the customer relationship."
}];
export const HowItWorks = () => {
  return <section id="how-it-works" className="section-padding bg-secondary text-secondary-foreground">
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
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 font-semibold">
            A Simple Process
          </h2>
          <p className="text-lg max-w-xl mx-auto text-primary-foreground">
            No complicated systems. No mandatory stock commitments. Straightforward supply.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-secondary-foreground/20 -z-10" />}

              {/* Step Number */}
              <div className="font-display text-5xl text-primary mb-4">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl mb-3 font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-secondary-foreground/70">
                {step.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};