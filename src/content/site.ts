import { routes } from "@/lib/routes";

/** Central business copy and contact details for the site. */

export const site = {
  name: "Paul Brothers Heating & Air",
  shortName: "Paul Brothers",
  tagline: "Trusted HVAC Service Across the Salt Lake Valley",
  description:
    "Midvale-based HVAC company serving the Salt Lake Valley. AC repair, furnace repair, installation, maintenance, and 24/7 emergency service. Call for a free estimate.",
  hero: {
    headline: "Trusted HVAC Service Across the Salt Lake Valley",
    subheadline:
      "Licensed, family-owned heating and cooling service across the Salt Lake Valley. Call or text for AC repair, furnace repair, free estimates, and 24/7 emergency help.",
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
  metaTitle: "HVAC Service Areas | Wasatch Front & Salt Lake Valley | Paul Brothers",
  metaDescription:
    "Paul Brothers Heating & Air serves the Wasatch Front — Midvale, Salt Lake City, Provo, Ogden, Park City, and communities across the Salt Lake Valley, Utah Valley, Davis, Weber, and Tooele counties.",
  headline: "HVAC Service Areas",
  intro:
    "We're based in Midvale and serve homeowners and businesses throughout the Wasatch Front — from the Salt Lake Valley to Utah Valley, Davis and Weber counties, and nearby mountain communities.",
  regions: [
    {
      name: "Salt Lake County",
      cities: [
        "Midvale",
        "Salt Lake City",
        "West Valley City",
        "Sandy",
        "Murray",
        "West Jordan",
        "South Jordan",
        "Draper",
        "Riverton",
        "Herriman",
        "Taylorsville",
        "Millcreek",
        "Holladay",
        "Cottonwood Heights",
        "South Salt Lake",
        "Kearns",
        "Magna",
        "Bluffdale",
        "Brighton",
        "Alta",
        "Copperton",
        "Emigration Canyon",
        "White City",
      ],
    },
    {
      name: "Utah County",
      cities: [
        "Provo",
        "Orem",
        "Lehi",
        "American Fork",
        "Pleasant Grove",
        "Spanish Fork",
        "Springville",
        "Lindon",
        "Vineyard",
        "Saratoga Springs",
        "Eagle Mountain",
        "Highland",
        "Alpine",
        "Cedar Hills",
        "Mapleton",
        "Payson",
        "Salem",
        "Santaquin",
        "Genola",
        "Elk Ridge",
      ],
    },
    {
      name: "Davis County",
      cities: [
        "Bountiful",
        "North Salt Lake",
        "Woods Cross",
        "Centerville",
        "Farmington",
        "Kaysville",
        "Layton",
        "Syracuse",
        "Clearfield",
        "Clinton",
        "Sunset",
        "South Weber",
        "Fruit Heights",
        "West Bountiful",
        "West Point",
        "Hooper",
      ],
    },
    {
      name: "Weber County",
      cities: [
        "Ogden",
        "Roy",
        "South Ogden",
        "North Ogden",
        "Washington Terrace",
        "Riverdale",
        "West Haven",
        "Pleasant View",
        "Harrisville",
        "Farr West",
        "Plain City",
        "Uintah",
        "Huntsville",
        "Eden",
        "Liberty",
      ],
    },
    {
      name: "Summit & Wasatch Counties",
      cities: [
        "Park City",
        "Heber City",
        "Midway",
        "Kamas",
        "Coalville",
        "Oakley",
        "Francis",
        "Wallsburg",
      ],
    },
    {
      name: "Tooele County",
      cities: [
        "Tooele",
        "Grantsville",
        "Stansbury Park",
        "Erda",
        "Lake Point",
        "Stockton",
      ],
    },
  ],
  body: [
    "Our home base is Midvale, and our fastest response times are in the Salt Lake Valley — where we handle routine repairs, maintenance, free estimates, and 24/7 emergency HVAC every day.",
    "We also serve communities across the Wasatch Front, including Utah Valley, Davis and Weber counties, Park City and Heber Valley, and the Tooele area. If you're anywhere along the Wasatch Front, call us — we'll tell you honestly what scheduling and service options are available.",
    "For larger projects outside our daily service area — system replacements, commercial work, or specialty installs — statewide Utah availability may be possible depending on scope and schedule.",
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
