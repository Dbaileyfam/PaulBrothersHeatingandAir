import { ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { EmergencyBar } from "./EmergencyBar";
import { CursorSparkles } from "./CursorSparkles";
import { PageTransition } from "./PageTransition";

export function Layout() {
  return (
    <>
      <CursorSparkles />
      <div className="relative z-10">
        <Header />
        <EmergencyBar />
        <main>
          <PageTransition />
        </main>
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}
