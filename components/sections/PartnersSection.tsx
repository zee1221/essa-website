"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const partners = [
  { name: "FIFA Foundation", abbr: "FIFA" },
  { name: "UNICEF Ethiopia", abbr: "UNICEF" },
  { name: "Ethiopian Football Federation", abbr: "EFF" },
  { name: "Save the Children", abbr: "STC" },
  { name: "UNHCR Ethiopia", abbr: "UNHCR" },
  { name: "Addis Ababa City Administration", abbr: "AACA" },
  { name: "Sport Relief", abbr: "SR" },
  { name: "Right to Play", abbr: "R2P" },
];

export function PartnersSection() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 bg-essa-dark-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <SectionHeader
          label="Our Partners"
          title="Stronger"
          titleHighlight="Together"
          description="We collaborate with leading NGOs, sports federations, and community organizations to amplify our impact."
        />
      </div>

      {/* Marquee track */}
      <div className="relative">
        <div className="marquee-track">
          {doubled.map((p, i) => (
            <div
              key={`${p.abbr}-${i}`}
              className="mx-4 flex-shrink-0"
            >
              <div className="glass border border-white/8 rounded-2xl px-8 py-6 flex flex-col items-center gap-2 min-w-[160px] hover:border-essa-green/30 transition-colors">
                {/* Logo placeholder */}
                <div className="w-12 h-12 rounded-xl bg-essa-green/10 flex items-center justify-center">
                  <span
                    className="text-essa-green text-xs font-bold tracking-wider"
                    style={{ fontFamily: "Bebas Neue" }}
                  >
                    {p.abbr}
                  </span>
                </div>
                <span className="text-white/40 text-xs text-center">{p.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-essa-dark-2 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-essa-dark-2 to-transparent pointer-events-none" />
      </div>

      {/* Become a partner CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-12"
      >
        <a
          href="/contact#partner"
          className="inline-flex items-center gap-2 text-essa-yellow/70 hover:text-essa-yellow text-sm font-mono tracking-wider transition-colors"
        >
          BECOME A PARTNER →
        </a>
      </motion.div>
    </section>
  );
}
