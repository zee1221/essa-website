"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Shield, Target, Heart } from "lucide-react";

const values = [
  { icon: Shield, title: "Unity & Inclusion", desc: "Bringing together youth from all backgrounds, ethnicities and communities." },
  { icon: Target, title: "Opportunity", desc: "Creating pathways for youth to discover their potential through sport." },
  { icon: Heart, title: "Hope & Empowerment", desc: "Instilling confidence and resilience in every participant we reach." },
];

const timeline = [
  { year: "2018", event: "ESSA Founded in Addis Ababa with 12 youth participants" },
  { year: "2020", event: "Expanded to 5 cities across Ethiopia" },
  { year: "2022", event: "Launched Refugee & Inclusion Program" },
  { year: "2023", event: "Reached 5,000+ youth across 12 cities" },
  { year: "2025", event: "Inaugural Addis Street Cup — National Tournament" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-essa-dark eth-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Who We Are"
          title="More Than a Sport"
          titleHighlight="A Movement"
          description="ESSA was born on the streets of Addis Ababa with one belief: sport is the most powerful tool for social change."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-white/60 text-lg leading-relaxed">
              The Ethiopian Street Sports Association (ESSA) is a nonprofit organization
              dedicated to empowering youth, refugees, and underserved communities
              across Ethiopia through the transformative power of street football,
              futsal, basketball, and community sports programs.
            </p>
            <p className="text-white/60 leading-relaxed">
              We believe that sport transcends barriers of poverty, ethnicity, gender, and
              displacement. Our programs don&apos;t just develop athletes — they build leaders,
              foster community, and create lasting social impact across Ethiopia.
            </p>

            {/* Core values */}
            <div className="grid gap-4 pt-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 glass p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-essa-green/15 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-essa-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{title}</h4>
                    <p className="text-white/50 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 h-[500px]">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=500&q=80"
                  alt="Youth football training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <Image
                    src="https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?w=400&q=80"
                    alt="Community event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <Image
                    src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&q=80"
                    alt="Girls football program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass-green p-5 rounded-2xl shadow-2xl"
            >
              <div className="text-3xl font-display text-essa-yellow" style={{ fontFamily: "Bebas Neue" }}>
                5,000+
              </div>
              <div className="text-white/70 text-xs tracking-wider uppercase">
                Youth Impacted
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="section-label text-center mb-10">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-essa-green/20 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass p-4 rounded-xl inline-block">
                      <span className="section-label text-essa-yellow">{item.year}</span>
                      <p className="text-white/70 text-sm mt-1">{item.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-essa-green border-4 border-essa-dark shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
