"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Tag, ArrowRight } from "lucide-react";
import { EVENTS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

const colorMap = {
  green: "text-essa-green border-essa-green/30 bg-essa-green/10",
  yellow: "text-essa-yellow border-essa-yellow/30 bg-essa-yellow/10",
  red: "text-essa-red border-essa-red/30 bg-essa-red/10",
};

export function EventsSection() {
  return (
    <section id="events" className="py-28 bg-essa-dark eth-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Upcoming Events"
          title="Join Us on the"
          titleHighlight="Pitch"
          description="From national tournaments to grassroots workshops — every event is an opportunity."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {EVENTS.map((event, i) => {
            const colors = colorMap[event.color as keyof typeof colorMap];
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass border border-white/5 hover:border-white/10 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Category badge */}
                <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${colors} mb-5`}>
                  <Tag size={11} />
                  {event.category}
                </span>

                <h3 className="text-xl font-semibold text-white mb-4">{event.title}</h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Calendar size={14} className="text-essa-green" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <MapPin size={14} className="text-essa-green" />
                    {event.location}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-6" />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30 font-mono">{event.spots}</span>
                  <button className="group/btn flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                    Register
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 hover:text-white hover:border-white/20 rounded-xl transition-all text-sm font-medium"
          >
            View All Events
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
