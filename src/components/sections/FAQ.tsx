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
    question: "How do I request a quote?",
    answer:
      "Get in touch via the quote form or WhatsApp. Tell us about your business and typical fitments, and we'll provide tailored pricing.",
  },
  {
    question: "Can you match a specific fitment and finish?",
    answer:
      "Yes. We supply vehicle-specific fitments with multiple finish options. Share your requirements and we'll confirm availability and lead times.",
  },
  {
    question: "What's the typical turnaround time?",
    answer:
      "Build-to-order wheels typically ship within 2-4 weeks depending on specification. For partners holding stock, wheels can be dispatched same-day or next-day.",
  },
  {
    question: "Do you supply one-off sets?",
    answer:
      "Yes. Individual enquiries are welcome. Submit your request and we'll review the details and come back with options.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-5">
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
                  <AccordionTrigger className="text-base font-medium text-foreground hover:text-primary text-left py-6 tracking-tight">
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
