import { motion } from "framer-motion";
import { MessageCircle, Car } from "lucide-react";
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
            Not Just for Trade
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            General Wheel Enquiries
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            While we primarily work with automotive businesses, we also handle general wheel enquiries on a case-by-case basis.
            If you're unsure whether your enquiry fits, get in touch and we'll advise on the best next step.
          </p>
          
          {/* For Vehicle Owners */}
          <div className="bg-muted/50 border border-border p-6 mb-8 text-left max-w-lg mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-2">Vehicle Owner?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If you're dealing with damaged wheels or exploring a premium replacement, we can help — either directly or through one of our partner workshops.
                </p>
              </div>
            </div>
          </div>
          
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
