import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this trade-only?",
    answer:
      "We primarily work with automotive businesses, but we also handle one-off wheel enquiries for individual vehicle owners on a request basis.",
  },
  {
    question: "What vehicles do you support?",
    answer:
      "We focus on popular European platforms including Audi/VAG, BMW, and Mercedes. Coverage is expanding based on partner demand. Contact us for specific vehicle requirements.",
  },
  {
    question: "How do I request a sourcing quote?",
    answer:
      "Get in touch via the quote form or WhatsApp. Tell us about your business and typical fitments, and we'll come back with a tailored sourcing fee.",
  },
  {
    question: "Does the price include VAT?",
    answer:
      "Our sourcing fee is quoted separately from the factory price. For personal enquiries, the figures we send include VAT, so the price you see is the price you pay, plus delivery. Trade sourcing is quoted excluding VAT, since VAT-registered workshops reclaim it separately. If you're sourcing for resale, contact us for trade terms.",
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
    question: "What's the typical turnaround time?",
    answer:
      "Specification-led wheels typically ship within 2-4 weeks depending on the build. For partners holding stock, wheels can be dispatched same-day or next-day.",
  },
  {
    question: "Do you handle one-off sets?",
    answer:
      "Yes. Individual enquiries are welcome. Submit your request and we'll review the details and come back with options.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-5">
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
