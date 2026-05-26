import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EventsSection } from "@/components/sections/EventsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { DonateSection } from "@/components/sections/DonateSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <GallerySection />
      <TestimonialsSection />
      <EventsSection />
      <PartnersSection />
      <DonateSection />
      <ContactSection />
    </>
  );
}
