"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

const images = [
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=700&q=80",
    alt: "Street football match in Addis Ababa",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&q=80",
    alt: "Youth training session",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?w=400&q=80",
    alt: "Community event",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&q=80",
    alt: "Girls football program",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1613042790573-f5d1dcca2e2a?w=600&q=80",
    alt: "Tournament celebration",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&q=80",
    alt: "Coaching session",
    className: "col-span-1 row-span-1",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-28 bg-essa-dark-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Gallery"
          title="Life on the"
          titleHighlight="Streets"
          description="Moments of joy, determination, and community from across Ethiopia."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px] sm:h-[700px]"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${img.className} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-essa-dark/0 group-hover:bg-essa-dark/50 transition-all duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-medium tracking-wide">{img.alt}</span>
              </div>

              {/* Green corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 bg-essa-green/0 group-hover:bg-essa-green/80 transition-all duration-300 rounded-br-2xl" />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors font-mono tracking-wider"
          >
            VIEW FULL GALLERY →
          </a>
        </div>
      </div>
    </section>
  );
}
