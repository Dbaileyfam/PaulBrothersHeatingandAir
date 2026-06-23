/** Clean URL paths — trailing slashes included. */
export const routes = {
  home: "/",
  aboutUs: "/about-us/",
  airConditioning: "/air-conditioning/",
  heating: "/heating/",
  ductwork: "/ductwork/",
  indoorAirQuality: "/indoor-air-quality/",
  commercial: "/commercial/",
  emergencyHvacRepair: "/emergency-hvac-repair/",
  contactUs: "/contact-us/",
  blog: "/blog/",
  statewideHvacService: "/statewide-hvac-service-utah/",
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

export const serviceRoutes = [
  routes.airConditioning,
  routes.heating,
  routes.ductwork,
  routes.indoorAirQuality,
  routes.commercial,
  routes.emergencyHvacRepair,
] as const;
