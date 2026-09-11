import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { openWhatsApp, sendEnquiryEmail, type EnquiryFields } from "@/lib/enquiries";

const wheelOptions = [
  "Monoblock",
  "Two-Piece",
  "Three-Piece",
  "Wrapped Carbon Fibre",
  "Pure Carbon Fibre",
  "Off-Road",
  "Not sure yet",
];

const finishOptions = ["Gloss Black", "Brushed Silver", "Polished", "Two-Tone", "Other / Discuss"];
const addonOptions = ["Custom centre caps", "Locking wheel bolts", "TPMS sensors", "Matching valve caps"];

const inputCls =
  "w-full bg-transparent border-b border-grey700 text-grey100 placeholder:text-grey500 pb-3 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300";
const labelCls =
  "block text-[11px] font-semibold tracking-[0.15em] uppercase text-grey300 mb-3";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    intent: "specs",
    vehicle: "",
    diameter: "",
    jValue: "",
    et: "",
    brakesModified: "No",
    lowered: "No",
    wheelInterest: "",
    styleRef: "",
    finish: "",
    quantity: "",
    message: "",
  });
  const [addons, setAddons] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "whatsapp" | "emailed" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleAddon = (a: string) =>
    setAddons((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));

  const collectFields = (): EnquiryFields => {
    const base: EnquiryFields = {
      Name: formData.name,
      Business: formData.businessName,
      Email: formData.email,
      Phone: formData.phone,
      "Enquiry type": formData.intent === "specs" ? "Full specs provided" : "Wants to discuss options",
      Vehicle: formData.vehicle,
    };
    if (formData.intent === "specs") {
      base["Diameter (inches)"] = formData.diameter;
      base["Rim width (J-value)"] = formData.jValue;
      base["Offset (ET)"] = formData.et;
      base["Brakes modified"] = formData.brakesModified;
      base["Vehicle lowered"] = formData.lowered;
    }
    base["Wheel category"] = formData.wheelInterest;
    base["Style reference"] = formData.styleRef;
    base["Finish"] = formData.finish;
    base["Add-ons"] = addons.join(", ");
    base["Quantity (sets)"] = formData.quantity;
    base["Message"] = formData.message;
    return base;
  };

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
    <section id="quote" className="bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — copy */}
          <div className="lg:sticky lg:top-28">
            <p className="text-grey500 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-grey100 tracking-tight leading-[1.0] mb-8">
              Request a Sourcing Quote
            </h2>
            <p className="text-grey300 text-lg font-light leading-relaxed mb-8 max-w-sm">
              Tell us about your business and what you need. There's a sourcing option to suit how you work, and we'll come back to you directly with options and a flat sourcing fee. Sourcing fees are quoted excluding VAT and delivery. VAT is added separately and reclaimable for VAT-registered businesses.
            </p>
            <p className="text-grey500 text-sm font-light leading-relaxed mb-12 max-w-sm border-l-2 border-grey700 pl-4">
              Got everything to hand? Fill in the fitment details for a faster quote. Still weighing options for a customer? Just tell us what you're after and we'll talk it through.
            </p>

            <div className="space-y-6 text-sm">
              {[
                "No minimum specification requirements",
                "Vehicle-specific fitments confirmed",
                "Flat sourcing fee, no public-facing rates",
                "UK-based team, real communication",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-grey500 rounded-full flex-shrink-0" />
                  <span className="text-grey300 font-light">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === "whatsapp" || status === "emailed" ? (
              <div className="py-20 text-center">
                <div className="w-12 h-12 bg-grey700/40 flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-5 h-5 text-grey100" />
                </div>
                <h3 className="text-grey100 text-2xl font-semibold tracking-tight mb-3">
                  {status === "whatsapp" ? "Redirecting to WhatsApp" : "Enquiry sent"}
                </h3>
                <p className="text-grey500 text-base font-light">
                  {status === "whatsapp"
                    ? "Hit send in WhatsApp to complete your enquiry. We'll get back to you shortly."
                    : "Your enquiry has landed in our inbox. We'll get back to you shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={submitWhatsApp} className="space-y-10">
                {/* Name + Business */}
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

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@business.com" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Phone <span className="normal-case font-normal text-grey700">(optional)</span>
                    </label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 7700 000000" className={inputCls} />
                  </div>
                </div>

                {/* Intent */}
                <div>
                  <label className={labelCls}>Where are you at? *</label>
                  <div className="flex flex-col sm:flex-row gap-4 pt-1">
                    {[
                      { v: "specs", t: "I have the full specs ready" },
                      { v: "discuss", t: "I'd like to discuss options first" },
                    ].map((o) => (
                      <label key={o.v} className={`flex items-center gap-3 cursor-pointer border px-4 py-3 text-sm transition-colors ${formData.intent === o.v ? "border-grey100 text-grey100" : "border-grey700 text-grey500 hover:border-grey500"}`}>
                        <input type="radio" name="intent" value={o.v} checked={formData.intent === o.v} onChange={handleChange} className="accent-[#E4E4E2]" />
                        {o.t}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Vehicle */}
                <div>
                  <label className={labelCls}>Vehicle (Year / Make / Model)</label>
                  <input name="vehicle" value={formData.vehicle} onChange={handleChange} placeholder="e.g. 2022 BMW M3" className={inputCls} />
                </div>

                {/* Fitment block — only when specs ready */}
                {formData.intent === "specs" && (
                  <>
                    <div className="grid sm:grid-cols-3 gap-10">
                      <div>
                        <label className={labelCls}>Diameter (inches)</label>
                        <input name="diameter" value={formData.diameter} onChange={handleChange} placeholder="e.g. 19" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Rim Width (J)</label>
                        <input name="jValue" value={formData.jValue} onChange={handleChange} placeholder="e.g. 8.5J" className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Offset (ET)</label>
                        <input name="et" value={formData.et} onChange={handleChange} placeholder="e.g. ET35" className={inputCls} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-10">
                      <div>
                        <label className={labelCls}>Brakes modified?</label>
                        <div className="flex gap-4 pt-1">
                          {["No", "Yes"].map((v) => (
                            <label key={v} className="flex items-center gap-2 text-sm text-grey300 cursor-pointer">
                              <input type="radio" name="brakesModified" value={v} checked={formData.brakesModified === v} onChange={handleChange} className="accent-[#E4E4E2]" />
                              {v}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Vehicle lowered?</label>
                        <div className="flex gap-4 pt-1">
                          {["No", "Yes"].map((v) => (
                            <label key={v} className="flex items-center gap-2 text-sm text-grey300 cursor-pointer">
                              <input type="radio" name="lowered" value={v} checked={formData.lowered === v} onChange={handleChange} className="accent-[#E4E4E2]" />
                              {v}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Category + Finish */}
                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className={labelCls}>Wheel Category</label>
                    <div className="relative">
                      <select name="wheelInterest" value={formData.wheelInterest} onChange={handleChange} className="w-full bg-transparent border-b border-grey700 text-grey100 pb-3 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300 appearance-none cursor-pointer" style={{ color: formData.wheelInterest ? "#E4E4E2" : "#6E6E6E" }}>
                        <option value="" disabled style={{ background: "#1A1A1A" }}>Select a category</option>
                        {wheelOptions.map((opt) => (
                          <option key={opt} value={opt} style={{ background: "#1A1A1A", color: "#E4E4E2" }}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Finish</label>
                    <div className="relative">
                      <select name="finish" value={formData.finish} onChange={handleChange} className="w-full bg-transparent border-b border-grey700 text-grey100 pb-3 text-base focus:outline-none focus:border-[hsl(var(--gold-dim))] transition-colors duration-300 appearance-none cursor-pointer" style={{ color: formData.finish ? "#E4E4E2" : "#6E6E6E" }}>
                        <option value="" disabled style={{ background: "#1A1A1A" }}>Select a finish</option>
                        {finishOptions.map((opt) => (
                          <option key={opt} value={opt} style={{ background: "#1A1A1A", color: "#E4E4E2" }}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Style ref + Quantity */}
                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className={labelCls}>Style Reference</label>
                    <input name="styleRef" value={formData.styleRef} onChange={handleChange} placeholder="Catalogue code (e.g. A-042) or describe it" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Quantity (sets)</label>
                    <input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g. 1" className={inputCls} />
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <label className={labelCls}>Add-ons <span className="normal-case font-normal text-grey700">(optional)</span></label>
                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    {addonOptions.map((a) => (
                      <label key={a} className="flex items-center gap-3 text-sm text-grey300 cursor-pointer">
                        <input type="checkbox" checked={addons.includes(a)} onChange={() => toggleAddon(a)} className="accent-[#E4E4E2]" />
                        {a}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelCls}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your business, vehicle types, typical volumes..." rows={4} className={`${inputCls} resize-none`} />
                </div>

                {/* Submit */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button type="submit" className="group inline-flex items-center justify-center gap-3 bg-grey100 text-ink text-sm font-semibold tracking-wide px-8 py-4 hover:bg-[hsl(var(--gold-dim))] hover:text-grey100 transition-all duration-200">
                    Send via WhatsApp
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button type="button" onClick={submitEmail} disabled={status === "sending"} className="inline-flex items-center justify-center gap-3 text-grey100 text-sm font-semibold tracking-wide px-8 py-4 border border-grey700 hover:bg-white/10 transition-colors duration-200 disabled:opacity-50">
                    {status === "sending" ? "Sending..." : "Send via Email"}
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-grey100 text-sm">Something went wrong sending the email. Please try WhatsApp instead.</p>
                )}
                <p className="text-grey500 text-xs font-light">
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
