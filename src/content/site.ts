import { routes } from "@/lib/routes";

/** Central business copy and contact details for the site. */

export const site = {
  name: "Paul Brothers Heating & Air",
  shortName: "Paul Brothers",
  tagline: "Trusted HVAC Services in Midvale & Salt Lake County",
  description:
    "Family-owned, licensed and insured HVAC experts serving Midvale, Utah and all of Salt Lake County. Free estimates, honest second opinions, and 24/7 emergency service.",
  hero: {
    headline: "Heating & Air Conditioning Services in Midvale, Utah",
    subheadline:
      "Need HVAC help today? Paul Brothers Heating & Air provides AC repair, furnace repair, HVAC installation, ductwork, indoor air quality services, and 24/7 emergency HVAC service in Midvale, West Jordan, Sandy, Murray, South Jordan, and nearby Salt Lake County communities.",
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
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=7042+Commerce+Park+Dr+%23162,+Midvale,+UT+84047",
  },
  serviceAreas: [
    "Midvale",
    "West Jordan",
    "Sandy",
    "Murray",
    "South Jordan",
    "Salt Lake City",
    "Draper",
    "Taylorsville",
    "Cottonwood Heights",
    "Millcreek",
    "Holladay",
  ],
  trustSignals: [
    {
      title: "Family-Owned",
      description: "Local technicians who treat your home like our own.",
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
      description: "Heating or cooling emergency? We respond day and night.",
    },
    {
      title: "BBB A+ Accredited",
      description: "Recognized for integrity and customer satisfaction.",
    },
  ],
} as const;

export const navLinks = [
  { to: routes.home, label: "Home" },
  { to: routes.aboutUs, label: "About Us" },
  { to: routes.contactUs, label: "Contact" },
  { to: routes.blog, label: "Blog" },
] as const;

export const serviceNavLinks = [
  { to: routes.airConditioning, label: "Air Conditioning" },
  { to: routes.heating, label: "Heating" },
  { to: routes.ductwork, label: "Ductwork" },
  { to: routes.indoorAirQuality, label: "Indoor Air Quality" },
  { to: routes.commercial, label: "Commercial HVAC" },
  { to: routes.emergencyHvacRepair, label: "Emergency HVAC Repair" },
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
};

export const servicePages: Record<string, ServicePageContent> = {
  [routes.airConditioning]: {
    path: routes.airConditioning,
    title: "Air Conditioning",
    metaTitle: "AC Repair & Air Conditioning Services in Midvale, UT",
    metaDescription:
      "AC repair, installation, and maintenance in Midvale and Salt Lake County. Paul Brothers Heating & Air offers fast air conditioning service and free estimates.",
    headline: "Air Conditioning Services in Midvale & Salt Lake County",
    intro:
      "When Utah summers push your cooling system hard, you need a local HVAC team that responds quickly and fixes the problem right. Paul Brothers Heating & Air provides professional air conditioning repair, replacement, and maintenance for homes and businesses across Midvale, Sandy, Murray, West Jordan, and nearby communities.",
    body: [
      "Our technicians diagnose airflow issues, refrigerant problems, compressor failures, thermostat faults, and more — with clear explanations and upfront pricing before work begins.",
      "Whether your AC is blowing warm air, cycling constantly, or has stopped working entirely, we help you choose the most cost-effective path forward, including honest second opinions when you need them.",
    ],
    highlights: [
      "AC repair for all major brands",
      "System replacement & installation",
      "Seasonal maintenance & tune-ups",
      "Same-day service when available",
      "Emergency AC repair 24/7",
    ],
    relatedServices: [
      { to: routes.emergencyHvacRepair, label: "Emergency HVAC Repair" },
      { to: routes.heating, label: "Heating Services" },
      { to: routes.indoorAirQuality, label: "Indoor Air Quality" },
    ],
  },
  [routes.heating]: {
    path: routes.heating,
    title: "Heating",
    metaTitle: "Furnace Repair & Heating Services in Midvale, UT",
    metaDescription:
      "Furnace repair, installation, and heating service in Midvale and Salt Lake County. Licensed technicians, free estimates, and 24/7 emergency heating repair.",
    headline: "Heating & Furnace Services in Midvale, Utah",
    intro:
      "A reliable furnace is essential through cold Utah winters. Paul Brothers Heating & Air provides expert heating repair, furnace installation, and maintenance to keep your home safe, warm, and efficient throughout Salt Lake County.",
    body: [
      "From ignitor and blower motor issues to heat exchanger concerns and thermostat problems, our licensed technicians perform thorough diagnostics and safe, code-compliant repairs.",
      "If your system is aging or underperforming, we help you evaluate repair versus replacement with transparent recommendations — never pressure, just honest guidance.",
    ],
    highlights: [
      "Furnace repair & troubleshooting",
      "Heating system installation",
      "Preventive maintenance plans",
      "Safety-focused inspections",
      "Emergency heating repair 24/7",
    ],
    relatedServices: [
      { to: routes.emergencyHvacRepair, label: "Emergency HVAC Repair" },
      { to: routes.airConditioning, label: "Air Conditioning" },
      { to: routes.ductwork, label: "Ductwork Services" },
    ],
  },
  [routes.ductwork]: {
    path: routes.ductwork,
    title: "Ductwork",
    metaTitle: "Duct Repair & Ductwork Services in Midvale, UT",
    metaDescription:
      "Duct repair, sealing, and installation in Midvale and Salt Lake County. Improve airflow, comfort, and HVAC efficiency with Paul Brothers Heating & Air.",
    headline: "Ductwork Repair & Installation in Salt Lake County",
    intro:
      "Leaky or poorly designed ductwork wastes energy and creates hot and cold spots throughout your home. Paul Brothers Heating & Air provides duct repair, sealing, and replacement to restore balanced airflow and better comfort.",
    body: [
      "We inspect duct runs for leaks, disconnections, insulation gaps, and sizing issues that reduce system performance and drive up utility bills.",
      "Proper ductwork helps your heating and cooling equipment work smarter — delivering consistent temperatures room to room across Midvale, Sandy, Murray, and surrounding areas.",
    ],
    highlights: [
      "Duct leak detection & sealing",
      "Duct repair & replacement",
      "Improved airflow balance",
      "Better HVAC efficiency",
      "Cleaner, more even comfort",
    ],
    relatedServices: [
      { to: routes.airConditioning, label: "Air Conditioning" },
      { to: routes.heating, label: "Heating Services" },
      { to: routes.indoorAirQuality, label: "Indoor Air Quality" },
    ],
  },
  [routes.indoorAirQuality]: {
    path: routes.indoorAirQuality,
    title: "Indoor Air Quality",
    metaTitle: "Indoor Air Quality Services in Midvale, UT",
    metaDescription:
      "Air filtration, purification, humidifiers, and indoor air quality solutions in Midvale and Salt Lake County. Breathe easier with Paul Brothers Heating & Air.",
    headline: "Indoor Air Quality Solutions for Utah Homes",
    intro:
      "Dust, allergens, dry winter air, and poor filtration affect how your home feels and how your HVAC system performs. Paul Brothers Heating & Air installs and services indoor air quality products that help your family breathe cleaner, healthier air.",
    body: [
      "We offer whole-home air filtration, purification, humidification, and ventilation solutions tailored to your home's layout and comfort needs.",
      "Better indoor air quality supports allergy relief, reduces dust buildup, and helps your heating and cooling system run more efficiently year-round.",
    ],
    highlights: [
      "Whole-home air filtration",
      "Air purifiers & UV options",
      "Humidifiers & dehumidifiers",
      "Allergen & dust reduction",
      "Integrated HVAC solutions",
    ],
    relatedServices: [
      { to: routes.ductwork, label: "Ductwork Services" },
      { to: routes.airConditioning, label: "Air Conditioning" },
      { to: routes.commercial, label: "Commercial HVAC" },
    ],
  },
  [routes.commercial]: {
    path: routes.commercial,
    title: "Commercial HVAC",
    metaTitle: "Commercial HVAC Services in Midvale & Salt Lake County",
    metaDescription:
      "Commercial HVAC repair, maintenance, and installation in Midvale and Salt Lake County. Keep your business comfortable with Paul Brothers Heating & Air.",
    headline: "Commercial HVAC Services in Salt Lake County",
    intro:
      "Comfort problems in your business cost productivity and customer confidence. Paul Brothers Heating & Air provides commercial HVAC repair, maintenance, and installation for offices, retail spaces, and light commercial properties across the Wasatch Front.",
    body: [
      "We work to minimize downtime with efficient diagnostics, clear communication, and reliable repairs that keep your team and customers comfortable.",
      "From rooftop units to split systems, our licensed technicians deliver professional service backed by free estimates and upfront pricing.",
    ],
    highlights: [
      "Commercial AC & heating repair",
      "Preventive maintenance plans",
      "System installation & replacement",
      "Minimal business disruption",
      "Reliable local service team",
    ],
    relatedServices: [
      { to: routes.emergencyHvacRepair, label: "Emergency HVAC Repair" },
      { to: routes.airConditioning, label: "Air Conditioning" },
      { to: routes.heating, label: "Heating Services" },
    ],
  },
  [routes.emergencyHvacRepair]: {
    path: routes.emergencyHvacRepair,
    title: "Emergency HVAC Repair",
    metaTitle: "24/7 Emergency HVAC Repair in Midvale, UT",
    metaDescription:
      "24/7 emergency HVAC repair in Midvale and Salt Lake County. No heat or AC? Call or text Paul Brothers Heating & Air anytime for fast emergency service.",
    headline: "24/7 Emergency HVAC Repair in Midvale & Salt Lake County",
    intro:
      "Heating and cooling emergencies don't wait for business hours. Paul Brothers Heating & Air provides 24/7 emergency HVAC repair when your furnace quits on a cold night or your AC fails during a heat wave.",
    body: [
      "Our emergency team serves Midvale, West Jordan, Sandy, Murray, South Jordan, and surrounding Salt Lake County communities with fast response times and fully stocked service vehicles.",
      "Call or text us anytime — we'll help restore comfort quickly with honest diagnostics and professional repairs you can trust.",
    ],
    highlights: [
      "Available 24 hours a day, 7 days a week",
      "Fast response across Salt Lake County",
      "Emergency AC & furnace repair",
      "Licensed & insured technicians",
      "Call or text for immediate help",
    ],
    relatedServices: [
      { to: routes.airConditioning, label: "Air Conditioning" },
      { to: routes.heating, label: "Heating Services" },
      { to: routes.contactUs, label: "Contact Us" },
    ],
  },
};

export const homeServiceCards = [
  {
    to: routes.airConditioning,
    title: "Air Conditioning",
    summary: "AC repair, installation, and maintenance for Utah summers.",
  },
  {
    to: routes.heating,
    title: "Heating",
    summary: "Furnace repair, installation, and reliable winter comfort.",
  },
  {
    to: routes.ductwork,
    title: "Ductwork",
    summary: "Duct repair, sealing, and replacement for better airflow.",
  },
  {
    to: routes.indoorAirQuality,
    title: "Indoor Air Quality",
    summary: "Filtration, purification, and whole-home air solutions.",
  },
  {
    to: routes.commercial,
    title: "Commercial HVAC",
    summary: "Repair and maintenance for offices and light commercial spaces.",
  },
  {
    to: routes.emergencyHvacRepair,
    title: "Emergency HVAC Repair",
    summary: "24/7 emergency heating and cooling service when you need it most.",
  },
] as const;

export const reviews = [
  {
    quote:
      "Paul Brothers showed up quickly, explained everything clearly, and had our AC running the same day. Highly recommend!",
    author: "Homeowner in Sandy",
  },
  {
    quote:
      "Honest pricing and great communication. They gave us a second opinion that saved us from an unnecessary replacement.",
    author: "Customer in Murray",
  },
  {
    quote:
      "Our furnace went out on a cold night and they came out fast. Professional, friendly, and fairly priced.",
    author: "Family in West Jordan",
  },
] as const;

export const aboutPage = {
  metaTitle: "About Paul Brothers Heating & Air in Midvale, UT",
  metaDescription:
    "Family-owned, licensed and insured HVAC company in Midvale, Utah. Free estimates, second opinions, BBB A+ Accredited, and 24/7 emergency service across Salt Lake County.",
  headline: "About Paul Brothers Heating & Air",
  intro:
    "Paul Brothers Heating & Air is a family-owned HVAC company based in Midvale, Utah. We serve homeowners and businesses throughout Salt Lake County with honest service, skilled workmanship, and a commitment to treating every customer like family.",
  body: [
    "Our licensed and insured technicians bring years of hands-on experience to every AC repair, furnace service, installation, and emergency call. We believe in upfront pricing, free estimates, and second opinions when you want a fresh perspective on your system.",
    "As a BBB A+ Accredited Business with strong Google reviews, we've built our reputation on reliability, clear communication, and getting the job done right the first time.",
  ],
};

export const contactPage = {
  metaTitle: "Contact Paul Brothers Heating & Air in Midvale, UT",
  metaDescription:
    "Contact Paul Brothers Heating & Air for a free HVAC estimate in Midvale and Salt Lake County. Call 385-787-8077, text 385-787-7077, or email us today.",
  headline: "Contact Paul Brothers Heating & Air",
  intro:
    "Ready for a free estimate or need HVAC service today? Call, text, or email our Midvale team — we serve all of Salt Lake County with fast, professional heating and cooling service.",
};

export const blogPage = {
  metaTitle: "HVAC Tips & Blog | Paul Brothers Heating & Air",
  metaDescription:
    "HVAC tips, maintenance advice, and local heating and cooling insights from Paul Brothers Heating & Air in Midvale, Utah.",
  headline: "HVAC Tips & Resources",
  intro:
    "Helpful heating and cooling advice for homeowners and businesses in Midvale and Salt Lake County. New articles coming soon.",
};
