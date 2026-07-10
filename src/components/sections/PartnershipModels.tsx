import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const categories = [
  {
    id: "monoblock",
    label: "Monoblock",
    description: "Single-piece forged construction. Maximum strength, minimum weight.",
    image: "https://sc04.alicdn.com/kf/H14a190038e114f038aae476fcbd453c4e.jpg",
    span: "col-span-2 row-span-2",
  },
  {
    id: "two-piece",
    label: "Two-Piece",
    description: "Forged centre with spun or forged barrel for custom offsets.",
    image: "https://sc04.alicdn.com/kf/H291477e9aee04040891799bef3e2f3214.png",
    span: "col-span-1 row-span-1",
  },
  {
    id: "three-piece",
    label: "Three-Piece",
    description: "Full customisation: centre, inner & outer barrel independently specified.",
    image: "https://sc04.alicdn.com/kf/H2791bb05795b429a9b6f6d37e7fbaaa35.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "carbon-fibre",
    label: "Wrapped Carbon Fibre",
    description: "Forged aluminium with carbon fibre wrap finish for a striking aesthetic.",
    image: "https://sc04.alicdn.com/kf/Hdee059d0ddce4de2abca923c107c63cep.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "pure-carbon",
    label: "Pure Carbon Fibre",
    description: "The pinnacle of lightweight engineering for performance builds.",
    image: "https://sc04.alicdn.com/kf/Ha1fef0181e7649fb8039a686e135436fY.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gunmetal-machined",
    label: "Gunmetal Machined",
    description: "Dark base with precision-machined face highlights. A bold, premium finish.",
    image: "/images/1776613416609_image.png",
    span: "col-span-1 row-span-1",
  },
];

export const ProductCategories = () => {
  return (
    <section id="product-categories" className="bg-secondary overflow-hidden">
      {/* Catalogue link — at top */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.05] mb-3">
              Our Full Range — 613 Styles.
            </h2>
            <p className="text-white/40 text-base font-light">
              Every build, covered.
            </p>
          </div>
          
            href="/catalogue.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white text-sm font-semibold tracking-wide px-8 py-4 hover:bg-primary/90 transition-colors duration-200 flex-shrink-0 self-start lg:self-auto"
          >
            View Catalogue
            <Eye className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pb-28">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {/* Featured - Monoblock takes 2 cols + 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group overflow-hidden lg:col-span-2 lg:row-span-2 col-span-2"
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] lg:min-h-[520px] relative overflow-hidden">
              <img
                src={categories[0].image}
                alt={categories[0].label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                  {categories[0].label}
                </p>
                <h3 className="text-white text-2xl lg:text-3xl font-semibold tracking-tight mb-2">
                  {categories[0].description}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Remaining 4 categories */}
          {categories.slice(1).map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group overflow-hidden"
            >
              <div className="aspect-square relative overflow-hidden min-h-[200px]">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-primary text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
                    {cat.label}
                  </p>
                  <p className="text-white/70 text-xs leading-relaxed hidden lg:block">
                    {cat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
