import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Who We Work With", href: "#who-we-work-with" },
  { label: "Designs", href: "#product-categories" },
  { label: "Process", href: "#how-it-works" },
  { label: "Sourcing Model", href: "#partnership" },
  { label: "FAQ", href: "#faq" },
  { label: "Request a Sourcing Quote", href: "#quote" },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-grey700">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-24">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="font-semibold text-xl text-grey100 tracking-tight">
                MT <span className="text-gold">SOURCING PARTNERS</span>
              </span>
            </a>
            <p className="text-grey500 text-sm font-light leading-relaxed max-w-xs">
              A sourcing partner for the automotive trade, currently specialising in forged wheels. Every specification is confirmed before production. We never take title to the goods.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-grey500 text-[11px] font-semibold tracking-[0.15em] uppercase mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-grey300 text-sm hover:text-grey100 transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-grey500 text-[11px] font-semibold tracking-[0.15em] uppercase mb-6">
              Get in Touch
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-grey500 text-xs mb-2">Workshop sourcing enquiries</p>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-1.5 text-grey100 text-sm hover:text-[hsl(var(--gold-dim))] transition-colors duration-200"
                >
                  Request a Sourcing Quote
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div>
                <p className="text-grey500 text-xs mb-2">WhatsApp direct</p>
                <a
                  href="https://wa.me/qr/TRWCW5YU5KKIP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-grey300 text-sm hover:text-grey100 transition-colors duration-200"
                >
                  Message us on WhatsApp
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-grey700/60 flex flex-col gap-4">
          <p className="text-grey500 text-xs font-medium tracking-wide">
            Sourcing agent, not a manufacturer or importer.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-grey500/70 text-xs font-light">
              © {new Date().getFullYear()} MT Sourcing Partners. All rights reserved. United Kingdom.
            </p>
            <p className="text-grey500/70 text-xs font-light">
              Wheel sourcing &amp; specification · Trade only
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
