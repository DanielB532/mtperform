import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { openWhatsApp, sendEnquiryEmail, type EnquiryFields } from "@/lib/enquiries";

const inputCls =
  "w-full bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/60 pb-3 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300";
const labelCls =
  "block text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    vehicle: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "whatsapp" | "emailed" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const collectFields = (): EnquiryFields => ({
    Name: formData.name,
    Business: formData.businessName,
    Email: formData.email,
    Vehicle: formData.vehicle,
    Message: formData.message,
  });

  const requiredOk = () =>
    formData.name && formData.businessName && formData.email;

  const submitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requiredOk()) return;
    openWhatsApp("New Trade Sourcing Quote Request", collectFields());
    setStatus("whatsapp");
  };

  const submitEmail = async () => {
    if (!requiredOk()) return;
    setStatus("sending");
    const ok = await sendEnquiryEmail("New Trade Sourcing Quote Request - MT Sourcing Partners", collectFields());
    setStatus(ok ? "emailed" : "error");
  };

  return (
    <section id="quote" className="paper bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: copy */}
          <div className="lg:sticky lg:top-28">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.0] mb-8">
              Request a Sourcing Quote
            </h2>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed mb-8 max-w-sm">
              Tell us who you are and what the job is. We'll come back to you directly with options and our sourcing fee, agreed upfront. Fees are quoted excluding VAT, which is reclaimable for VAT-registered businesses.
            </p>
            <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-12 max-w-sm border-l-2 border-border pl-4">
              Don't worry about specs at this stage. The vehicle and a rough idea of what you're after is plenty. We'll work out the rest together.
            </p>

            <div className="space-y-6 text-sm">
              {[
                "No margin on the goods, ever",
                "Vehicle-specific fitments confirmed in writing",
                "Fee agreed upfront, no public-facing rates",
                "UK-based team, real communication",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === "whatsapp" || status === "emailed" ? (
              <div className="py-20 text-center">
                <div className="w-12 h-12 bg-muted flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-foreground text-2xl font-bold tracking-tight mb-3">
                  {status === "whatsapp" ? "Redirecting to WhatsApp" : "Enquiry sent"}
                </h3>
                <p className="text-muted-foreground text-base font-medium">
                  {status === "whatsapp"
                    ? "Hit send in WhatsApp to complete your enquiry. We'll get back to you shortly."
                    : "Your enquiry has landed in our inbox. We'll get back to you shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={submitWhatsApp} className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className={labelCls}>Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Business Name *</label>
                    <input type="text" name="businessName" required value={formData.businessName} onChange={handleChange} placeholder="Your business" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@business.com" className={inputCls} />
                </div>

                <div>
                  <label className={labelCls}>Vehicle (Year / Make / Model)</label>
                  <input name="vehicle" value={formData.vehicle} onChange={handleChange} placeholder="e.g. 2022 BMW M3" className={inputCls} />
                </div>

                <div>
                  <label className={labelCls}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us what you're after: the design, the finish, the deadline, anything useful..." rows={4} className={`${inputCls} resize-none`} />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button type="submit" className="group inline-flex items-center justify-center gap-3 bg-foreground text-background text-sm font-semibold tracking-wide px-8 py-4 hover:bg-[hsl(var(--gold-dim))] hover:text-white transition-all duration-200">
                    Send via WhatsApp
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button type="button" onClick={submitEmail} disabled={status === "sending"} className="inline-flex items-center justify-center gap-3 text-foreground text-sm font-semibold tracking-wide px-8 py-4 border border-border hover:bg-muted/50 transition-colors duration-200 disabled:opacity-50">
                    {status === "sending" ? "Sending..." : "Send via Email"}
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-foreground text-sm">Something went wrong sending the email. Please try WhatsApp instead.</p>
                )}
                <p className="text-muted-foreground text-xs font-medium">
                  WhatsApp opens a prefilled chat for you to send. Email goes straight to our inbox.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
