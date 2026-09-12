import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this trade-only?",
    answer:
      "Yes. We work exclusively with automotive businesses: workshops, tyre centres, repair specialists and dealers. We don't handle enquiries from private individuals.",
  },
  {
    question: "What vehicles do you support?",
    answer:
      "Any vehicle. Every design can be customised to fit any car, from common platforms to rare and heavily modified builds. Send the vehicle details and we'll confirm the specification.",
  },
  {
    question: "Who is the importer of record?",
    answer:
      "You are. The factory invoices you directly, your freight forwarder handles clearance and duty, and the delivered price covers it. We never take title to the goods; our fee covers sourcing, specification and coordination only.",
  },
  {
    question: "How do I request a sourcing quote?",
    answer:
      "Get in touch via the quote form or WhatsApp. Tell us about your business and typical fitments, and we'll come back with a tailored sourcing fee.",
  },
  {
    question: "Does the price include VAT?",
    answer:
      "Our sourcing fee is quoted separately from the factory price, excluding VAT, since VAT-registered workshops reclaim it separately. If you're sourcing for resale, contact us for trade terms.",
  },
  {
    question: "Can you match a specific fitment and finish?",
    answer:
      "Yes. Any design in the catalogue can be specified to your customer's exact fitment. To confirm a specification, we'll need the diameter (in inches), rim width (J-value), and offset (ET), along with whether the vehicle has modified brake calipers or has been lowered. If you can't provide the ET, just describe the look or fitment you're after and we'll match it from there.",
  },
  {
    question: "What if the design I want isn't in the catalogue?",
    answer:
      "Send us an image of the design you're after and we'll take it to the factory to have it replicated to your specification.",
  },
  {
    question: "What are the lead times?",
    answer: (
      <div className="space-y-4">
        <p>
          Air or sea freight is your choice on every specification. Sea keeps the cost down, air gets the set to you faster.
        </p>
        <div>
          <p className="text-foreground font-medium mb-1">Ready-made sets, in stock at the factory. The fastest route.</p>
          <p>
            Around <span className="font-figure">5 weeks</span> by air, <span className="font-figure">8 to 10 weeks</span> by sea. No production wait.
          </p>
        </div>
        <div>
          <p className="text-foreground font-medium mb-1">Built to specification, sea freight</p>
          <p>
            <span className="font-figure">8 to 12 weeks</span> door to door. Add roughly <span className="font-figure">10 days</span> for polished or brushed finishes. Carbon takes longer and is quoted individually.
          </p>
        </div>
        <div>
          <p className="text-foreground font-medium mb-1">Built to specification, air freight</p>
          <p>
            Roughly <span className="font-figure">5 to 6 weeks</span>. Costs significantly more, quoted individually.
          </p>
        </div>
        <p className="text-sm">
          These timings reflect current shipping conditions. Sea freight has been running longer than normal, and we expect it to shorten as conditions ease.
        </p>
      </div>
    ),
  },
  {
    question: "Do you handle one-off sets?",
    answer:
      "Yes. Most sourcing starts as a single set for a specific customer vehicle, and there's no minimum. Send the details through the quote form and we'll come back with options.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="paper bg-background border-t border-grey700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-snug">
              Common questions.
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-base font-medium text-foreground hover:text-[hsl(var(--gold-dim))] text-left py-6 tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
