import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this trade-only?",
    answer: "We primarily work with automotive businesses, but we also handle one-off wheel enquiries for individual vehicle owners on a request basis."
  },
  {
    question: "What vehicles do you support?",
    answer: "We focus on popular European platforms including Audi/VAG, BMW, and Mercedes. Coverage is expanding based on partner demand. Contact us for specific vehicle requirements."
  },
  {
    question: "How do I request a quote?",
    answer: "Get in touch via the contact form or WhatsApp. Tell us about your business and typical fitments, and we'll provide tailored pricing."
  },
  {
    question: "Can you match a specific fitment and finish?",
    answer: "Yes. We supply vehicle-specific fitments with multiple finish options. Share your requirements and we'll confirm availability and lead times."
  },
  {
    question: "What's the typical turnaround time?",
    answer: "Build-to-order wheels typically ship within 2-4 weeks depending on specification. For partners holding stock, wheels can be dispatched same-day or next-day."
  },
  {
    question: "Do you supply one-off sets?",
    answer: "Yes. Individual enquiries are welcome. Submit your request and we'll review the details and come back with options."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted">
      <div className="container-narrow max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 font-semibold">
            Common Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="font-display text-xl text-foreground hover:text-primary text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
