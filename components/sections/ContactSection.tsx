"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@essa-ethiopia.org" },
  { icon: Phone, label: "Phone", value: "+251 11 000 0000" },
  { icon: MapPin, label: "Address", value: "Bole, Addis Ababa, Ethiopia" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-essa-dark-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Get In Touch"
          title="Connect With"
          titleHighlight="ESSA"
          description="Whether you want to volunteer, partner, or just learn more — we'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass border border-white/5 rounded-3xl p-8">
              <h3 className="font-semibold text-white text-xl mb-6">Send us a message</h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs mb-2 tracking-wider uppercase font-mono">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-essa-green/50 transition-colors"
                      placeholder="Dawit"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs mb-2 tracking-wider uppercase font-mono">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-essa-green/50 transition-colors"
                      placeholder="Bekele"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-2 tracking-wider uppercase font-mono">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-essa-green/50 transition-colors"
                    placeholder="dawit@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-2 tracking-wider uppercase font-mono">
                    How can we help?
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/60 text-sm focus:outline-none focus:border-essa-green/50 transition-colors">
                    <option value="">Select a topic</option>
                    <option>Volunteer</option>
                    <option>Partnership</option>
                    <option>Donation inquiry</option>
                    <option>Program information</option>
                    <option>Media & Press</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/50 text-xs mb-2 tracking-wider uppercase font-mono">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-essa-green/50 transition-colors resize-none"
                    placeholder="Tell us about yourself and how you'd like to get involved..."
                  />
                </div>

                <button className="w-full py-4 bg-essa-green hover:bg-essa-green/90 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-essa-green/20">
                  Send Message
                </button>
              </div>
            </div>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-essa-green/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-essa-green" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-mono uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-white font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass border border-white/5 rounded-2xl p-6">
              <div className="section-label mb-4">Follow Us</div>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 glass rounded-xl flex items-center justify-center text-white/50 hover:text-essa-yellow hover:border-essa-yellow/30 border border-white/5 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map embed */}
            <div className="rounded-2xl overflow-hidden h-56 border border-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126087.09638354157!2d38.6530469!3d9.0107976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.6)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ESSA Location - Addis Ababa, Ethiopia"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
