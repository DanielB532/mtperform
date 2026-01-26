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
  businessName: z.string().trim().min(1, "Business name is required").max(100),
  businessType: z.string().trim().min(1, "Please select a business type"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(50).optional(),
  location: z.string().trim().max(100).optional(),
  monthlyVolume: z.string().trim().max(50).optional(),
  preferredContact: z.string().trim().max(20),
  message: z.string().trim().min(1, "Message is required").max(2000)
});

const businessTypes = [
  { value: "", label: "Select business type" },
  { value: "tyre-shop", label: "Tyre Shop" },
  { value: "refurb-centre", label: "Refurb Centre" },
  { value: "garage", label: "Garage" },
  { value: "dealer", label: "Dealer" },
  { value: "other", label: "Other" }
];

const volumeOptions = [
  { value: "", label: "Select monthly volume" },
  { value: "1-5", label: "1-5 wheels" },
  { value: "6-20", label: "6-20 wheels" },
  { value: "21-50", label: "21-50 wheels" },
  { value: "50+", label: "50+ wheels" }
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "",
    email: "",
    phone: "",
    location: "",
    monthlyVolume: "",
    preferredContact: "email",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
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
      businessName: "",
      businessType: "",
      email: "",
      phone: "",
      location: "",
      monthlyVolume: "",
      preferredContact: "email",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi, I'm interested in discussing a B2B wheel supply partnership."
    );
    window.open(`https://wa.me/447000000000?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Get Started
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 font-semibold">
              Let's Discuss a Partnership
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-secondary-foreground/80">
              Whether you're a tyre centre, workshop, or dealer, we'd like to hear about your
              business and how we can work together.
            </p>

            {/* What happens next */}
            <div className="mb-8">
              <h3 className="font-display text-xl mb-4">What happens next:</h3>
              <ul className="space-y-2 text-secondary-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">●</span>
                  We review your enquiry and typical fitment needs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">●</span>
                  Schedule a quick call to discuss partnership options
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">●</span>
                  Set up your account and start ordering
                </li>
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-secondary-foreground/5 p-6">
              <h3 className="font-display text-xl mb-2">Prefer WhatsApp?</h3>
              <p className="text-sm mb-4 text-secondary-foreground/70">
                For quick questions or to start a conversation directly.
              </p>
              <Button
                variant="hero"
                size="lg"
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20BA5C]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                  />
                  {errors.name && <p className="text-primary text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                    Business Name *
                  </label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your business name"
                    className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                  />
                  {errors.businessName && (
                    <p className="text-primary text-sm mt-1">{errors.businessName}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground rounded-md"
                  >
                    {businessTypes.map((type) => (
                      <option
                        key={type.value}
                        value={type.value}
                        className="bg-secondary text-secondary-foreground"
                      >
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p className="text-primary text-sm mt-1">{errors.businessType}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@business.com"
                    className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                  />
                  {errors.email && <p className="text-primary text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone <span className="text-secondary-foreground/50">(optional)</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-2">
                    Location <span className="text-secondary-foreground/50">(optional)</span>
                  </label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City / Region"
                    className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="monthlyVolume" className="block text-sm font-medium mb-2">
                    Monthly Volume <span className="text-secondary-foreground/50">(optional)</span>
                  </label>
                  <select
                    id="monthlyVolume"
                    name="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={handleChange}
                    className="w-full h-10 px-3 bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground rounded-md"
                  >
                    {volumeOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-secondary text-secondary-foreground"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                  <div className="flex gap-4 h-10 items-center">
                    {["email", "phone", "whatsapp"].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleChange}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="capitalize text-sm">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business and what you're looking for..."
                  rows={4}
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40 resize-none"
                />
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
    </section>
  );
};
