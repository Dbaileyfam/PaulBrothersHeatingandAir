/** Central business copy and contact details for the site. */

export const site = {
  name: "Paul Brothers Heating & Air",
  shortName: "Paul Brothers",
  tagline: "Trusted HVAC Services in Midvale & Salt Lake County",
  description:
    "Family-owned, licensed and insured HVAC experts serving Midvale, Utah and all of Salt Lake County. Free estimates, honest second opinions, and 24/7 emergency service.",
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

export const services = [
  {
    id: "ac-repair",
    title: "AC Repair in Midvale & Salt Lake County",
    summary:
      "Fast air conditioning diagnostics and repair to restore comfort when Utah summers heat up.",
    highlights: [
      "Same-day service when available",
      "All major brands serviced",
      "Transparent repair options",
    ],
  },
  {
    id: "furnace-repair",
    title: "Furnace Repair",
    summary:
      "Reliable furnace troubleshooting and repair to keep your home warm through cold Utah winters.",
    highlights: [
      "Safety-focused inspections",
      "Efficient heating restored",
      "Prevent costly breakdowns",
    ],
  },
  {
    id: "hvac-installation",
    title: "HVAC Installation",
    summary:
      "Professional system replacements and new installations sized correctly for your home or business.",
    highlights: [
      "Energy-efficient equipment",
      "Proper sizing & placement",
      "Clean, code-compliant installs",
    ],
  },
  {
    id: "ductwork",
    title: "Ductwork Services",
    summary:
      "Duct repair, sealing, and replacement to improve airflow, efficiency, and comfort room to room.",
    highlights: [
      "Leak detection & sealing",
      "Balanced airflow",
      "Better indoor comfort",
    ],
  },
  {
    id: "indoor-air-quality",
    title: "Indoor Air Quality",
    summary:
      "Filtration, humidification, and air purification solutions for healthier indoor environments.",
    highlights: [
      "Allergen & dust reduction",
      "Whole-home air solutions",
      "Cleaner, fresher air",
    ],
  },
  {
    id: "emergency-hvac",
    title: "Emergency HVAC Service",
    summary:
      "24/7 emergency heating and cooling service across Salt Lake County when you need help now.",
    highlights: [
      "Available nights & weekends",
      "Rapid response times",
      "No heat or AC? Call us first",
    ],
  },
  {
    id: "commercial-hvac",
    title: "Commercial HVAC",
    summary:
      "Maintenance, repair, and installation for offices, retail, and light commercial spaces.",
    highlights: [
      "Minimal business downtime",
      "Scheduled maintenance plans",
      "Reliable climate control",
    ],
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

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#service-areas", label: "Service Areas" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;
