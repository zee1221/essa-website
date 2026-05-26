"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  titleHighlight,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${centered ? "text-center" : ""} mb-14`}
    >
      <span className="section-label inline-block mb-4">{label}</span>
      <h2
        className={`text-5xl sm:text-6xl lg:text-7xl leading-none mb-5 ${
          light ? "text-white" : "text-white"
        }`}
        style={{ fontFamily: "Bebas Neue, serif", letterSpacing: "0.02em" }}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient-gold">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg max-w-2xl ${centered ? "mx-auto" : ""} leading-relaxed ${
            light ? "text-white/60" : "text-white/50"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
