import { createBrowserRouter, Navigate } from "react-router-dom";
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

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

function redirect(to: string) {
  return <Navigate to={to} replace />;
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about-us/", element: <AboutUsPage /> },
        { path: "about-us", element: redirect(routes.aboutUs) },
        { path: "air-conditioning/", element: <AirConditioningPage /> },
        { path: "air-conditioning", element: redirect(routes.airConditioning) },
        { path: "heating/", element: <HeatingPage /> },
        { path: "heating", element: redirect(routes.heating) },
        { path: "ductwork/", element: <DuctworkPage /> },
        { path: "ductwork", element: redirect(routes.ductwork) },
        { path: "indoor-air-quality/", element: <IndoorAirQualityPage /> },
        { path: "indoor-air-quality", element: redirect(routes.indoorAirQuality) },
        { path: "commercial/", element: <CommercialPage /> },
        { path: "commercial", element: redirect(routes.commercial) },
        { path: "emergency-hvac-repair/", element: <EmergencyHvacRepairPage /> },
        {
          path: "emergency-hvac-repair",
          element: redirect(routes.emergencyHvacRepair),
        },
        { path: "contact-us/", element: <ContactUsPage /> },
        { path: "contact-us", element: redirect(routes.contactUs) },
        { path: "blog/", element: <BlogPage /> },
        { path: "blog", element: redirect(routes.blog) },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename },
);
