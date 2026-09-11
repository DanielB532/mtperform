import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { openWhatsApp, sendEnquiryEmail, type EnquiryFields } from "@/lib/enquiries";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  vehicle: z.string().trim().min(1, "Vehicle is required").max(200),
  currentSize: z.string().trim().max(100).optional(),
  styleRef: z.string().trim().max(300).optional(),
  finish: z.string().trim().max(50).optional(),
  notes: z.string().trim().max(1000).optional(),
});

const personalFinishes = ["Gloss Black", "Brushed Silver", "Polished", "Two-Tone", "Help me choose"];
const personalAddons = ["Custom centre caps", "Locking wheel bolts", "TPMS sensors", "Matching valve caps"];

export const GeneralEnquiries = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    currentSize: "",
    styleRef: "",
    finish: "",
    notes: "",
  });
  const [addons, setAddons] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const toggleAddon = (a: string) =>
    setAddons((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));

  const validate = (): boolean => {
    const result = enquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    return true;
  };

  const collectFields = (): EnquiryFields => ({
    Name: formData.name,
    Email: formData.email,
    Phone: formData.phone,
    Vehicle: formData.vehicle,
    "Current wheel size": formData.currentSize,
    "Style reference": formData.styleRef,
    Finish: formData.finish,
    "Add-ons": addons.join(", "),
    Notes: formData.notes,
  });

  const resetForm = () =>
    setFormData({ name: "", email: "", phone: "", vehicle: "", currentSize: "", styleRef: "", finish: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    openWhatsApp("Personal Set Enquiry", collectFields());
    toast({
      title: "Redirecting to WhatsApp",
      description: "Hit send in WhatsApp to complete your enquiry.",
    });
    resetForm();
  };

  const handleEmail = async () => {
    if (!validate()) return;
    setSending(true);
    const ok = await sendEnquiryEmail("Personal Set Enquiry - MT Sourcing Partners", collectFields());
    setSending(false);
    toast({
      title: ok ? "Enquiry sent" : "Something went wrong",
      description: ok
        ? "Your enquiry has landed in our inbox. We'll get back to you shortly."
        : "The email didn't send. Please try WhatsApp instead.",
    });
    if (ok) resetForm();
  };

  return (
    <section id="enquiries" className="paper bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Personal Enquiries
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.0] mb-6">
              Looking for a personal set?
            </h2>
            <p className="text-foreground/80 font-light leading-relaxed max-w-sm mb-10">
              Submit your vehicle details and requirements. We handle single wheel set enquiries by request, and nothing goes into production until you've approved a 3D rendering of your exact wheel. All personal pricing includes VAT, so the price you see is the price you pay, plus delivery.
            </p>
            <div className="space-y-6 max-w-sm">
              {[
                {
                  step: "01",
                  title: "Show us what you're after",
                  text: "Send a photo of a design you love, a wheel you've spotted on another car, or even an AI-generated concept. We'll confirm whether it can be built.",
                },
                {
                  step: "02",
                  title: "Give us your fitment details",
                  text: "We need the diameter in inches, the rim width (J-value), and the offset (ET), plus whether your brakes are modified or your car's been lowered. No ET to hand? Just describe the stance you want.",
                },
                {
                  step: "03",
                  title: "Approve your 3D rendering",
                  text: "We send back a 3D rendering showing exactly how your wheel will be built, in your spec and finish. Nothing is made until you've seen it and you're happy.",
                },
                {
                  step: "04",
                  title: "Choose your finish and add-ons",
                  text: "Pick your finish, then add extras like custom centre caps, locking bolts, TPMS sensors, or matching valve caps. Everything is optional and priced clearly upfront.",
                },
                {
                  step: "05",
                  title: "Built and delivered",
                  text: "Allow up to 6 weeks for production and delivery. We'll keep you updated throughout, and tell you early if anything looks like taking longer. Half the payment starts production and the rest is due before dispatch.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-gold font-figure text-xs font-semibold tracking-[0.2em] pt-1 flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-foreground font-semibold text-sm tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/catalogue.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-muted-foreground text-sm font-medium hover:text-[hsl(var(--gold-dim))] hover:underline"
            >
              Browse the full catalogue for design ideas &rarr;
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-foreground/70 text-sm font-light leading-relaxed mb-8 border-l-2 border-border pl-4">
              Not sure about sizing or specs? Don't worry. Just pick a style you like and send your enquiry, and we'll come back to you to work out the exact fitment together.
            </p>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground font-semibold mb-3">
                    Name *
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-background border border-border text-foreground placeholder:text-foreground/40 px-3 py-2.5 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300"
                  />
                  {errors.name && <p className="text-foreground font-medium text-xs mt-2">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground font-semibold mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-background border border-border text-foreground placeholder:text-foreground/40 px-3 py-2.5 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300"
                  />
                  {errors.email && <p className="text-foreground font-medium text-xs mt-2">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground font-semibold mb-3">
                  Vehicle (Year / Make / Model) *
                </label>
                <input
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="e.g. 2022 BMW M3"
                  className="w-full bg-background border border-border text-foreground placeholder:text-foreground/40 px-3 py-2.5 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300"
                />
                {errors.vehicle && <p className="text-foreground font-medium text-xs mt-2">{errors.vehicle}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground font-semibold mb-3">
                    Current Wheel Size <span className="normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    name="currentSize"
                    value={formData.currentSize}
                    onChange={handleChange}
                    placeholder="e.g. 19x8.5, or leave blank"
                    className="w-full bg-background border border-border text-foreground placeholder:text-foreground/40 px-3 py-2.5 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground font-semibold mb-3">
                    Phone <span className="normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 000000"
                    className="w-full bg-background border border-border text-foreground placeholder:text-foreground/40 px-3 py-2.5 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground font-semibold mb-3">
                    Style You Like <span className="normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    name="styleRef"
                    value={formData.styleRef}
                    onChange={handleChange}
                    placeholder="Catalogue code (e.g. A-042) or describe a design"
                    className="w-full bg-background border border-border text-foreground placeholder:text-foreground/40 px-3 py-2.5 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground font-semibold mb-3">
                    Finish <span className="normal-case font-normal">(optional)</span>
                  </label>
                  <select
                    name="finish"
                    value={formData.finish}
                    onChange={handleChange}
                    className="w-full bg-background border border-border text-foreground px-3 py-2.5 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300"
                  >
                    <option value="">Select a finish</option>
                    {personalFinishes.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground font-semibold mb-3">
                  Add-ons <span className="normal-case font-normal">(optional)</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {personalAddons.map((a) => (
                    <label key={a} className="flex items-center gap-3 text-sm text-foreground/70 cursor-pointer">
                      <input type="checkbox" checked={addons.includes(a)} onChange={() => toggleAddon(a)} className="accent-[#0E0E0E]" />
                      {a}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground font-semibold mb-3">
                  Notes <span className="normal-case font-normal">(optional)</span>
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any additional details..."
                  rows={3}
                  className="w-full bg-background border border-border text-foreground placeholder:text-foreground/30 px-3 py-2.5 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-foreground text-background text-sm font-semibold tracking-wide px-8 py-4 hover:bg-foreground/90 transition-colors duration-200"
              >
                Send via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleEmail}
                disabled={sending}
                className="inline-flex items-center justify-center gap-3 text-foreground text-sm font-semibold tracking-wide px-8 py-4 border border-foreground/30 hover:bg-foreground/5 transition-colors duration-200 disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send via Email"}
                <Mail className="w-4 h-4" />
              </button>
              </div>
              <p className="text-foreground/40 text-xs font-light">
                WhatsApp opens a prefilled chat for you to send. Email goes straight to our inbox.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
