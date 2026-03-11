import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  vehicle: z.string().trim().min(1, "Vehicle is required").max(200),
  currentSize: z.string().trim().max(100).optional(),
  desiredSpec: z.string().trim().max(200).optional(),
  notes: z.string().trim().max(1000).optional(),
});

export const GeneralEnquiries = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vehicle: "",
    currentSize: "",
    desiredSpec: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    const text = encodeURIComponent(
      `Hi, I'm looking for a personal set of wheels.\n\nName: ${formData.name}\nEmail: ${formData.email}\nVehicle: ${formData.vehicle}\nCurrent Size: ${formData.currentSize || "N/A"}\nDesired Spec: ${formData.desiredSpec || "N/A"}\nNotes: ${formData.notes || "N/A"}`
    );
    window.open(`https://wa.me/447508855696?text=${text}`, "_blank");
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to send your enquiry.",
    });
    setFormData({ name: "", email: "", vehicle: "", currentSize: "", desiredSpec: "", notes: "" });
  };

  return (
    <section id="enquiries" className="bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Personal Enquiries
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.0] mb-6">
              Looking for a personal set?
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
              Submit your vehicle details and requirements. We handle single wheel set enquiries by request.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Name *
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/40 pb-3 text-base focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                  />
                  {errors.name && <p className="text-primary text-xs mt-2">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/40 pb-3 text-base focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                  />
                  {errors.email && <p className="text-primary text-xs mt-2">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Vehicle (Year / Make / Model) *
                </label>
                <input
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="e.g. 2022 BMW M3"
                  className="w-full bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/40 pb-3 text-base focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                />
                {errors.vehicle && <p className="text-primary text-xs mt-2">{errors.vehicle}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Current Wheel Size <span className="normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    name="currentSize"
                    value={formData.currentSize}
                    onChange={handleChange}
                    placeholder="e.g. 19x8.5"
                    className="w-full bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/40 pb-3 text-base focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    Desired Size/Finish <span className="normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    name="desiredSpec"
                    value={formData.desiredSpec}
                    onChange={handleChange}
                    placeholder="e.g. 20 inch gloss black"
                    className="w-full bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/40 pb-3 text-base focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Notes <span className="normal-case font-normal">(optional)</span>
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any additional details..."
                  rows={3}
                  className="w-full bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/40 pb-3 text-base focus:outline-none focus:border-foreground/40 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-foreground text-background text-sm font-semibold tracking-wide px-8 py-4 hover:bg-foreground/90 transition-colors duration-200"
              >
                Submit Enquiry
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
