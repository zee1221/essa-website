import { GallerySection } from "@/components/sections/GallerySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — ESSA",
  description: "Photos from ESSA street football matches, community events, and youth programs across Ethiopia.",
};

export default function GalleryPage() {
  return (
    <>
      <div className="min-h-[40vh] bg-essa-dark-2 flex items-end pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 eth-pattern opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px eth-bar" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label mb-3">Our Moments</div>
          <h1
            className="text-7xl sm:text-9xl text-white leading-none"
            style={{ fontFamily: "Bebas Neue, serif", letterSpacing: "0.02em" }}
          >
            <span className="text-gradient-gold">Gallery</span>
          </h1>
        </div>
      </div>
      <GallerySection />
    </>
  );
}
