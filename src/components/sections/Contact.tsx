import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  enquiryType: z.string().trim().max(100),
  message: z.string().trim().min(1, "Message is required").max(2000)
});
const enquiryTypes = [{
  value: "b2b",
  label: "B2B Partnership Enquiry"
}, {
  value: "general",
  label: "General Wheel Enquiry"
}];
export const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    enquiryType: "b2b",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    toast({
      title: "Message received",
      description: "Thank you for your enquiry. We'll be in touch shortly."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      enquiryType: "b2b",
      message: ""
    });
  };
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi, I'm interested in discussing a B2B wheel supply partnership.");
    window.open(`https://wa.me/447000000000?text=${text}`, "_blank");
  };
  return <section id="contact" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Get Started
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 font-semibold lg:text-5xl">
              Let's Discuss a Partnership
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-primary-foreground">Whether you're a tyre centre, workshop, or dealer, we'd like to hear about your business and how we can work together.</p>

            {/* WhatsApp CTA */}
            <div className="bg-secondary-foreground/5 p-6 mb-8">
              <h3 className="font-display text-xl mb-2">Prefer WhatsApp?</h3>
              <p className="text-sm mb-4 text-primary-foreground">
                For quick questions or to start a conversation directly.
              </p>
              <Button variant="hero" size="lg" onClick={handleWhatsApp} className="bg-[#25D366] hover:bg-[#20BA5C]">
                <MessageCircle className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </Button>
            </div>

            {/* Trust signals */}
            <div className="space-y-3 text-sm text-secondary-foreground/60">
              <p>✓ No minimum orders required</p>
              <p>✓ Flexible partnership models</p>
              <p>✓ Start with a trial approach</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40" />
                  {errors.name && <p className="text-primary text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40" />
                  {errors.email && <p className="text-primary text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company <span className="text-secondary-foreground/50">(if applicable)</span>
                  </label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your business name" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40" />
                </div>
                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-medium mb-2">
                    Enquiry Type
                  </label>
                  <select id="enquiryType" name="enquiryType" value={formData.enquiryType} onChange={e => setFormData(prev => ({
                  ...prev,
                  enquiryType: e.target.value
                }))} className="w-full h-10 px-3 bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground rounded-md">
                    {enquiryTypes.map(type => <option key={type.value} value={type.value} className="bg-secondary text-secondary-foreground">
                        {type.label}
                      </option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your business and what you're looking for..." rows={5} className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40 resize-none" />
                {errors.message && <p className="text-primary text-sm mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};