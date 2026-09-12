import { motion } from "framer-motion";

const objections = [
  {
    number: "01",
    quote: "Three months is too long, my customer won't wait.",
    title: "Ask About the Faster Routes",
    answer:
      "Two faster routes. The factory holds ready-made sets in common sizes and finishes with no production wait, and air freight brings a built-to-spec set down to around five weeks. Ask before assuming a job is off the table.",
  },
  {
    number: "02",
    quote: "Why would I buy through you and not go direct?",
    title: "The Factory Is the Easy Part",
    answer:
      "Because the factory is the easy part. Anyone can find a Chinese forge. Knowing which one holds TÜV certification, reads the material reports, and gets the offset right on a specific car is the work. That's what the fee covers, and we hold exclusivity on the accounts we introduce.",
  },
  {
    number: "03",
    quote: "What happens if the fitment is wrong?",
    title: "Fitment Is Locked in Writing",
    answer:
      "It's confirmed in writing before anything is made. We give you a recommended specification for the vehicle, you confirm it, and production only starts once that's locked. Nothing is guessed at either end.",
  },
  {
    number: "04",
    quote: "I don't want to be the importer.",
    title: "Lighter Than It Sounds",
    answer:
      "It's less than it sounds. The factory invoices you, your freight forwarder handles clearance and duty, and the delivered price covers it. It's the same as any trade account importing from overseas, and it's what gets you factory pricing.",
  },
  {
    number: "05",
    quote: "Why is your fee separate from the wheels?",
    title: "Two Invoices, No Hidden Margin",
    answer:
      "So you can see exactly what you're paying for. We never mark up the goods. You pay the factory for the wheels and you pay us for the sourcing. Two invoices, no hidden margin.",
  },
];

export const WorkshopObjections = () => {
  return (
    <section id="working-with-us" className="bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-grey500 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Straight Answers
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-grey100 tracking-tight leading-[1.0] max-w-xl">
            What workshop owners ask us first.
          </h2>
        </motion.div>

        {/* Objections */}
        <div className="grid md:grid-cols-2 gap-0 border border-grey700/60">
          {objections.map((objection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`p-8 lg:p-12 border-b border-grey700/60 last:border-b-0 md:[&:nth-child(odd):not(:last-child)]:border-r hover:bg-white/5 transition-colors duration-300 group ${
                index === objections.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <span className="text-grey500 font-figure text-5xl font-bold block mb-6 leading-none tracking-tight">
                {objection.number}
              </span>
              <p className="text-grey300 italic text-sm font-light leading-relaxed mb-4 border-l-2 border-grey700 pl-4">
                "{objection.quote}"
              </p>
              <h3 className="text-grey100 font-semibold text-xl tracking-tight mb-4 leading-snug">
                {objection.title}
              </h3>
              <p className={`text-grey300 text-sm font-light leading-relaxed ${
                index === objections.length - 1 ? "md:max-w-2xl" : ""
              }`}>
                {objection.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
