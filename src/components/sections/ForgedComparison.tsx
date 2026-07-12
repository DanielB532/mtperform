import { motion } from "framer-motion";
import { Check, X, Minus, AlertTriangle } from "lucide-react";

const criteria = [
  { label: "Stands up to UK potholes", forged: "yes", cast: "no", flow: "partial", highlight: true },
  { label: "Better fuel economy and EV range", forged: "yes", cast: "no", flow: "partial" },
  { label: "Up to 30% lighter at the same size", forged: "yes", cast: "no", flow: "partial" },
  { label: "Bends rather than cracks on impact", forged: "yes", cast: "no", flow: "partial" },
  { label: "No internal air pockets (zero porosity)", forged: "yes", cast: "no", flow: "no" },
  { label: "Strong under repeated everyday stress", forged: "yes", cast: "no", flow: "partial" },
  { label: "Strengthened through the whole wheel", forged: "yes", cast: "no", flow: "no" },
  { label: "Slim spoke designs without losing strength", forged: "yes", cast: "no", flow: "no" },
];

const benefits = [
  {
    title: "Built for British roads.",
    text: "UK roads are rough on wheels and everyone knows it. When a cast wheel hits a bad pothole it can crack, and a cracked wheel is finished. Forged 6061-T6 bends before it breaks, so it can usually be repaired and you keep driving.",
  },
  {
    title: "Lighter wheels save you money every mile.",
    text: "Forged wheels are up to 30% lighter than cast, so your car uses less energy to keep them turning. That means better fuel economy, extra range in an EV, and a car that feels sharper to drive and quicker to stop.",
  },
  {
    title: "Protect your finance deal.",
    text: "On PCP or a lease, you can store your factory wheels at home and run these instead. Refit the originals in perfect condition at handback and avoid any charges, since 64% of UK buyers say scraped alloys would put them off a car. Then sell the forged set on, because they hold their value well enough to make back a good chunk of what you paid.",
  },
  {
    title: "Add value when you sell.",
    text: "Keep the wheels on and your car presents better and holds its price in any negotiation. Or sell the set separately, because good forged wheels keep real value on the used market in a way cast and replica wheels don't.",
  },
  {
    title: "And yes, they look incredible.",
    text: "Forging lets us build slimmer, sharper spoke designs that cast wheels can't match at the same strength. The looks are the bonus rather than the whole point, because the same properties that make them look aggressive also make them stronger and lighter.",
  },
];

const CellMark = ({ value }: { value: string }) => {
  if (value === "yes") return <Check className="w-5 h-5 text-green-500 mx-auto" strokeWidth={2.5} />;
  if (value === "partial") return <Minus className="w-4 h-4 text-white/30 mx-auto" strokeWidth={2.5} />;
  return <X className="w-4 h-4 text-red-500 mx-auto" strokeWidth={2.5} />;
};

export const ForgedComparison = () => {
  return (
    <section id="forged-comparison" className="bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 lg:mb-20"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            The Material Matters
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.0] max-w-2xl">
            Why 6061-T6 forged?
          </h2>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-x-auto mb-16 lg:mb-24"
        >
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/15">
                <th className="text-left py-4 pr-4 font-medium text-white/50 text-xs tracking-wide uppercase w-[38%]">
                  Criteria
                </th>
                <th className="text-center py-4 px-3 bg-primary/10 border-t-2 border-t-primary">
                  <span className="block text-white font-semibold">6061-T6 Forged</span>
                  <span className="block text-primary text-[11px] font-medium mt-0.5">MT Performance</span>
                </th>
                <th className="text-center py-4 px-3">
                  <span className="block text-white/70 font-medium">Cast</span>
                  <span className="block text-white/35 text-[11px] mt-0.5">Most OEM &amp; budget</span>
                </th>
                <th className="text-center py-4 px-3">
                  <span className="block text-white/70 font-medium">Flow-formed</span>
                  <span className="block text-white/35 text-[11px] mt-0.5">Mid-tier</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-white/8 ${row.highlight ? "bg-primary/5" : ""}`}
                >
                  <td className={`py-4 pr-4 ${row.highlight ? "text-white font-semibold" : "text-white/80"}`}>
                    {row.highlight && (
                      <AlertTriangle className="w-4 h-4 text-primary inline-block mr-2 -mt-0.5" strokeWidth={2} />
                    )}
                    {row.label}
                  </td>
                  <td className="py-4 px-3 bg-primary/10">
                    <CellMark value={row.forged} />
                  </td>
                  <td className="py-4 px-3">
                    <CellMark value={row.cast} />
                  </td>
                  <td className="py-4 px-3">
                    <CellMark value={row.flow} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-white/30 text-xs mt-4">
            Partial marks: flow-formed wheels only strengthen the outer barrel. The centre of the wheel is still cast.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={index === benefits.length - 1 ? "md:col-span-2 md:max-w-2xl" : ""}
            >
              <h3 className="text-white font-semibold text-xl tracking-tight mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
