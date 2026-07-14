import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Who We Work With", href: "#who-we-work-with" },
  { label: "Wheels", href: "#product-categories" },
  { label: "Process", href: "#how-it-works" },
  { label: "Supply Options", href: "#partnership" },
  { label: "FAQ", href: "#faq" },
  { label: "Request a Quote", href: "#quote" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-24">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="font-semibold text-xl text-white tracking-tight">
                MT <span className="text-primary">PERFORMANCE</span>
              </span>
            </a>
            <p className="text-white/35 text-sm font-light leading-relaxed max-w-xs">
              UK-based premium forged wheel supply partner for automotive businesses. Vehicle-specific fitments, flexible partnerships.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/25 text-[11px] font-semibold tracking-[0.15em] uppercase mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-white transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/25 text-[11px] font-semibold tracking-[0.15em] uppercase mb-6">
              Get in Touch
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-white/25 text-xs mb-2">Trade partnerships</p>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-1.5 text-white text-sm hover:text-primary transition-colors duration-200"
                >
                  Request a Quote
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div>
                <p className="text-white/25 text-xs mb-2">WhatsApp direct</p>
                <a
                  href="https://wa.me/qr/TRWCW5YU5KKIP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/40 text-sm hover:text-white transition-colors duration-200"
                >
                  Message us on WhatsApp
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div>
                <p className="text-white/25 text-xs mb-2">Personal set enquiries</p>
                <a
                  href="#enquiries"
                  className="text-white/40 text-sm hover:text-white transition-colors duration-200"
                >
                  Buy a personal set →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-light">
            © {new Date().getFullYear()} MT Performance. All rights reserved. United Kingdom.
          </p>
          <p className="text-white/20 text-xs font-light">
            B2B wheel supply · Trade-first · One-off enquiries welcome
          </p>
        </div>
      </div>
    </footer>
  );
};
