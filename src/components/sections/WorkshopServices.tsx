import { WHATSAPP_NUMBER } from "@/lib/enquiries";

// Services arranged through our London workshop partner.
// Deliberately kept below the wheel content: wheels stay the main offer.
// The partner is not named here so enquiries come to us first.

const services = [
  {
    title: "Wheel refurbishment & replacement wheels",
    description:
      "Kerbed, cracked or buckled wheels repaired, straightened, welded, diamond cut or powder coated. If a wheel is beyond saving, genuine refurbished replacements are available, single wheels included.",
  },
  {
    title: "Wraps & window tint",
    description:
      "Full colour change wraps, de-chrome and trim wraps, and window tinting.",
  },
  {
    title: "Paint protection film & ceramic coating",
    description:
      "PPF and ceramic coating to keep paintwork and wheels looking new, ideal on a new or freshly refinished car.",
  },
  {
    title: "Smart repairs & detailing",
    description:
      "Scuffs, chips and small paint repairs, plus interior deep cleans.",
  },
];

const enquiryUrl = (service: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `*Workshop enquiry: ${service}*\n\nCar (make, model, year):\nWhat I need:\nMy area:`
  )}`;

export const WorkshopServices = () => {
  return (
    <section id="workshop-services" className="bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-24">
        {/* Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Workshop Services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight mb-4">
            Beyond wheels, through our London workshop partner.
          </h2>
          <p className="text-muted-foreground text-base font-normal leading-relaxed">
            We also arrange work through an established London workshop with over 20 years in wheels, and more than 3,000 wheels sold online at 100% positive feedback. Send us your car and what you need, and we'll get it booked in.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-0 border border-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 lg:p-10 flex flex-col gap-6 border-b border-border md:[&:nth-child(odd)]:border-r md:[&:nth-child(n+3)]:border-b-0 [&:last-child]:border-b-0"
            >
              <div>
                <h3 className="text-foreground font-semibold text-xl tracking-tight mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                  {service.description}
                </p>
              </div>
              <a
                href={enquiryUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-start inline-flex items-center gap-3 text-grey100 text-sm font-semibold tracking-wide px-6 py-3 border border-grey700 hover:bg-white/5 transition-colors duration-200"
              >
                Ask on WhatsApp
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
