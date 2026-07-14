import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const wheelOptions = [
  "Monoblock",
  "Two-Piece",
  "Three-Piece",
  "Wrapped Carbon Fibre",
  "Pure Carbon Fibre",
  "Off-Road",
  "Not sure yet",
];

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    wheelInterest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*New Quote Request*\n\nName: ${formData.name}\nBusiness: ${formData.businessName}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nWheel Interest: ${formData.wheelInterest}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/447508855696?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="quote" className="bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — copy */}
          <div className="lg:sticky lg:top-28">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.0] mb-8">
              Request a Quote
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-sm">
              Tell us about your business and what you need. There's a pricing option to suit how you buy, and we'll come back to you directly with options and trade pricing. Trade prices are quoted excluding VAT, which is added separately and reclaimable for VAT-registered businesses.
            </p>

            <div className="space-y-6 text-sm">
              {[
                "No minimum order requirements",
                "Vehicle-specific fitments confirmed",
                "Trade pricing, no public-facing rates",
                "UK-based team, real communication",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-white/50 font-light">{point}</span>
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
            {submitted ? (
              <div className="py-20 text-center">
                <div className="w-12 h-12 bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-white text-2xl font-semibold tracking-tight mb-3">
                  Redirecting to WhatsApp
                </h3>
                <p className="text-white/40 text-base font-light">
                  We'll get back to you shortly with tailored options.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Name + Business */}
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="group">
                    <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-white/65 mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/45 pb-3 text-base focus:outline-none focus:border-white/70 transition-colors duration-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-white/65 mb-3">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Your business"
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/45 pb-3 text-base focus:outline-none focus:border-white/70 transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-white/65 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@business.com"
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/45 pb-3 text-base focus:outline-none focus:border-white/70 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-white/65 mb-3">
                      Phone <span className="normal-case font-normal text-white/20">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7700 000000"
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/45 pb-3 text-base focus:outline-none focus:border-white/70 transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Wheel Interest */}
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-white/65 mb-3">
                    Wheel Interest *
                  </label>
                  <div className="relative">
                    <select
                      name="wheelInterest"
                      required
                      value={formData.wheelInterest}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/30 text-white pb-3 text-base focus:outline-none focus:border-white/50 transition-colors duration-300 appearance-none cursor-pointer"
                      style={{ color: formData.wheelInterest ? "white" : "rgba(255,255,255,0.25)" }}
                    >
                      <option value="" disabled style={{ background: "#1a1a1a" }}>
                        Select a category
                      </option>
                      {wheelOptions.map((opt) => (
                        <option key={opt} value={opt} style={{ background: "#1a1a1a", color: "white" }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-0 bottom-4">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-white/65 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business, vehicle types, typical volumes..."
                    rows={4}
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/45 pb-3 text-base focus:outline-none focus:border-white/70 transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-primary text-white text-sm font-semibold tracking-wide px-8 py-4 hover:bg-primary/90 transition-all duration-200"
                  >
                    Send via WhatsApp
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <p className="text-white/25 text-xs mt-4 font-light">
                    You'll be redirected to WhatsApp to complete your enquiry.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
