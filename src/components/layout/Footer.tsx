import { motion } from "framer-motion";

const footerLinks = [
  { label: "Built for Trade", href: "#who-we-work-with" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Process", href: "#how-it-works" },
  { label: "Quality", href: "#the-wheels" },
  { label: "Supply Options", href: "#partnership" },
  { label: "FAQ", href: "#faq" },
  { label: "One-Off Set", href: "#enquiries" },
  { label: "Partnership", href: "#contact" }
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-narrow section-padding py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-2xl text-background tracking-wider">
              MT <span className="text-primary">PERFORMANCE</span>
            </span>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Premium forged wheel supply partner for automotive businesses across the UK.
              Vehicle-specific fitments. Flexible partnership models.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg text-background mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-background/60 mb-1">For businesses:</p>
                <a
                  href="#contact"
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  Explore a B2B Partnership →
                </a>
              </div>
              <div>
                <p className="text-sm text-background/60 mb-1">For yourself:</p>
                <a
                  href="#enquiries"
                  className="text-background/80 hover:text-background text-sm transition-colors"
                >
                  One-Off Wheel Enquiry →
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Micro-copy */}
        <div className="mt-12 text-center">
          <p className="text-sm text-background/50 italic">
            B2B wheel supply platform | One-off wheel enquiries handled on request
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} MT Performance. All rights reserved.
          </p>
          <p className="text-sm text-background/40">United Kingdom</p>
        </div>
      </div>
    </footer>
  );
};
