"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className="py-28 bg-essa-dark-2 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Testimonials"
          title="Voices of"
          titleHighlight="Change"
          description="Real stories from the people at the heart of everything we do."
        />

        <div className="relative">
          {/* Quote icon */}
          <Quote size={80} className="text-essa-green/10 absolute -top-4 -left-4" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-10 sm:p-14 border border-white/5"
            >
              <p className="text-xl sm:text-2xl text-white/80 leading-relaxed mb-10 italic font-light">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-essa-green to-essa-yellow flex items-center justify-center text-essa-dark font-bold text-lg">
                    {TESTIMONIALS[current].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{TESTIMONIALS[current].name}</div>
                    <div className="text-white/40 text-sm">{TESTIMONIALS[current].role}</div>
                    <div className="text-essa-yellow/70 text-xs font-mono">{TESTIMONIALS[current].city}</div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-essa-green/50 transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-2">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === current ? "w-8 bg-essa-green" : "w-1.5 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-essa-green/50 transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
