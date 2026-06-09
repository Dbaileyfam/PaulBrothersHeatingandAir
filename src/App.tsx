import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutUsPage } from "@/pages/AboutUsPage";
import {
  AirConditioningPage,
  HeatingPage,
  DuctworkPage,
  IndoorAirQualityPage,
  CommercialPage,
  EmergencyHvacRepairPage,
} from "@/pages/ServicePages";
import { ContactUsPage } from "@/pages/ContactUsPage";
import { BlogPage } from "@/pages/BlogPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { routes } from "@/lib/routes";

function TrailingSlashRedirect({ to }: { to: string }) {
  return <Navigate to={to} replace />;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || undefined}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us/" element={<AboutUsPage />} />
          <Route path="about-us" element={<TrailingSlashRedirect to={routes.aboutUs} />} />
          <Route path="air-conditioning/" element={<AirConditioningPage />} />
          <Route path="air-conditioning" element={<TrailingSlashRedirect to={routes.airConditioning} />} />
          <Route path="heating/" element={<HeatingPage />} />
          <Route path="heating" element={<TrailingSlashRedirect to={routes.heating} />} />
          <Route path="ductwork/" element={<DuctworkPage />} />
          <Route path="ductwork" element={<TrailingSlashRedirect to={routes.ductwork} />} />
          <Route path="indoor-air-quality/" element={<IndoorAirQualityPage />} />
          <Route path="indoor-air-quality" element={<TrailingSlashRedirect to={routes.indoorAirQuality} />} />
          <Route path="commercial/" element={<CommercialPage />} />
          <Route path="commercial" element={<TrailingSlashRedirect to={routes.commercial} />} />
          <Route path="emergency-hvac-repair/" element={<EmergencyHvacRepairPage />} />
          <Route path="emergency-hvac-repair" element={<TrailingSlashRedirect to={routes.emergencyHvacRepair} />} />
          <Route path="contact-us/" element={<ContactUsPage />} />
          <Route path="contact-us" element={<TrailingSlashRedirect to={routes.contactUs} />} />
          <Route path="blog/" element={<BlogPage />} />
          <Route path="blog" element={<TrailingSlashRedirect to={routes.blog} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
