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
  aboutUs: "/about-us/",
  contact: "/contact/",
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

/** About Us section for service coverage (also used by legacy URL redirects). */
export const aboutUsServiceAreasHash = `${routes.aboutUs}#service-areas`;

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
export const legacyRedirects: Record<string, string> = {
  "/reviews/": routes.aboutUs,
  "/reviews": routes.aboutUs,
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
  "/service-areas/": aboutUsServiceAreasHash,
  "/service-areas": aboutUsServiceAreasHash,
  "/statewide-hvac-service-utah/": aboutUsServiceAreasHash,
  "/statewide-hvac-service-utah": aboutUsServiceAreasHash,
  "/blog/": routes.home,
  "/blog": routes.home,
};
