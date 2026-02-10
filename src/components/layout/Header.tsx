import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const navLinks = [{
  label: "Built for Trade",
  href: "#who-we-work-with"
}, {
  label: "Use Cases",
  href: "#use-cases"
}, {
  label: "Process",
  href: "#how-it-works"
}, {
  label: "Quality",
  href: "#the-wheels"
}, {
  label: "Supply Options",
  href: "#partnership"
}, {
  label: "FAQ",
  href: "#faq"
}, {
  label: "Personal Set",
  href: "#enquiries"
}];
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <>
      <motion.header initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.6
    }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-secondary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
        <div className="container-narrow flex items-center justify-between px-6 lg:px-12 h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="font-display text-2xl text-secondary-foreground tracking-wider font-semibold">
              MT <span className="text-primary">PERFORMANCE</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center justify-evenly flex-1 mx-16">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-xs transition-colors uppercase tracking-wider font-semibold text-white hover:text-primary px-2">
                {link.label}
              </a>)}
          </nav>

          {/* CTA */}
          <div className="hidden xl:block">
            <Button variant="hero" size="default" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="xl:hidden text-secondary-foreground p-2" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.2
      }} className="fixed inset-0 z-40 bg-secondary pt-20 xl:hidden">
            <nav className="flex flex-col items-center gap-6 py-12">
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-display text-xl text-secondary-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>)}
              <Button variant="hero" size="lg" asChild className="mt-4">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </a>
              </Button>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </>;
};