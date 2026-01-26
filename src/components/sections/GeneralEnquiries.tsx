import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  vehicle: z.string().trim().min(1, "Vehicle is required").max(200),
  currentSize: z.string().trim().max(100).optional(),
  desiredSpec: z.string().trim().max(200).optional(),
  notes: z.string().trim().max(1000).optional()
});

export const GeneralEnquiries = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vehicle: "",
    currentSize: "",
    desiredSpec: "",
    notes: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(formData);
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
      title: "Enquiry received",
      description: "Thank you for your request. We'll be in touch shortly."
    });
    setFormData({
      name: "",
      email: "",
      vehicle: "",
      currentSize: "",
      desiredSpec: "",
      notes: ""
    });
  };

  return (
    <section id="enquiries" className="section-padding bg-background">
      <div className="container-narrow max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              One-Off Enquiries
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-4 font-semibold">
              Looking for a One-Off Set of Wheels?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Submit your request, confirm fitment, receive options. We handle single wheel set enquiries by request.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-muted/50 border border-border p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-background border-border"
                />
                {errors.name && <p className="text-primary text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="bg-background border-border"
                />
                {errors.email && <p className="text-primary text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="vehicle" className="block text-sm font-medium mb-2 text-foreground">
                Vehicle (Year / Make / Model) *
              </label>
              <Input
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                placeholder="e.g. 2022 BMW M3"
                className="bg-background border-border"
              />
              {errors.vehicle && <p className="text-primary text-sm mt-1">{errors.vehicle}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="currentSize" className="block text-sm font-medium mb-2 text-foreground">
                  Current Wheel Size <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="currentSize"
                  name="currentSize"
                  value={formData.currentSize}
                  onChange={handleChange}
                  placeholder="e.g. 19x8.5"
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label htmlFor="desiredSpec" className="block text-sm font-medium mb-2 text-foreground">
                  Desired Size/Finish <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="desiredSpec"
                  name="desiredSpec"
                  value={formData.desiredSpec}
                  onChange={handleChange}
                  placeholder="e.g. 20 inch gloss black"
                  className="bg-background border-border"
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2 text-foreground">
                Notes <span className="text-muted-foreground">(optional)</span>
              </label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any additional details about your requirements..."
                rows={4}
                className="bg-background border-border resize-none"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Submit Enquiry
              <Send className="w-5 h-5 ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
