import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { EmergencyBar } from "./EmergencyBar";

export function Layout() {
  return (
    <>
      <Header />
      <EmergencyBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
