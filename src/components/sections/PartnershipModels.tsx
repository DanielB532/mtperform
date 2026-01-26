import { motion } from "framer-motion";
import { Package, Warehouse, Tag, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const models = [{
  icon: Package,
  title: "Build-to-Order Supply",
  description: "Order wheels as you need them. Each wheel is built to specification and shipped directly to your workshop or your customer. No minimum orders, no stock risk."
}, {
  icon: Warehouse,
  title: "Optional Stock Holding",
  description: "For high-demand fitments, consider holding a small stock of popular wheels. Faster turnaround for common replacements. We'll advise on which fitments move fastest."
}, {
  icon: Tag,
  title: "White-Label Packaging",
  description: "Wheels can be supplied in neutral packaging with no supplier branding. Present the product under your own business identity and maintain customer relationship control."
}, {
  icon: Zap,
  title: "Trial Approach",
  description: "Start with one or two popular fitments. See how the model works for your business before scaling. No long-term commitments required to get started."
}];
export const PartnershipModels = () => {
  return <section id="partnership" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Partnership Models
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6 font-semibold">
            Flexible Supply Options
          </h2>
          <p className="text-lg max-w-2xl text-secondary">
            We adapt to how you work. Whether you prefer build-to-order flexibility or want to stock fast-moving 
            fitments, we have a model that fits your business.
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {models.map((model, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-background border border-border p-8">
              <model.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-display text-2xl text-foreground mb-3 font-semibold">
                {model.title}
              </h3>
              <p className="leading-relaxed text-secondary">
                {model.description}
              </p>
            </motion.div>)}
        </div>

        {/* CTAs */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Explore a B2B Partnership
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="bg-white text-primary border-primary hover:bg-primary/5"
          >
            <a href="#enquiries">
              Not a business? Enquire about a one-off set
            </a>
          </Button>
        </motion.div>
      </div>
    </section>;
};