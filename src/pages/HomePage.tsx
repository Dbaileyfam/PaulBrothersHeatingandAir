import { PageMeta } from "@/components/PageMeta";
import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { site } from "@/content/site";
import { routes } from "@/lib/routes";

export function HomePage() {
  return (
    <>
      <PageMeta
        title="HVAC Company in Midvale, UT | Paul Brothers Heating & Air"
        description={site.description}
        path={routes.home}
      />
      <Hero />
      <ServicesPreview />
      <AboutSection compact />
      <ContactSection />
    </>
  );
}
