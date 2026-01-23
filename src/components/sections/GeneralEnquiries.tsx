import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GeneralEnquiries = () => {
  return (
    <section id="enquiries" className="section-padding bg-background">
      <div className="container-narrow max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            General Wheel Enquiries
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Not a Business?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            We primarily work with automotive businesses, but we're happy to answer general wheel enquiries. 
            If you're a car owner looking for information, get in touch and we'll point you in the right direction.
          </p>
          
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
