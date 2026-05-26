"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

const impacts = [
  { amount: "$15", impact: "Covers one youth's equipment for a season" },
  { amount: "$50", impact: "Funds a community coaching workshop" },
  { amount: "$150", impact: "Sponsors a youth for an entire year" },
  { amount: "$500", impact: "Helps organize a full community tournament" },
];

export function DonateSection() {
  return (
    <section id="donate" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=60')`,
        }}
      />
      <div className="absolute inset-0 bg-essa-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-essa-green/20 to-essa-dark/80" />
      <div className="absolute inset-0 eth-pattern opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass-green rounded-full border border-essa-green/30 mb-8"
        >
          <Heart size={14} className="text-essa-green" fill="currentColor" />
          <span className="section-label">Make a Difference Today</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="leading-none mb-6"
          style={{ fontFamily: "Bebas Neue, serif", fontSize: "clamp(3.5rem, 9vw, 8rem)", letterSpacing: "0.02em" }}
        >
          <span className="text-white block">Your Support</span>
          <span className="text-gradient-gold block">Changes Lives</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-14"
        >
          Every donation directly funds programs that empower Ethiopian youth, support
          refugees, and build stronger communities through the power of sport.
        </motion.p>

        {/* Impact tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {impacts.map(({ amount, impact }, i) => (
            <div
              key={amount}
              className="glass border border-white/10 hover:border-essa-yellow/30 rounded-2xl p-6 text-left cursor-pointer transition-all hover:-translate-y-1 group"
            >
              <div
                className="text-essa-yellow text-3xl mb-3 group-hover:scale-110 transition-transform"
                style={{ fontFamily: "Bebas Neue, serif" }}
              >
                {amount}
              </div>
              <p className="text-white/50 text-sm">{impact}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/donate"
            className="group flex items-center gap-3 px-10 py-5 bg-essa-green hover:bg-essa-green/90 text-white font-bold text-lg rounded-2xl transition-all hover:shadow-2xl hover:shadow-essa-green/25 hover:-translate-y-1"
          >
            <Heart size={20} fill="currentColor" />
            Donate Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact#volunteer"
            className="px-8 py-5 glass border border-white/15 text-white font-medium text-lg rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-1"
          >
            Volunteer Instead
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
