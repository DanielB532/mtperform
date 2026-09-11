import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Who We Work With", href: "#who-we-work-with" },
  { label: "Designs", href: "#product-categories" },
  { label: "Process", href: "#how-it-works" },
  { label: "Sourcing Model", href: "#partnership" },
  { label: "FAQ", href: "#faq" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-secondary/[98%] backdrop-blur-xl border-b border-grey700/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between h-20">
          {/* Logo — one of the four places gold is allowed to appear */}
          <a href="#" className="flex items-center group">
            <span className="font-semibold text-xl text-grey100 tracking-tight">
              MT <span className="text-gold">SOURCING PARTNERS</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-grey300 hover:text-grey100 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-6">
            <a
              href="#quote"
              className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-grey100 border border-grey700 px-5 py-2.5 hover:bg-grey100 hover:text-ink transition-all duration-300"
            >
              Request a Sourcing Quote
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-grey100 p-1"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-secondary pt-20 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 py-16 px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-grey100 hover:text-[hsl(var(--gold-dim))] transition-colors tracking-tight"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center text-base font-semibold tracking-wide text-grey100 border border-grey700 px-8 py-4 hover:bg-grey100 hover:text-ink transition-all duration-300"
              >
                Request a Sourcing Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
