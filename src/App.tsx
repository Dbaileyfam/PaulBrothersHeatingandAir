import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EmergencyBar } from "@/components/EmergencyBar";
import { Services } from "@/components/Services";
import { ServiceAreas } from "@/components/ServiceAreas";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmergencyBar />
        <Services />
        <ServiceAreas />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
