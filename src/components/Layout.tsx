import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { EmergencyBar } from "./EmergencyBar";
import { CursorSparkles } from "./CursorSparkles";

export function Layout() {
  return (
    <>
      <CursorSparkles />
      <div className="relative z-10">
        <Header />
        <EmergencyBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}
