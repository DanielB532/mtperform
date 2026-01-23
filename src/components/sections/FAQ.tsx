import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are typical lead times?",
    answer: "Build-to-order wheels typically ship within 2-4 weeks depending on specification. For partners holding stock, wheels can be dispatched same-day or next-day."
  },
  {
    question: "Is there a minimum order requirement?",
    answer: "No. You can order a single wheel for a single job. There are no minimum quantities or mandatory stock commitments."
  },
  {
    question: "What vehicle platforms do you cover?",
    answer: "We focus on popular European platforms including Audi/VAG, BMW, and Mercedes. Coverage is expanding based on partner demand. Contact us for specific vehicle requirements."
  },
  {
    question: "How do I get started as a partner?",
    answer: "Get in touch via the contact form or WhatsApp. We'll discuss your business needs, typical fitments, and how the partnership would work for you."
  },
  {
    question: "Can I offer wheel and tyre packages?",
    answer: "Yes. Our wheels are designed to be bundled with your tyre fitting, balancing, and alignment services. You manage the complete job and retain the relationship."
  },
  {
    question: "What quality certifications do the wheels carry?",
    answer: "All wheels meet strict quality and safety standards. Specific certifications and documentation are provided with partnership onboarding."
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
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
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
