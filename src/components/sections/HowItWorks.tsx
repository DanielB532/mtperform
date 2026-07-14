import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell Us What They're After",
    description:
      "Every job starts differently. Maybe a wheel's damaged, maybe a customer has seen a design they want, or maybe you're offering premium wheels as an upgrade option. You bring us the request and we take it from there.",
  },
  {
    number: "02",
    title: "We Confirm the Fit",
    description:
      "Share the vehicle details, or send us the diameter, width, and offset if you already have them. We confirm the exact specification before anything is quoted, so there's no guesswork on either side.",
  },
  {
    number: "03",
    title: "Pick the Design",
    description:
      "Browse the full catalogue or send us an image of a design your customer has in mind. Either way, we match it to the exact specification and confirm what's possible.",
    link: { href: "/catalogue.html", label: "Browse the catalogue" },
  },
  {
    number: "04",
    title: "We Quote & Confirm",
    description:
      "We confirm the finish, lead time, and a clear trade price with nothing hidden and nothing left ambiguous.",
  },
  {
    number: "05",
    title: "Delivered, Fitted, Invoiced",
    description:
      "Wheels are dispatched directly to your workshop. You fit, invoice your customer, and keep the full relationship from start to finish.",
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
            A premium process, start to finish.
          </h2>
        </motion.div>

        {/* Steps — static render, no per-card animation to guarantee visibility */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border border-white/10">
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
              {"link" in step && step.link && (
                <a
                  href={step.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary text-sm font-medium hover:underline"
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
