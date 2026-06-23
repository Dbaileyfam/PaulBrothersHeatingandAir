/** Clean URL paths — trailing slashes included. */
export const routes = {
  home: "/",
  services: "/services/",
  acRepair: "/ac-repair/",
  furnaceRepair: "/furnace-repair/",
  hvacInstallation: "/hvac-installation/",
  hvacMaintenance: "/hvac-maintenance/",
  indoorAirQuality: "/indoor-air-quality/",
  ductwork: "/ductwork/",
  commercialHvac: "/commercial-hvac/",
  serviceAreas: "/service-areas/",
  reviews: "/reviews/",
  contact: "/contact/",
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

export const serviceRoutes = [
  routes.acRepair,
  routes.furnaceRepair,
  routes.hvacInstallation,
  routes.hvacMaintenance,
  routes.indoorAirQuality,
  routes.ductwork,
  routes.commercialHvac,
] as const;

/** Old URLs → new canonical paths (client-side redirects). */
export const legacyRedirects: Record<string, RoutePath> = {
  "/about-us/": routes.reviews,
  "/about-us": routes.reviews,
  "/air-conditioning/": routes.acRepair,
  "/air-conditioning": routes.acRepair,
  "/heating/": routes.furnaceRepair,
  "/heating": routes.furnaceRepair,
  "/commercial/": routes.commercialHvac,
  "/commercial": routes.commercialHvac,
  "/emergency-hvac-repair/": routes.acRepair,
  "/emergency-hvac-repair": routes.acRepair,
  "/contact-us/": routes.contact,
  "/contact-us": routes.contact,
  "/statewide-hvac-service-utah/": routes.serviceAreas,
  "/statewide-hvac-service-utah": routes.serviceAreas,
  "/blog/": routes.home,
  "/blog": routes.home,
};
