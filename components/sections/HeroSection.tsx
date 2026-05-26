"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { STATS } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80')`,
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-essa-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-essa-dark/40 via-transparent to-essa-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-essa-dark/60 via-transparent to-transparent" />

      {/* Ethiopian geometric pattern */}
      <div className="absolute inset-0 eth-pattern opacity-30" />

      {/* Green-yellow accent glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-essa-green/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-essa-yellow/8 rounded-full blur-[100px]" />

      {/* Ethiopian flag strip on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 flex flex-col">
        <div className="flex-1 bg-essa-green" />
        <div className="flex-1 bg-essa-yellow" />
        <div className="flex-1 bg-essa-red" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-essa-yellow" />
            <span className="section-label text-essa-yellow">Ethiopian Street Sports Association</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="leading-none mb-6"
            style={{ fontFamily: "Bebas Neue, serif", fontSize: "clamp(4rem, 10vw, 9rem)", letterSpacing: "0.02em" }}
          >
            <span className="text-white block">Transforming</span>
            <span className="text-gradient-gold block">Communities</span>
            <span className="text-white block">Through Street Sports</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Providing hope, inclusion, and opportunity for Ethiopian youth through
            football and community programs that change lives across the nation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <Link
              href="#programs"
              className="group flex items-center gap-2 px-7 py-4 bg-essa-green hover:bg-essa-green/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-essa-green/25 hover:-translate-y-1"
            >
              Join the Movement
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/donate"
              className="flex items-center gap-2 px-7 py-4 glass border border-essa-yellow/30 text-essa-yellow font-semibold rounded-xl transition-all duration-300 hover:bg-essa-yellow/10 hover:-translate-y-1"
            >
              Donate Now
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden"
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="glass p-6 text-center"
              >
                <div
                  className="text-4xl sm:text-5xl text-essa-yellow font-display mb-1"
                  style={{ fontFamily: "Bebas Neue, serif" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-xs tracking-widest uppercase font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
