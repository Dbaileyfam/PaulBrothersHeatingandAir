import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ServiceAreasPage } from "@/pages/ServiceAreasPage";
import { ReviewsPage } from "@/pages/ReviewsPage";
import {
  AcRepairPage,
  FurnaceRepairPage,
  HvacInstallationPage,
  HvacMaintenancePage,
  DuctworkPage,
  IndoorAirQualityPage,
  CommercialHvacPage,
} from "@/pages/ServicePages";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { legacyRedirects, routes } from "@/lib/routes";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

function redirect(to: string) {
  return <Navigate to={to} replace />;
}

const legacyRoutes = [
  ...new Map(
    Object.entries(legacyRedirects).map(([from, to]) => [
      from.replace(/^\//, "").replace(/\/$/, ""),
      to,
    ]),
  ).entries(),
].map(([path, to]) => ({
  path,
  element: redirect(to),
}));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "services/", element: <ServicesPage /> },
        { path: "services", element: redirect(routes.services) },
        { path: "ac-repair/", element: <AcRepairPage /> },
        { path: "ac-repair", element: redirect(routes.acRepair) },
        { path: "furnace-repair/", element: <FurnaceRepairPage /> },
        { path: "furnace-repair", element: redirect(routes.furnaceRepair) },
        { path: "hvac-installation/", element: <HvacInstallationPage /> },
        { path: "hvac-installation", element: redirect(routes.hvacInstallation) },
        { path: "hvac-maintenance/", element: <HvacMaintenancePage /> },
        { path: "hvac-maintenance", element: redirect(routes.hvacMaintenance) },
        { path: "indoor-air-quality/", element: <IndoorAirQualityPage /> },
        { path: "indoor-air-quality", element: redirect(routes.indoorAirQuality) },
        { path: "ductwork/", element: <DuctworkPage /> },
        { path: "ductwork", element: redirect(routes.ductwork) },
        { path: "commercial-hvac/", element: <CommercialHvacPage /> },
        { path: "commercial-hvac", element: redirect(routes.commercialHvac) },
        { path: "service-areas/", element: <ServiceAreasPage /> },
        { path: "service-areas", element: redirect(routes.serviceAreas) },
        { path: "reviews/", element: <ReviewsPage /> },
        { path: "reviews", element: redirect(routes.reviews) },
        { path: "contact/", element: <ContactPage /> },
        { path: "contact", element: redirect(routes.contact) },
        ...legacyRoutes,
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename },
);
