import { motion } from "framer-motion";
import { Check } from "lucide-react";
import qualityWheels from "@/assets/quality-wheels.jpg";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const qualityPoints = [
  {
    label: "Fitment",
    text: "Vehicle-specific specs for accurate installation every time.",
  },
  {
    label: "Finish",
    text: "Premium quality that holds up in real use, not just under showroom lights.",
  },
  {
    label: "Consistency",
    text: "Workshop-ready delivery, consistent comms, reliable lead times.",
  },
];

const features = [
  "Premium forged monoblock construction",
  "Forged 6061-T6 aluminium alloy",
  '15" to 26" rim sizes available',
  "Vehicle-specific fitments",
  "Multiple designs and finishes",
  "OEM+ quality standards",
  "Construction options: Monoblock, 2-piece, 3-piece, wrapped carbon fibre, full carbon fibre.",
];

const tradePricingRows = [
  ["15\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
  ["16\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
  ["17\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
  ["18\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
  ["19\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
  ["20\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
  ["21\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
  ["22\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
  ["23\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
  ["24\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
  ["26\"", "Monoblock", "2-Piece", "3-Piece", "Truck", "Wrapped Carbon Fibre", "Wrapped Forged Carbon"],
];

export const TheWheels = () => {
  return (
    <section id="the-wheels" className="bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1 overflow-hidden"
          >
            <img
              src={qualityWheels}
              alt="Premium forged wheel detail"
              className="w-full aspect-[3/4] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Quality
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.0] mb-12">
              Quality without compromise.
            </h2>

            {/* Quality Points */}
            <div className="space-y-8 mb-12">
              {qualityPoints.map((point, index) => (
                <div key={index}>
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-2">
                    {point.label}
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature List */}
            <div className="border-t border-border pt-10">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-3.5 h-3.5 text-primary mt-1 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-foreground text-sm font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 rounded-2xl border border-border/70 bg-card/50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Trade Pricing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Trade pricing available on request. Contact us for a full price list.
              </p>
              <div className="mt-6 overflow-x-auto">
                <Table className="min-w-[620px] text-sm">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Size</TableHead>
                      <TableHead>Monoblock</TableHead>
                      <TableHead>2-Piece</TableHead>
                      <TableHead>3-Piece</TableHead>
                      <TableHead>Truck</TableHead>
                      <TableHead>Wrapped Carbon Fibre</TableHead>
                      <TableHead>Wrapped Forged Carbon</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tradePricingRows.map(([size], index) => (
                      <TableRow key={`${size}-${index}`}>
                        <TableCell className="font-medium">{size}</TableCell>
                        <TableCell>Available</TableCell>
                        <TableCell>Available</TableCell>
                        <TableCell>Available</TableCell>
                        <TableCell>Available</TableCell>
                        <TableCell>Available</TableCell>
                        <TableCell>Available</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
