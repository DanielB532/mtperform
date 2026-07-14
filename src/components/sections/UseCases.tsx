import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const useCases = [
  {
    number: "01",
    quote: "I'm on PCP and I'm scared of getting charged for wheel damage when I hand it back.",
    title: "Protect a Finance Deal",
    description:
      "Use this angle with your customers. Sell them a forged set to run day-to-day while the original wheels stay boxed and pristine for handback, so they dodge the end-of-deal damage charges entirely. At the end of the finance deal they can take the forged set off and sell it on, recouping a good chunk of what they paid. It's an upsell most of your competitors won't be offering.",
  },
  {
    number: "02",
    quote: "I've cracked another wheel on a pothole and I'm sick of replacing them.",
    title: "Survive UK Roads",
    description:
      "Cast wheels crack on a hard pothole hit, and a cracked wheel is scrap. Forged 6061-T6 bends before it breaks, so it takes the punishment UK roads dish out and usually survives repairable. For any customer tired of the pothole lottery, this is the practical fix.",
  },
  {
    number: "03",
    quote: "I've seen this exact wheel and I want it on my car.",
    title: "Build Something Specific",
    description:
      "You're no longer limited to like-for-like replacements. Take a photo of any design your customer wants, send it over, and we'll replicate it and adapt it to fit their vehicle. It means you can say yes to the bespoke jobs you'd normally have to turn away.",
  },
  {
    number: "04",
    quote: "I just want my car to look sharper and hold its value.",
    title: "Upgrade & Add Value",
    description:
      "Some customers aren't replacing anything, they simply want an upgrade. A clean forged set makes a car present better and hold its value stronger, whether they keep them on or sell the set separately down the line.",
  },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Use Cases
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.0] max-w-xl">
            When your customer walks in with this.
          </h2>
        </motion.div>

        {/* Use Cases */}
        <div className="grid md:grid-cols-2 gap-0 border border-white/10">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 lg:p-12 border-b border-white/10 md:[&:nth-child(odd)]:border-r md:[&:nth-child(n+3)]:border-b-0 [&:last-child]:border-b-0 hover:bg-white/5 transition-colors duration-300 group"
            >
              <span className="text-primary text-5xl font-bold block mb-6 leading-none tracking-tight">
                {useCase.number}
              </span>
              <p className="text-white/60 italic text-sm font-light leading-relaxed mb-4 border-l-2 border-primary/40 pl-4">
                Your customer says: "{useCase.quote}"
              </p>
              <h3 className="text-white font-semibold text-xl tracking-tight mb-4 leading-snug">
                {useCase.title}
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Link to forged comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <a
            href="#forged-comparison"
            className="inline-flex items-center gap-3 text-white text-sm font-medium tracking-wide px-8 py-4 border border-white/10 hover:bg-white/10 transition-colors duration-200"
          >
            Not sure why forged is worth it long term? See how it stacks up
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
