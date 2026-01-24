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
            One-Off Enquiries Welcome
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-4">
            Looking for a One-Off Set of Wheels?
          </h2>
          
          {/* Confidence notice */}
          <p className="text-primary font-medium text-lg mb-6">
            Yes — we do handle single, one-off wheel enquiries.
          </p>
          
          <div className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto space-y-4 text-left">
            <p>
              While we primarily work with automotive businesses, we don't want you to feel left out if you're looking for a one-off set of wheels to make your car stand out on the road.
            </p>
            <p>
              If you have a specific request — whether that's a particular style, size, or finish — simply choose a design you like and get in touch. We'll review the details and come back to you with a tailored quote.
            </p>
            <p>
              If it makes more sense to complete the work through a trusted workshop, we'll guide you to the right partner. If not, we'll advise directly.
            </p>
          </div>
          
          {/* For Vehicle Owners */}
          <div className="bg-muted/50 border border-border p-6 mb-8 text-left max-w-lg mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-2">Not sure where to start?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Send us an enquiry and we'll help point you in the right direction.
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
