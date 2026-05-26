import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { EssaLogo } from "@/components/ui/EssaLogo";

const footerLinks = {
  Organization: [
    { label: "About ESSA", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Team", href: "/about#team" },
    { label: "Annual Report", href: "/about#report" },
  ],
  Programs: [
    { label: "Street Football", href: "/programs#street-football" },
    { label: "Youth Empowerment", href: "/programs#youth" },
    { label: "Refugee & Inclusion", href: "/programs#refugee" },
    { label: "Women in Sports", href: "/programs#women" },
  ],
  "Get Involved": [
    { label: "Volunteer", href: "/contact#volunteer" },
    { label: "Partner With Us", href: "/contact#partner" },
    { label: "Events", href: "/events" },
    { label: "Donate", href: "/donate" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-essa-dark-2 border-t border-white/5">
      {/* Ethiopian flag bar */}
      <div className="h-1 eth-bar w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <EssaLogo size={48} />
              <div>
                <div
                  className="text-3xl text-white"
                  style={{ fontFamily: "Bebas Neue, serif", letterSpacing: "0.1em" }}
                >
                  ESSA
                </div>
                <div className="text-[10px] tracking-widest text-essa-yellow/70 uppercase font-mono">
                  Ethiopian Street Sports Association
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Changing lives through street sports. Empowering Ethiopian youth,
              refugees, and communities through the power of football and sport.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: Mail, text: "info@essa-ethiopia.org" },
                { icon: Phone, text: "+251 11 000 0000" },
                { icon: MapPin, text: "Addis Ababa, Ethiopia" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-white/50 text-sm">
                  <Icon size={14} className="text-essa-green shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-essa-yellow hover:border-essa-yellow/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="section-label mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-white mb-1">Stay updated</h4>
              <p className="text-white/40 text-sm">
                Get the latest news from ESSA delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-essa-green/50"
              />
              <button className="px-5 py-2.5 bg-essa-green text-white text-sm font-semibold rounded-lg hover:bg-essa-green/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <span>© {new Date().getFullYear()} Ethiopian Street Sports Association. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
