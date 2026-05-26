"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Users, MapPin, Handshake, Globe } from "lucide-react";

const impactStats = [
  { icon: Users, value: 5000, suffix: "+", label: "Youth Reached", desc: "Young people empowered through our programs across Ethiopia" },
  { icon: Globe, value: 200, suffix: "+", label: "Volunteers", desc: "Dedicated community volunteers driving positive change daily" },
  { icon: Handshake, value: 35, suffix: "+", label: "Partnerships", desc: "NGOs, community orgs, and sports bodies working alongside us" },
  { icon: MapPin, value: 12, suffix: "", label: "Cities Supported", desc: "Ethiopian cities with active ESSA programs and community coaches" },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-28 bg-essa-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 eth-star-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-essa-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Our Impact"
          title="Numbers That"
          titleHighlight="Tell Stories"
          description="Behind every statistic is a young person whose life has been changed forever."
        />

        {/* Big stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl p-7 border border-white/5 hover:border-essa-green/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-essa-green/10 flex items-center justify-center mb-5 group-hover:bg-essa-green/20 transition-colors">
                <stat.icon size={22} className="text-essa-green" />
              </div>
              <div
                className="text-5xl text-essa-yellow mb-2"
                style={{ fontFamily: "Bebas Neue, serif" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Impactful quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center glass rounded-3xl p-12 border border-essa-green/10"
        >
          <div
            className="text-8xl text-essa-green/10 absolute top-4 left-8"
            style={{ fontFamily: "serif", fontSize: "8rem" }}
          >
            &ldquo;
          </div>
          <p
            className="text-2xl sm:text-3xl text-white/80 max-w-3xl mx-auto leading-relaxed relative z-10"
            style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300, fontStyle: "italic" }}
          >
            Sport has the power to change the world. It has the power to inspire. It has the power to unite people in a way that little else does.
          </p>
          <p className="section-label mt-6">— Inspired by Nelson Mandela</p>

          {/* Ethiopian flag line */}
          <div className="h-0.5 eth-bar w-24 mx-auto mt-6 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
