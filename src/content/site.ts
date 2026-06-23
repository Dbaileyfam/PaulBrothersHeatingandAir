import { routes } from "@/lib/routes";

/** Central business copy and contact details for the site. */

export const site = {
  name: "Paul Brothers Heating & Air",
  shortName: "Paul Brothers",
  tagline: "HVAC Company in Midvale, UT",
  description:
    "Midvale-based HVAC company serving the Salt Lake Valley. AC repair, furnace repair, installation, maintenance, and 24/7 emergency service. Call for a free estimate.",
  hero: {
    headline: "HVAC Company in Midvale, UT",
    subheadline:
      "Licensed, family-owned heating and cooling service for Midvale and the Salt Lake Valley. Call or text for AC repair, furnace repair, free estimates, and 24/7 emergency help.",
  },
  phone: "385-787-8077",
  phoneHref: "tel:+13857878077",
  text: "385-787-7077",
  textHref: "sms:+13857877077",
  email: "paulbrothersut@gmail.com",
  emailHref: "mailto:paulbrothersut@gmail.com",
  address: {
    street: "7042 Commerce Park Dr #162",
    city: "Midvale",
    state: "UT",
    zip: "84047",
    full: "7042 Commerce Park Dr #162, Midvale, UT 84047",
    label: "Mailing Address",
    note: "Mobile service — we come to you.",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=7042+Commerce+Park+Dr+%23162,+Midvale,+UT+84047",
  },
  trustSignals: [
    {
      title: "Family-Owned",
      description: "Local Midvale technicians who treat your home like our own.",
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed HVAC professionals you can trust.",
    },
    {
      title: "Free Estimates",
      description: "Upfront pricing with no-pressure recommendations.",
    },
    {
      title: "Second Opinions",
      description: "Honest answers when you need a fresh look at your system.",
    },
    {
      title: "24/7 Emergency Service",
      description: "No heat or AC in the valley? We respond day and night.",
    },
    {
      title: "BBB A+ Accredited",
      description: "Recognized for integrity and customer satisfaction.",
    },
  ],
} as const;

export const statewideAvailabilityNote =
  "Based in Midvale and serving the Salt Lake Valley daily, with statewide Utah availability for larger HVAC projects, commercial work, system replacements, and qualifying installations.";

export const footerServiceArea = statewideAvailabilityNote;

export const navLinks = [
  { to: routes.home, label: "Home" },
  { to: routes.serviceAreas, label: "Service Areas" },
  { to: routes.reviews, label: "Reviews" },
  { to: routes.contact, label: "Contact" },
] as const;

export const serviceNavLinks = [
  { to: routes.services, label: "All HVAC Services" },
  { to: routes.acRepair, label: "AC Repair" },
  { to: routes.furnaceRepair, label: "Furnace Repair" },
  { to: routes.hvacInstallation, label: "HVAC Installation" },
  { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
  { to: routes.indoorAirQuality, label: "Indoor Air Quality" },
  { to: routes.ductwork, label: "Ductwork" },
  { to: routes.commercialHvac, label: "Commercial HVAC" },
] as const;

export type { ServicePageContent } from "@/content/service-pages";
export { servicePages } from "@/content/service-pages";

export const homeServiceCards = [
  {
    to: routes.acRepair,
    title: "AC Repair",
    summary: "Same-day and 24/7 emergency air conditioning repair.",
  },
  {
    to: routes.furnaceRepair,
    title: "Furnace Repair",
    summary: "Heating repair and emergency furnace service.",
  },
  {
    to: routes.hvacInstallation,
    title: "HVAC Installation",
    summary: "AC and furnace installation and replacement.",
  },
  {
    to: routes.hvacMaintenance,
    title: "HVAC Maintenance",
    summary: "Seasonal tune-ups for heating and cooling.",
  },
  {
    to: routes.ductwork,
    title: "Ductwork",
    summary: "Duct repair, sealing, and replacement.",
  },
  {
    to: routes.indoorAirQuality,
    title: "Indoor Air Quality",
    summary: "Filtration, purifiers, humidifiers, and more.",
  },
] as const;

export const servicesPage = {
  metaTitle: "HVAC Services in Midvale & Salt Lake Valley | Paul Brothers",
  metaDescription:
    "Full HVAC services from Paul Brothers in Midvale, UT — AC repair, furnace repair, installation, maintenance, ductwork, indoor air quality, and commercial HVAC across the Salt Lake Valley.",
  headline: "All HVAC Services",
  intro:
    "Paul Brothers Heating & Air is your Midvale-based HVAC team for repairs, installations, maintenance, and emergency service across the Salt Lake Valley.",
} as const;

export const serviceAreasPage = {
  metaTitle: "HVAC Service Areas | Midvale & Salt Lake Valley | Paul Brothers",
  metaDescription:
    "Paul Brothers Heating & Air serves Midvale, Sandy, Murray, West Jordan, Salt Lake City, and communities across the Salt Lake Valley. Based in Midvale, UT.",
  headline: "HVAC Service Areas",
  intro:
    "We're based in Midvale and on the road throughout the Salt Lake Valley every day for repairs, maintenance, installations, and emergency HVAC.",
  valleyCities: [
    "Midvale",
    "Salt Lake City",
    "Sandy",
    "Murray",
    "West Jordan",
    "South Jordan",
    "Draper",
    "Taylorsville",
    "Cottonwood Heights",
    "Millcreek",
    "Holladay",
    "Riverton",
    "Herriman",
  ],
  body: [
    "Our fastest response times are in Midvale and nearby Salt Lake County communities where we work daily. That's where we handle routine service calls, free estimates, and 24/7 emergency HVAC.",
    "If your project is outside the valley — a larger replacement, commercial job, or specialty install — call us. We'll tell you honestly whether we can schedule statewide service.",
  ],
} as const;

export const reviewsPage = {
  metaTitle: "Customer Reviews | Paul Brothers Heating & Air | Midvale, UT",
  metaDescription:
    "Read 5-star Google reviews for Paul Brothers Heating & Air — a Midvale HVAC company serving the Salt Lake Valley. Nearly 200 customer reviews.",
  headline: "Customer Reviews",
  intro:
    "Paul Brothers earns strong reviews for honest pricing, fast response, and dependable HVAC work across the Salt Lake Valley.",
} as const;

export const contactPage = {
  metaTitle: "Contact Paul Brothers | Free HVAC Estimate | Midvale, UT",
  metaDescription:
    "Contact Paul Brothers Heating & Air in Midvale for a free HVAC estimate. Call 385-787-8077, text 385-787-7077, or request service online.",
  headline: "Contact / Request Estimate",
  intro:
    "Call, text, or email for a free estimate, emergency service, or a second opinion. We serve Midvale and the Salt Lake Valley daily.",
} as const;
