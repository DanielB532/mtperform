import { motion } from "framer-motion";

const footerLinks = [
  { label: "Who We Work With", href: "#who-we-work-with" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Wheels", href: "#the-wheels" },
  { label: "Partnership", href: "#partnership" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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
              FORGE<span className="text-primary">SUPPLY</span>
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
            <p className="text-sm text-background/60 mb-2">
              Ready to discuss a partnership?
            </p>
            <a
              href="#contact"
              className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
            >
              Contact Us →
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} ForgeSupply. All rights reserved.
          </p>
          <p className="text-sm text-background/40">
            B2B Wheel Supply Partner • United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
};
