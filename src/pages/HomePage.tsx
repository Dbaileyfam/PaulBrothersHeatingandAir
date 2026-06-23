import { PageMeta } from "@/components/PageMeta";
import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsProof } from "@/components/ReviewsProof";
import { ContactSection } from "@/components/ContactSection";
import { routes } from "@/lib/routes";

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Heating & Air Conditioning | Salt Lake Valley & Surrounding Areas"
        description="Paul Brothers Heating & Air — AC repair, furnace repair, HVAC installation, ductwork, indoor air quality, and 24/7 emergency service throughout the Salt Lake Valley and surrounding areas. Call for a free estimate."
        path={routes.home}
      />
      <Hero />
      <ServicesPreview />
      <AboutSection compact />
      <ReviewsProof />
      <ContactSection />
    </>
  );
}
