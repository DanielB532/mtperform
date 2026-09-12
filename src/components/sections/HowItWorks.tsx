import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell Us What They're After",
    description:
      "Bring us the request, whether it's a damaged wheel, a design a customer wants, or an upgrade you'd like to offer. We take it from there.",
  },
  {
    number: "02",
    title: "We Confirm the Fit",
    description:
      "Send the vehicle details, or the diameter, width and offset if you have them. The exact specification is confirmed before anything is costed.",
  },
  {
    number: "03",
    title: "Pick the Design",
    description:
      "Browse the catalogue or send us an image. We match it to the specification and confirm what's possible with the factory.",
    link: { href: "/catalogue.html", label: "Browse the catalogue" },
  },
  {
    number: "04",
    title: "We Confirm the Fee",
    description:
      "Finish, freight choice of air or sea, lead time and our sourcing fee, all confirmed in writing before anything goes to production.",
  },
  {
    number: "05",
    title: "Delivered, Fitted, Invoiced",
    description:
      "Wheels are dispatched from the factory to your workshop. You fit, invoice your customer, and keep the relationship.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-28"
        >
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-grey100 tracking-tight leading-[1.0]">
            A specified process, start to finish.
          </h2>
        </motion.div>

        {/* Steps: static render, no per-card animation to guarantee visibility */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border border-grey700/60">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 border-b lg:border-b-0 border-r-0 md:border-r border-grey700/60 last:border-r-0"
            >
              <span className="text-gold font-figure text-xs font-semibold tracking-[0.2em] block mb-8">
                {step.number}
              </span>
              <h3 className="text-grey100 font-semibold text-lg tracking-tight mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="text-grey300 text-sm font-light leading-relaxed">
                {step.description}
              </p>
              {"link" in step && step.link && (
                <a
                  href={step.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-grey300 text-sm font-medium hover:text-[hsl(var(--gold-dim))] hover:underline"
                >
                  {step.link.label} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
