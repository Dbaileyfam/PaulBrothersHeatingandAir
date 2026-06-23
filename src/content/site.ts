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

export type ServicePageContent = {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  body: string[];
  highlights: string[];
  relatedServices: { to: string; label: string }[];
  faqs?: { question: string; answer: string }[];
};

export const servicePages: Record<string, ServicePageContent> = {
  [routes.acRepair]: {
    path: routes.acRepair,
    title: "AC Repair",
    metaTitle: "AC Repair in Midvale & the Salt Lake Valley | Paul Brothers",
    metaDescription:
      "Fast AC repair in Midvale and the Salt Lake Valley. Same-day and 24/7 emergency air conditioning service, honest diagnostics, and free estimates. Call 385-787-8077.",
    headline: "AC Repair in Midvale & the Salt Lake Valley",
    intro:
      "AC blowing warm air, won't turn on, or struggling in a Utah heat wave? Paul Brothers Heating & Air diagnoses and repairs cooling problems quickly for homeowners and businesses in Midvale and nearby valley communities.",
    body: [
      "We troubleshoot refrigerant issues, compressors, capacitors, thermostats, airflow restrictions, and electrical faults — then explain your options before any work starts.",
      "Emergency AC repair is available 24/7 in our core Salt Lake Valley service area. Call or text when you need cooling restored fast.",
    ],
    highlights: [
      "All major AC brands",
      "Same-day service when available",
      "24/7 emergency AC repair in the valley",
      "Upfront pricing & free estimates",
      "Mobile technicians — we come to you",
    ],
    relatedServices: [
      { to: routes.hvacInstallation, label: "HVAC Installation" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
      { to: routes.indoorAirQuality, label: "Indoor Air Quality" },
    ],
    faqs: [
      {
        question: "Do you offer emergency AC repair?",
        answer:
          "Yes. We provide 24/7 emergency AC repair across the Salt Lake Valley, including Midvale, Sandy, Murray, West Jordan, and nearby communities.",
      },
      {
        question: "How fast can you get to Midvale?",
        answer:
          "We're based in Midvale and serve the valley daily. Many calls are scheduled same-day — call or text for the soonest available appointment.",
      },
    ],
  },
  [routes.furnaceRepair]: {
    path: routes.furnaceRepair,
    title: "Furnace Repair",
    metaTitle: "Furnace Repair in Midvale & the Salt Lake Valley | Paul Brothers",
    metaDescription:
      "Furnace repair in Midvale and the Salt Lake Valley. 24/7 emergency heating repair, safety-focused diagnostics, and free estimates. Licensed technicians. Call today.",
    headline: "Furnace Repair in Midvale & the Salt Lake Valley",
    intro:
      "No heat on a cold night is stressful. Paul Brothers Heating & Air provides furnace repair and emergency heating service throughout Midvale and the Salt Lake Valley with clear communication and fair pricing.",
    body: [
      "Our technicians repair ignitors, blower motors, heat exchangers, limit switches, thermostats, and more — with code-compliant work and honest repair-versus-replace guidance.",
      "If your furnace stops working after hours, call or text. Emergency heating repair is available 24/7 in our valley service area.",
    ],
    highlights: [
      "Furnace troubleshooting & repair",
      "24/7 emergency heating service",
      "Safety-focused inspections",
      "All major furnace brands",
      "Free estimates & second opinions",
    ],
    relatedServices: [
      { to: routes.hvacInstallation, label: "HVAC Installation" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
      { to: routes.ductwork, label: "Ductwork" },
    ],
    faqs: [
      {
        question: "What should I do if my furnace won't start?",
        answer:
          "Check your thermostat and filter first. If the system still won't run, call us — we'll diagnose the issue and restore heat safely.",
      },
      {
        question: "Do you repair heat pumps?",
        answer:
          "Yes. We service furnaces, heat pumps, and related heating equipment throughout the Salt Lake Valley.",
      },
    ],
  },
  [routes.hvacInstallation]: {
    path: routes.hvacInstallation,
    title: "HVAC Installation",
    metaTitle: "AC & Furnace Installation in Midvale, UT | Paul Brothers",
    metaDescription:
      "AC and furnace installation and replacement in Midvale and the Salt Lake Valley. Free estimates, quality equipment, and professional installs. Call Paul Brothers Heating & Air.",
    headline: "AC & Furnace Installation / Replacement",
    intro:
      "When repair no longer makes sense — or you're upgrading efficiency — Paul Brothers installs new air conditioners, furnaces, and complete HVAC systems for Midvale and Salt Lake Valley homes and businesses.",
    body: [
      "We help you choose the right system for your home's size, comfort goals, and budget. Every install includes proper sizing, clean workmanship, and a walkthrough of your new equipment.",
      "Planning a full system replacement? We also travel statewide for larger installation projects when scheduling allows.",
    ],
    highlights: [
      "AC installation & replacement",
      "Furnace installation & replacement",
      "System sizing & load calculations",
      "Energy-efficient equipment options",
      "Free installation estimates",
    ],
    relatedServices: [
      { to: routes.acRepair, label: "AC Repair" },
      { to: routes.furnaceRepair, label: "Furnace Repair" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
    ],
  },
  [routes.hvacMaintenance]: {
    path: routes.hvacMaintenance,
    title: "HVAC Maintenance",
    metaTitle: "HVAC Maintenance in Midvale & Salt Lake Valley | Paul Brothers",
    metaDescription:
      "Heating and cooling maintenance and tune-ups in Midvale and the Salt Lake Valley. Keep your AC and furnace running efficiently. Schedule a seasonal HVAC checkup today.",
    headline: "Heating & Cooling Maintenance",
    intro:
      "Regular maintenance catches small problems before they become expensive breakdowns. Paul Brothers provides seasonal AC and furnace tune-ups for homeowners in Midvale and across the Salt Lake Valley.",
    body: [
      "Our maintenance visits include system inspection, cleaning, safety checks, and performance testing so your equipment runs efficiently through Utah's hot summers and cold winters.",
      "Ask about scheduling before peak season — it's the easiest way to avoid emergency repairs when you need comfort most.",
    ],
    highlights: [
      "Spring AC tune-ups",
      "Fall furnace inspections",
      "Filter & airflow checks",
      "Efficiency & safety testing",
      "Maintenance reminders",
    ],
    relatedServices: [
      { to: routes.acRepair, label: "AC Repair" },
      { to: routes.furnaceRepair, label: "Furnace Repair" },
      { to: routes.ductwork, label: "Ductwork" },
    ],
  },
  [routes.indoorAirQuality]: {
    path: routes.indoorAirQuality,
    title: "Indoor Air Quality",
    metaTitle: "Indoor Air Quality Services in Midvale, UT | Paul Brothers",
    metaDescription:
      "Indoor air quality services in Midvale and the Salt Lake Valley — air filtration, purifiers, humidifiers, and dehumidifiers. Breathe easier at home. Free estimates.",
    headline: "Indoor Air Quality Services",
    intro:
      "Dry winter air, dust, allergens, and poor filtration affect comfort and health. Paul Brothers installs and services whole-home air quality products integrated with your HVAC system.",
    body: [
      "We offer air filtration upgrades, air purifiers, UV options, humidifiers, and dehumidifiers tailored to your home — not one-size-fits-all packages.",
      "Better indoor air quality can reduce dust, ease allergy symptoms, and help your heating and cooling equipment perform more efficiently.",
    ],
    highlights: [
      "Whole-home air filtration",
      "Air purifiers & UV systems",
      "Humidifiers & dehumidifiers",
      "Allergen & dust reduction",
      "Integrated with your HVAC",
    ],
    relatedServices: [
      { to: routes.ductwork, label: "Ductwork" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
      { to: routes.commercialHvac, label: "Commercial HVAC" },
    ],
  },
  [routes.ductwork]: {
    path: routes.ductwork,
    title: "Ductwork",
    metaTitle: "Ductwork Repair & Installation in Midvale, UT | Paul Brothers",
    metaDescription:
      "Duct repair, sealing, and installation in Midvale and the Salt Lake Valley. Fix hot and cold spots and improve HVAC efficiency. Call for a free estimate.",
    headline: "Ductwork Repair & Installation",
    intro:
      "Leaky, damaged, or poorly designed ducts waste energy and create uneven temperatures. Paul Brothers repairs, seals, and replaces ductwork so heated and cooled air reaches every room.",
    body: [
      "We inspect duct runs for leaks, disconnections, poor insulation, and sizing problems — then recommend the most cost-effective fix.",
      "Proper ductwork helps your AC and furnace work less while keeping your home more comfortable year-round.",
    ],
    highlights: [
      "Duct leak detection & sealing",
      "Duct repair & replacement",
      "Improved airflow balance",
      "Better system efficiency",
      "More even room-to-room comfort",
    ],
    relatedServices: [
      { to: routes.hvacInstallation, label: "HVAC Installation" },
      { to: routes.indoorAirQuality, label: "Indoor Air Quality" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
    ],
  },
  [routes.commercialHvac]: {
    path: routes.commercialHvac,
    title: "Commercial HVAC",
    metaTitle: "Commercial HVAC in Midvale & Salt Lake Valley | Paul Brothers",
    metaDescription:
      "Commercial HVAC repair, maintenance, and installation in Midvale and the Salt Lake Valley. Keep your business comfortable. Free estimates — call Paul Brothers.",
    headline: "Commercial HVAC Services",
    intro:
      "HVAC problems disrupt your team and customers. Paul Brothers provides commercial heating and cooling repair, maintenance, and installation for offices, retail, and light commercial properties in the Salt Lake Valley.",
    body: [
      "We prioritize fast diagnostics, minimal downtime, and clear communication so you know what to expect before work begins.",
      "Larger commercial projects and statewide work may be available depending on scope and schedule — call to discuss your building's needs.",
    ],
    highlights: [
      "Commercial AC & heating repair",
      "Preventive maintenance",
      "System installation & replacement",
      "Rooftop & split systems",
      "Upfront commercial estimates",
    ],
    relatedServices: [
      { to: routes.hvacInstallation, label: "HVAC Installation" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
      { to: routes.acRepair, label: "AC Repair" },
    ],
  },
};

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
