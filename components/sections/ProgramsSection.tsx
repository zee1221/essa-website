"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROGRAMS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const colorMap = {
  green: {
    accent: "text-essa-green",
    bg: "bg-essa-green/10",
    border: "border-essa-green/20",
    hover: "hover:border-essa-green/50 hover:bg-essa-green/5",
    glow: "hover:shadow-essa-green/10",
    icon: "bg-essa-green/15",
  },
  yellow: {
    accent: "text-essa-yellow",
    bg: "bg-essa-yellow/10",
    border: "border-essa-yellow/20",
    hover: "hover:border-essa-yellow/50 hover:bg-essa-yellow/5",
    glow: "hover:shadow-essa-yellow/10",
    icon: "bg-essa-yellow/15",
  },
  red: {
    accent: "text-essa-red",
    bg: "bg-essa-red/10",
    border: "border-essa-red/20",
    hover: "hover:border-essa-red/50 hover:bg-essa-red/5",
    glow: "hover:shadow-essa-red/10",
    icon: "bg-essa-red/15",
  },
};

export function ProgramsSection() {
  return (
    <section id="programs" className="py-28 bg-essa-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="What We Do"
          title="Our"
          titleHighlight="Programs"
          description="Six pillars of transformation — each program designed to uplift, empower, and inspire."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((program, i) => {
            const colors = colorMap[program.color as keyof typeof colorMap];
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative p-7 rounded-2xl border bg-white/[0.02] ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl ${colors.glow} cursor-pointer hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center text-2xl mb-5`}>
                  {program.icon}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-white text-xl mb-3">{program.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{program.description}</p>

                {/* Learn more */}
                <Link
                  href={`/programs#${program.id}`}
                  className={`inline-flex items-center gap-2 text-sm font-medium ${colors.accent} transition-all group-hover:gap-3`}
                >
                  Learn more
                  <ArrowRight size={15} />
                </Link>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 rounded-bl-[60px] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${colors.bg}`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
          >
            View All Programs
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
