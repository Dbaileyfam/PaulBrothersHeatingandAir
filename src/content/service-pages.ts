import { routes } from "@/lib/routes";

export type ServiceContentItem = {
  id: string;
  title: string;
  description: string;
};

export type ServiceSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  items?: ServiceContentItem[];
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServicePageContent = {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  highlights: string[];
  sections: ServiceSection[];
  process?: ServiceProcessStep[];
  brands?: string[];
  faqs?: { question: string; answer: string }[];
  relatedServices: { to: string; label: string }[];
  cta?: { headline: string; subtext: string };
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
      "When Utah summers heat up, your air conditioner has to keep up. Paul Brothers Heating & Air provides expert AC repair for homeowners and businesses in Midvale and across the Salt Lake Valley — with same-day service when available and 24/7 emergency help.",
    highlights: [
      "All major AC brands",
      "Carrier, Trane, Rheem & more",
      "Same-day service when available",
      "24/7 emergency AC repair",
      "Upfront pricing & free estimates",
      "Mobile technicians — we come to you",
    ],
    sections: [
      {
        id: "overview",
        title: "Expert Air Conditioner Repair",
        paragraphs: [
          "Summers in Utah can be intense. When your AC blows warm air, won't turn on, or struggles to keep up, you need a local HVAC team that responds fast and explains your options clearly.",
          "Our Midvale-based technicians diagnose refrigerant issues, compressors, capacitors, thermostats, airflow restrictions, and electrical faults. We work on all makes and models and always walk you through repair versus replacement before any work begins.",
        ],
      },
      {
        id: "signs",
        title: "Signs You Need AC Repair",
        paragraphs: [
          "Catching problems early helps you avoid bigger breakdowns and higher energy bills. Call Paul Brothers if you notice any of these issues:",
        ],
        items: [
          {
            id: "insufficient-cooling",
            title: "Insufficient Cooling",
            description:
              "If your AC runs constantly but your home still feels warm, you may have a refrigerant leak, failing compressor, or fan motor problem. We diagnose the root cause and restore cooling capacity.",
          },
          {
            id: "weak-airflow",
            title: "Weak Airflow",
            description:
              "Barely noticeable airflow often points to clogged filters, duct obstructions, or a failing blower motor. Reduced airflow hurts comfort and can create uneven temperatures throughout your home.",
          },
          {
            id: "strange-noises",
            title: "Strange Noises or Smells",
            description:
              "Grinding, banging, or squealing sounds — or musty odors from vents — are warning signs. Ignoring them can lead to more expensive damage or poor indoor air quality.",
          },
          {
            id: "short-cycling",
            title: "Short Cycling",
            description:
              "An AC that turns on and off every few minutes wastes energy and wears out components faster. This often indicates thermostat issues, dirty coils, or an oversized or undersized unit.",
          },
          {
            id: "high-bills",
            title: "Rising Energy Bills",
            description:
              "When your electric bill spikes without a change in usage, your AC may be working harder than it should. A tune-up or targeted repair can often restore efficiency.",
          },
        ],
      },
      {
        id: "emergency",
        title: "24/7 Emergency AC Repair",
        paragraphs: [
          "A broken air conditioner on the hottest day of the year is an emergency. Paul Brothers offers 24/7 emergency AC repair across our core Salt Lake Valley service area, including Midvale, Sandy, Murray, West Jordan, and nearby communities.",
          "Call or text when you need cooling restored fast. We'll give you an honest arrival window and upfront pricing before we start work.",
        ],
      },
      {
        id: "why-us",
        title: "Why Midvale Homeowners Choose Paul Brothers",
        bullets: [
          "Family-owned company with nearly 200 five-star reviews",
          "Licensed, insured, and BBB A+ Accredited",
          "Free estimates and no-pressure second opinions",
          "Honest repair-versus-replace recommendations",
          "Based in Midvale — fast response across the valley",
        ],
      },
    ],
    process: [
      {
        title: "Call or Text",
        description:
          "Reach us at 385-787-8077 or text 385-787-7077. Tell us what's happening with your AC and we'll schedule the soonest available appointment — including emergency service when needed.",
      },
      {
        title: "Diagnose",
        description:
          "A licensed technician inspects your system, tests components, and identifies the problem. We explain what we find in plain language before recommending any repairs.",
      },
      {
        title: "Upfront Estimate",
        description:
          "You receive clear pricing before work begins. No surprise fees, no pressure — just honest options so you can decide what's right for your home and budget.",
      },
      {
        title: "Repair & Restore",
        description:
          "We complete the repair with quality parts and workmanship, then verify your system is cooling properly before we leave. Most valley calls are completed same-day.",
      },
    ],
    brands: ["Carrier", "Trane", "Rheem", "Lennox", "Goodman", "Bryant"],
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
      {
        question: "What AC brands do you repair?",
        answer:
          "We service all major brands including Carrier, Trane, Rheem, Lennox, Goodman, and Bryant. Our technicians have years of experience across residential and light commercial systems.",
      },
      {
        question: "Should I repair or replace my air conditioner?",
        answer:
          "It depends on the age of your unit, repair cost, and efficiency. If your AC is over 10 years old and needs an expensive repair, replacement may save money long-term. We'll give you an honest recommendation — never a hard sell.",
      },
    ],
    relatedServices: [
      { to: routes.hvacInstallation, label: "HVAC Installation" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
      { to: routes.indoorAirQuality, label: "Indoor Air Quality" },
    ],
    cta: {
      headline: "AC Not Keeping Up?",
      subtext: "Call or text for same-day AC repair or 24/7 emergency service in the Salt Lake Valley.",
    },
  },

  [routes.furnaceRepair]: {
    path: routes.furnaceRepair,
    title: "Furnace Repair",
    metaTitle: "Furnace Repair in Midvale & the Salt Lake Valley | Paul Brothers",
    metaDescription:
      "Furnace repair in Midvale and the Salt Lake Valley. 24/7 emergency heating repair, safety-focused diagnostics, and free estimates. Licensed technicians. Call 385-787-8077.",
    headline: "Furnace Repair in Midvale & the Salt Lake Valley",
    intro:
      "No heat on a cold Utah night is stressful. Paul Brothers Heating & Air provides reliable furnace repair and emergency heating service throughout Midvale and the Salt Lake Valley — with safety-focused diagnostics and fair, upfront pricing.",
    highlights: [
      "Furnace & heat pump repair",
      "24/7 emergency heating service",
      "Safety-focused inspections",
      "All major furnace brands",
      "Free estimates & second opinions",
      "Ignitors, blowers, heat exchangers & more",
    ],
    sections: [
      {
        id: "overview",
        title: "Reliable Heater Repair for Valley Homes",
        paragraphs: [
          "When the forecast calls for cold weather, the last thing you want is a furnace that won't start. Paul Brothers has helped Midvale and Salt Lake Valley homeowners restore heat quickly for years — earning strong reviews for honest work and fast response.",
          "Our technicians repair ignitors, blower motors, heat exchangers, limit switches, thermostats, and more. Every job is code-compliant, and we always explain repair-versus-replace options before you commit.",
        ],
      },
      {
        id: "signs",
        title: "Signs Your Furnace Needs Repair",
        items: [
          {
            id: "no-heat",
            title: "No Heat or Weak Heat",
            description:
              "If your furnace runs but rooms stay cold, you may have a failing blower, clogged filter, or ignition problem. We trace the issue and restore safe, even heating.",
          },
          {
            id: "strange-noises",
            title: "Banging, Rattling, or Squealing",
            description:
              "Unusual sounds often mean loose parts, a failing blower motor, or delayed ignition. These issues should be addressed promptly to prevent further damage.",
          },
          {
            id: "yellow-flame",
            title: "Yellow or Flickering Flame",
            description:
              "A healthy gas furnace flame should be blue. Yellow or flickering flames can signal incomplete combustion or a cracked heat exchanger — a safety concern that needs immediate attention.",
          },
          {
            id: "frequent-cycling",
            title: "Frequent On-and-Off Cycling",
            description:
              "Short cycling wastes fuel and stresses components. Common causes include dirty filters, thermostat problems, or an overheating furnace shutting itself down.",
          },
          {
            id: "high-bills",
            title: "Unusually High Gas Bills",
            description:
              "An inefficient furnace works harder to maintain temperature. A professional inspection can identify whether repair, maintenance, or replacement makes the most sense.",
          },
        ],
      },
      {
        id: "emergency",
        title: "24/7 Emergency Heating Repair",
        paragraphs: [
          "Furnace failures don't wait for business hours. Paul Brothers offers 24/7 emergency heating repair in our Salt Lake Valley service area. If your heat goes out after hours, call or text — we'll work to get your family warm again as quickly as possible.",
          "We also service heat pumps and related heating equipment, not just traditional gas furnaces.",
        ],
      },
      {
        id: "safety",
        title: "Safety-First Furnace Service",
        paragraphs: [
          "Heating systems involve gas, combustion, and electrical components. Our licensed technicians follow safety protocols on every call — checking for carbon monoxide risks, verifying proper venting, and ensuring your system operates within code.",
        ],
        bullets: [
          "Heat exchanger and combustion inspections",
          "Carbon monoxide safety checks",
          "Gas line and ignition system testing",
          "Thermostat and airflow verification",
        ],
      },
    ],
    process: [
      {
        title: "Call or Text",
        description:
          "Contact us at 385-787-8077 for emergency heating repair or to schedule a service call. We'll ask a few questions to understand your situation and dispatch a technician.",
      },
      {
        title: "Inspect & Diagnose",
        description:
          "Our technician performs a thorough inspection of your furnace or heat pump, identifies the failure, and checks for any safety concerns before recommending repairs.",
      },
      {
        title: "Clear Options",
        description:
          "You'll receive upfront pricing and honest guidance on whether repair makes sense or if replacement would be the better long-term value.",
      },
      {
        title: "Restore Heat",
        description:
          "We complete the repair, test your system, and make sure your home is heating safely and efficiently before we leave.",
      },
    ],
    brands: ["Carrier", "Trane", "Rheem", "Lennox", "Goodman", "York"],
    faqs: [
      {
        question: "What should I do if my furnace won't start?",
        answer:
          "Check your thermostat setting and air filter first. If the system still won't run, call us — we'll diagnose the issue and restore heat safely. Don't attempt gas-related repairs yourself.",
      },
      {
        question: "Do you repair heat pumps?",
        answer:
          "Yes. We service furnaces, heat pumps, and related heating equipment throughout the Salt Lake Valley.",
      },
      {
        question: "How do I know if my furnace is unsafe?",
        answer:
          "Warning signs include a yellow burner flame, soot around the furnace, unusual odors, or a carbon monoxide detector alert. If you suspect a safety issue, turn off the system and call us immediately.",
      },
      {
        question: "Do you offer emergency furnace repair?",
        answer:
          "Yes. We provide 24/7 emergency heating repair across the Salt Lake Valley. Call 385-787-8077 any time your heat goes out.",
      },
    ],
    relatedServices: [
      { to: routes.hvacInstallation, label: "HVAC Installation" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
      { to: routes.ductwork, label: "Ductwork" },
    ],
    cta: {
      headline: "No Heat? We're On the Way.",
      subtext: "24/7 emergency furnace repair in Midvale and the Salt Lake Valley. Call or text now.",
    },
  },

  [routes.hvacInstallation]: {
    path: routes.hvacInstallation,
    title: "HVAC Installation",
    metaTitle: "AC & Furnace Installation in Midvale, UT | Paul Brothers",
    metaDescription:
      "AC and furnace installation and replacement in Midvale and the Salt Lake Valley. Free estimates, quality equipment, and professional installs. Call Paul Brothers Heating & Air.",
    headline: "AC & Furnace Installation / Replacement",
    intro:
      "Whether you're replacing an aging system, building new, or upgrading for better efficiency — Paul Brothers installs air conditioners, furnaces, and complete HVAC systems for Midvale and Salt Lake Valley homes and businesses.",
    highlights: [
      "AC installation & replacement",
      "Furnace installation & replacement",
      "System sizing & load calculations",
      "Energy-efficient equipment",
      "Free installation estimates",
      "Professional removal of old equipment",
    ],
    sections: [
      {
        id: "overview",
        title: "Professional HVAC Installation",
        paragraphs: [
          "Installing a new AC or furnace is a major investment. Paul Brothers helps you choose the right equipment for your home's size, comfort goals, and budget — then handles removal, installation, and a full walkthrough of your new system.",
          "Our trained installers work with trusted brands and follow best practices for sizing, duct compatibility, and clean workmanship. Every install includes proper testing before we consider the job complete.",
        ],
      },
      {
        id: "choosing",
        title: "Choosing the Right System",
        paragraphs: [
          "Buying new HVAC equipment isn't as simple as picking the cheapest unit. The right system depends on several factors our team helps you evaluate:",
        ],
        items: [
          {
            id: "sizing",
            title: "Proper Sizing",
            description:
              "Bigger isn't always better. Your system needs to match your home's square footage, layout, and insulation. Oversized or undersized equipment wastes energy and creates comfort problems.",
          },
          {
            id: "efficiency",
            title: "Energy Efficiency",
            description:
              "Modern AC and furnace units run far more efficiently than equipment from 10–15 years ago. Higher-efficiency models can significantly lower your utility bills over time.",
          },
          {
            id: "air-quality",
            title: "Indoor Air Quality",
            description:
              "Look for systems that support quality filtration and work with air purifiers or humidifiers if your home needs them. We integrate IAQ solutions during installation.",
          },
          {
            id: "ductwork",
            title: "Ductwork Compatibility",
            description:
              "Your ducts must properly connect to your new unit. Leaky or undersized ductwork undermines even the best equipment — we inspect and address duct issues as part of the project.",
          },
        ],
      },
      {
        id: "replacement-signs",
        title: "When It's Time to Replace",
        bullets: [
          "System is over 10–15 years old",
          "Frequent or costly repairs to stay running",
          "Not cooling or heating evenly",
          "Short cycling or running constantly",
          "Strange noises or odors from equipment",
          "Utility bills keep climbing",
          "Some rooms never reach a comfortable temperature",
        ],
      },
      {
        id: "benefits",
        title: "Benefits of a New HVAC System",
        paragraphs: [
          "A new air conditioner or furnace delivers more than reliable comfort. Today's equipment is quieter, more efficient, and often includes smart thermostat compatibility. Many homeowners see lower monthly energy costs and fewer emergency repair calls after upgrading.",
          "For larger replacement projects outside the valley, we may be able to schedule statewide installation depending on scope and timing — call for an honest answer.",
        ],
      },
    ],
    process: [
      {
        title: "Free Estimate",
        description:
          "We visit your home, assess your current system and comfort needs, and recommend equipment options with clear pricing. No obligation, no pressure.",
      },
      {
        title: "Equipment Selection",
        description:
          "We help you compare efficiency ratings, brands, and features so you choose a system that fits your home and budget.",
      },
      {
        title: "Professional Install",
        description:
          "Our team removes old equipment, installs your new system to manufacturer specifications, and handles refrigerant, gas connections, and electrical safely.",
      },
      {
        title: "Walkthrough & Warranty",
        description:
          "Before we leave, we test everything, show you how to operate your new system, and explain warranty coverage and maintenance recommendations.",
      },
    ],
    brands: ["Carrier", "Trane", "Rheem", "Lennox", "Goodman", "Bryant"],
    faqs: [
      {
        question: "How long does HVAC installation take?",
        answer:
          "Most residential AC or furnace replacements are completed in one day. Full system replacements or complex ductwork may take longer. We'll give you a clear timeline during your estimate.",
      },
      {
        question: "Do you offer free installation estimates?",
        answer:
          "Yes. We provide free, no-pressure estimates for AC and furnace installation and replacement throughout the Salt Lake Valley.",
      },
      {
        question: "Can you install both AC and furnace at the same time?",
        answer:
          "Absolutely. Many homeowners replace both systems together for better efficiency and matched performance. We handle complete system installations.",
      },
    ],
    relatedServices: [
      { to: routes.acRepair, label: "AC Repair" },
      { to: routes.furnaceRepair, label: "Furnace Repair" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
    ],
    cta: {
      headline: "Ready for a New System?",
      subtext: "Get a free installation estimate from Paul Brothers — Midvale's trusted HVAC team.",
    },
  },

  [routes.hvacMaintenance]: {
    path: routes.hvacMaintenance,
    title: "HVAC Maintenance",
    metaTitle: "HVAC Maintenance in Midvale & Salt Lake Valley | Paul Brothers",
    metaDescription:
      "Heating and cooling maintenance and tune-ups in Midvale and the Salt Lake Valley. Keep your AC and furnace running efficiently. Schedule a seasonal HVAC checkup today.",
    headline: "Heating & Cooling Maintenance",
    intro:
      "Regular HVAC maintenance catches small problems before they become expensive breakdowns. Paul Brothers provides seasonal AC and furnace tune-ups for homeowners in Midvale and across the Salt Lake Valley.",
    highlights: [
      "Spring AC tune-ups",
      "Fall furnace inspections",
      "Filter & airflow checks",
      "Efficiency & safety testing",
      "Prevent costly breakdowns",
      "Extend equipment lifespan",
    ],
    sections: [
      {
        id: "overview",
        title: "Why HVAC Maintenance Matters",
        paragraphs: [
          "Think of maintenance like a checkup for your heating and cooling system. Our technicians inspect, clean, and test your equipment at the start of each season so it runs efficiently through Utah's hot summers and cold winters.",
          "Skipping maintenance often means parts break at the worst possible time — like the hottest night of summer or the coldest morning of winter. A seasonal tune-up helps you avoid those emergencies and keeps energy bills in check.",
        ],
      },
      {
        id: "ac-maintenance",
        title: "AC Maintenance & Tune-Ups",
        paragraphs: [
          "Spring is the best time to service your air conditioner before peak cooling season. Our AC maintenance visits typically include:",
        ],
        bullets: [
          "Complete system inspection and performance testing",
          "Cleaning of coils and condensate drain",
          "Refrigerant level check",
          "Electrical connection and capacitor testing",
          "Thermostat calibration",
          "Air filter inspection and replacement guidance",
          "Identification of worn parts before they fail",
        ],
      },
      {
        id: "furnace-maintenance",
        title: "Furnace Maintenance & Tune-Ups",
        paragraphs: [
          "Fall furnace maintenance helps ensure safe, reliable heat all winter. Our heating tune-ups include:",
        ],
        bullets: [
          "Burner and heat exchanger inspection",
          "Blower motor and airflow testing",
          "Safety controls and limit switch checks",
          "Gas pressure and ignition system testing",
          "Carbon monoxide safety verification",
          "Filter replacement and duct airflow review",
        ],
      },
      {
        id: "benefits",
        title: "Benefits of Regular Maintenance",
        items: [
          {
            id: "fewer-breakdowns",
            title: "Fewer Emergency Breakdowns",
            description:
              "Catching worn parts early prevents middle-of-the-night failures. Maintenance is the easiest way to avoid emergency repair calls during peak season.",
          },
          {
            id: "lower-bills",
            title: "Lower Energy Bills",
            description:
              "A clean, well-tuned system runs more efficiently. Your AC cycles less, your furnace uses less fuel, and your utility bills reflect the savings.",
          },
          {
            id: "longer-life",
            title: "Longer Equipment Life",
            description:
              "Regular care reduces wear on compressors, blowers, and heat exchangers — helping your system last years longer before replacement is needed.",
          },
          {
            id: "better-air",
            title: "Better Indoor Air Quality",
            description:
              "Clean filters and coils mean less dust and allergens circulating through your home. Maintenance supports healthier air for your family.",
          },
        ],
      },
    ],
    process: [
      {
        title: "Schedule",
        description:
          "Book a spring AC tune-up or fall furnace inspection before peak season. Call 385-787-8077 or text 385-787-7077 to find a time that works.",
      },
      {
        title: "Inspect",
        description:
          "Our technician performs a comprehensive inspection of your heating or cooling system, checking every critical component.",
      },
      {
        title: "Tune & Clean",
        description:
          "We clean, adjust, and test your equipment for peak performance and safety — replacing small wear items when needed.",
      },
      {
        title: "Report & Recommend",
        description:
          "You receive a clear summary of your system's condition and any recommended follow-up, with no pressure to buy unnecessary services.",
      },
    ],
    faqs: [
      {
        question: "How often should I schedule HVAC maintenance?",
        answer:
          "We recommend one AC tune-up in spring and one furnace inspection in fall — twice a year for homes that use both heating and cooling.",
      },
      {
        question: "Can maintenance prevent breakdowns?",
        answer:
          "While no service can guarantee zero failures, maintenance significantly reduces the risk. Our technicians often catch failing capacitors, worn belts, and dirty coils before they cause a complete breakdown.",
      },
      {
        question: "Do you maintain all brands?",
        answer:
          "Yes. We service and maintain all major AC and furnace brands throughout the Salt Lake Valley.",
      },
    ],
    relatedServices: [
      { to: routes.acRepair, label: "AC Repair" },
      { to: routes.furnaceRepair, label: "Furnace Repair" },
      { to: routes.ductwork, label: "Ductwork" },
    ],
    cta: {
      headline: "Schedule Your Seasonal Tune-Up",
      subtext: "Beat the rush — book AC or furnace maintenance before peak season hits Utah.",
    },
  },

  [routes.indoorAirQuality]: {
    path: routes.indoorAirQuality,
    title: "Indoor Air Quality",
    metaTitle: "Indoor Air Quality Services in Midvale, UT | Paul Brothers",
    metaDescription:
      "Indoor air quality services in Midvale and the Salt Lake Valley — air filtration, purifiers, humidifiers, and dehumidifiers. Breathe easier at home. Free estimates.",
    headline: "Indoor Air Quality Services",
    intro:
      "Indoor air pollution is often worse than outdoor air. Dust, allergens, dry winter air, and poor filtration affect your family's comfort and health. Paul Brothers installs and services whole-home air quality solutions integrated with your HVAC system.",
    highlights: [
      "Whole-home air filtration",
      "Air purifiers & UV systems",
      "Humidifiers & dehumidifiers",
      "Allergen & dust reduction",
      "Integrated with your HVAC",
      "Free IAQ consultations",
    ],
    sections: [
      {
        id: "overview",
        title: "Cleaner Air for Your Home",
        paragraphs: [
          "Your HVAC system circulates all the air in your home multiple times per day. That makes it the ideal platform for improving indoor air quality — with the right filtration, purification, and humidity control products professionally installed.",
          "Paul Brothers evaluates your home's specific needs rather than pushing one-size-fits-all packages. Whether you battle dry winter air, excess humidity, dust, or allergens, we recommend solutions that work with your existing equipment.",
        ],
      },
      {
        id: "humidity",
        title: "Humidity Control",
        paragraphs: [
          "Utah's climate creates distinct humidity challenges. In winter, dry air irritates skin, throats, and sinuses and increases static electricity. In summer, excess moisture can promote mold and bacteria growth.",
        ],
        items: [
          {
            id: "humidifiers",
            title: "Whole-Home Humidifiers",
            description:
              "Bypass, fan-powered, and steam humidifiers integrate with your furnace to add moisture throughout your home. Benefits include improved comfort, reduced heating costs, less static, and relief from dry skin and irritated airways.",
          },
          {
            id: "dehumidifiers",
            title: "Whole-Home Dehumidifiers",
            description:
              "When moisture levels are too high, a whole-home dehumidifier reduces humidity, inhibits mold growth, and makes your home feel cooler without overworking your AC.",
          },
        ],
      },
      {
        id: "filtration",
        title: "Air Filtration & Purification",
        items: [
          {
            id: "filtration",
            title: "Advanced Air Filtration",
            description:
              "Upgrading from a basic filter to a high-efficiency media filter captures more dust, pollen, and pet dander — protecting your HVAC equipment and improving the air you breathe.",
          },
          {
            id: "purifiers",
            title: "Air Purifiers & UV Systems",
            description:
              "Whole-home air purifiers and UV germicidal lights neutralize bacteria, viruses, and odors as air passes through your duct system. Ideal for allergy sufferers and households concerned about airborne contaminants.",
          },
        ],
      },
      {
        id: "benefits",
        title: "Benefits of Better Indoor Air",
        bullets: [
          "Reduced allergy and asthma symptoms",
          "Less dust on surfaces and in ducts",
          "More comfortable humidity year-round",
          "Improved HVAC efficiency with cleaner coils and filters",
          "Healthier environment for children and seniors",
        ],
      },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We discuss your concerns — allergies, dryness, odors, dust — and evaluate your current HVAC setup to identify the best IAQ solutions.",
      },
      {
        title: "Recommendation",
        description:
          "You'll receive clear options for filtration, purification, or humidity control with upfront pricing. No pressure, just honest guidance.",
      },
      {
        title: "Installation",
        description:
          "Our technicians install whole-home products integrated with your existing system — humidifiers, dehumidifiers, purifiers, or UV lights.",
      },
      {
        title: "Ongoing Support",
        description:
          "We service and maintain IAQ equipment during regular HVAC maintenance visits so your air stays clean season after season.",
      },
    ],
    faqs: [
      {
        question: "Do I need a whole-home system or portable units?",
        answer:
          "Whole-home systems treat every room through your ductwork and require less daily maintenance than portable units. For most Midvale homeowners, integrated solutions deliver better results.",
      },
      {
        question: "Can you add a humidifier to my existing furnace?",
        answer:
          "Yes. We install bypass, fan-powered, and steam humidifiers on most existing HVAC systems. We'll confirm compatibility during your free estimate.",
      },
      {
        question: "Will better filtration help my allergies?",
        answer:
          "High-efficiency filtration and air purifiers significantly reduce pollen, pet dander, and dust mites in your home's air. Many customers report noticeable allergy relief after installation.",
      },
    ],
    relatedServices: [
      { to: routes.ductwork, label: "Ductwork" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
      { to: routes.commercialHvac, label: "Commercial HVAC" },
    ],
    cta: {
      headline: "Breathe Easier at Home",
      subtext: "Schedule a free indoor air quality consultation with Paul Brothers.",
    },
  },

  [routes.ductwork]: {
    path: routes.ductwork,
    title: "Ductwork",
    metaTitle: "Ductwork Repair & Installation in Midvale, UT | Paul Brothers",
    metaDescription:
      "Duct repair, sealing, and installation in Midvale and the Salt Lake Valley. Fix hot and cold spots and improve HVAC efficiency. Call for a free estimate.",
    headline: "Ductwork Repair & Installation",
    intro:
      "Most Utah homes use forced-air heating and cooling — and that means ductwork matters. Leaky, damaged, or poorly designed ducts waste energy and create hot and cold spots. Paul Brothers repairs, seals, and installs ductwork so conditioned air reaches every room.",
    highlights: [
      "Duct leak detection & sealing",
      "Duct repair & replacement",
      "New construction duct design",
      "Improved airflow balance",
      "Up to 30% energy savings potential",
      "Free ductwork estimates",
    ],
    sections: [
      {
        id: "overview",
        title: "Complete Ductwork Services",
        paragraphs: [
          "Your ducts are the delivery system for all heated and cooled air in your home. When they leak, sag, or were poorly designed, you pay more on utility bills and still can't get comfortable.",
          "Paul Brothers provides duct repair, sealing, replacement, and new construction design throughout Midvale and the Salt Lake Valley. We use advanced diagnostic tools to find problems other companies miss.",
        ],
      },
      {
        id: "repair",
        title: "Duct Repair & Sealing",
        paragraphs: [
          "Up to 30% of conditioned air can be lost through duct leaks. Signs of duct problems include uneven temperatures, whistling sounds, excess dust, and rising energy bills.",
          "Our repair process starts with a thorough inspection. We locate leaks, disconnections, and insulation gaps — then seal or repair them for improved airflow and efficiency.",
        ],
        bullets: [
          "Leak detection at joints and connections",
          "Sealing with professional-grade materials",
          "Insulation repair for ducts in attics and crawlspaces",
          "Reconnection of separated duct runs",
        ],
      },
      {
        id: "issues",
        title: "Common Duct Problems",
        items: [
          {
            id: "hot-cold-spots",
            title: "Hot & Cold Spots",
            description:
              "Rooms that are always too warm or too cold often signal duct leaks, blockages, or poor balancing. Targeted repairs can even out temperatures throughout your home.",
          },
          {
            id: "noises",
            title: "Whistling or Banging",
            description:
              "Air leaks create whistling sounds. Expansion and contraction of metal ducts can cause banging when the system cycles on. Both indicate ductwork that needs attention.",
          },
          {
            id: "high-bills",
            title: "High Energy Bills",
            description:
              "When heated or cooled air escapes before reaching your rooms, your system runs longer and costs more. Sealing ducts is one of the most cost-effective efficiency upgrades available.",
          },
          {
            id: "condensation",
            title: "Condensation & Mold Risk",
            description:
              "Condensation in ducts — often from poor insulation or temperature differences — can lead to mold growth. We identify the cause and recommend lasting fixes.",
          },
        ],
      },
      {
        id: "installation",
        title: "Ductwork Design & Installation",
        paragraphs: [
          "For new construction or whole-home conversions to forced air, ductwork design is critical. Poor layout creates rooms that never reach the right temperature — and fixing it after the fact is expensive.",
          "Paul Brothers has experience designing duct systems that distribute air evenly. Whether you're building new or retrofitting, we size and route ducts for optimal performance with your HVAC equipment.",
        ],
      },
    ],
    process: [
      {
        title: "Inspect",
        description:
          "We examine your ductwork for leaks, damage, insulation problems, and airflow restrictions — using diagnostic tools for accurate results.",
      },
      {
        title: "Diagnose",
        description:
          "You'll understand exactly what's wrong, what it's costing you, and what options exist to fix it — with clear, upfront pricing.",
      },
      {
        title: "Repair or Install",
        description:
          "Our team seals leaks, repairs damaged sections, or installs new duct runs with professional craftsmanship.",
      },
      {
        title: "Test & Verify",
        description:
          "We verify improved airflow and balanced temperatures before considering the job complete.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my ducts are leaking?",
        answer:
          "Look for gaps at joints, feel for air escaping near connections, or watch for uneven room temperatures and high energy bills. We offer professional leak testing if you're unsure.",
      },
      {
        question: "Can duct sealing really lower my bills?",
        answer:
          "Yes. The U.S. Department of Energy estimates duct leaks can waste 20–30% of conditioned air. Sealing is often one of the most affordable ways to improve HVAC efficiency.",
      },
      {
        question: "Do you install ductwork for new construction?",
        answer:
          "Yes. We design and install duct systems for new builds and major renovations throughout the Salt Lake Valley.",
      },
    ],
    relatedServices: [
      { to: routes.hvacInstallation, label: "HVAC Installation" },
      { to: routes.indoorAirQuality, label: "Indoor Air Quality" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
    ],
    cta: {
      headline: "Fix Hot & Cold Spots",
      subtext: "Get a free ductwork inspection and estimate from Paul Brothers.",
    },
  },

  [routes.commercialHvac]: {
    path: routes.commercialHvac,
    title: "Commercial HVAC",
    metaTitle: "Commercial HVAC in Midvale & Salt Lake Valley | Paul Brothers",
    metaDescription:
      "Commercial HVAC repair, maintenance, and installation in Midvale and the Salt Lake Valley. Keep your business comfortable. Free estimates — call Paul Brothers.",
    headline: "Commercial HVAC Services",
    intro:
      "HVAC problems disrupt your team, your customers, and your bottom line. Paul Brothers provides commercial heating and cooling repair, maintenance, and installation for offices, retail, restaurants, and light commercial properties across the Salt Lake Valley.",
    highlights: [
      "Commercial AC & heating repair",
      "Preventive maintenance plans",
      "Rooftop & split systems",
      "System installation & replacement",
      "Minimal business downtime",
      "Upfront commercial estimates",
    ],
    sections: [
      {
        id: "overview",
        title: "HVAC for Utah Businesses",
        paragraphs: [
          "Commercial HVAC systems are larger, more complex, and more critical to daily operations than residential equipment. When your system fails, you need a contractor who responds fast, communicates clearly, and gets your business back to comfortable ASAP.",
          "Paul Brothers serves light commercial properties throughout Midvale and the Salt Lake Valley — from offices and retail spaces to restaurants and small warehouses. We prioritize minimal downtime and transparent pricing on every commercial call.",
        ],
      },
      {
        id: "services",
        title: "Our Commercial HVAC Services",
        items: [
          {
            id: "repair",
            title: "Commercial Repair",
            description:
              "Fast diagnostics and repair for rooftop units, split systems, and commercial heating and cooling equipment. We stock common parts and work efficiently to reduce your downtime.",
          },
          {
            id: "maintenance",
            title: "Preventive Maintenance",
            description:
              "Scheduled maintenance prevents unexpected breakdowns, extends equipment life, and keeps energy costs predictable. We build maintenance plans around your business schedule.",
          },
          {
            id: "installation",
            title: "Installation & Replacement",
            description:
              "When it's time to replace aging commercial equipment, we help you select the right system for your building's size, usage, and budget — with professional installation and minimal disruption.",
          },
        ],
      },
      {
        id: "why-us",
        title: "Why Businesses Choose Paul Brothers",
        bullets: [
          "Fast response to minimize operational disruption",
          "Clear communication — you know what to expect before work starts",
          "Licensed, insured, and BBB A+ Accredited",
          "Free estimates and no-pressure second opinions",
          "Experience with rooftop units, split systems, and light commercial equipment",
          "Larger commercial and statewide projects available by consultation",
        ],
      },
      {
        id: "property-types",
        title: "Properties We Serve",
        bullets: [
          "Office buildings and professional suites",
          "Retail stores and shopping centers",
          "Restaurants and food service",
          "Churches and community buildings",
          "Small warehouses and industrial spaces",
          "Multi-unit commercial properties",
        ],
      },
    ],
    process: [
      {
        title: "Contact Us",
        description:
          "Call 385-787-8077 or text 385-787-7077. Describe your commercial HVAC issue or project and we'll schedule a site visit or emergency dispatch.",
      },
      {
        title: "Site Assessment",
        description:
          "We inspect your equipment, understand your building's needs, and identify the most cost-effective solution — repair, maintenance, or replacement.",
      },
      {
        title: "Proposal",
        description:
          "You receive a clear, upfront proposal with pricing and timeline. No hidden fees, no pressure.",
      },
      {
        title: "Service & Follow-Up",
        description:
          "Our team completes the work efficiently, tests your system, and follows up to make sure your business stays comfortable.",
      },
    ],
    faqs: [
      {
        question: "Do you offer emergency commercial HVAC repair?",
        answer:
          "Yes. We provide emergency repair for commercial properties in our Salt Lake Valley service area. Call us any time your business heating or cooling goes down.",
      },
      {
        question: "Can you handle rooftop units?",
        answer:
          "Yes. We service and repair rooftop HVAC units, split systems, and other common commercial configurations.",
      },
      {
        question: "Do you offer commercial maintenance contracts?",
        answer:
          "We offer preventive maintenance plans tailored to your equipment and schedule. Regular maintenance is the best way to avoid costly emergency repairs.",
      },
    ],
    relatedServices: [
      { to: routes.hvacInstallation, label: "HVAC Installation" },
      { to: routes.hvacMaintenance, label: "HVAC Maintenance" },
      { to: routes.acRepair, label: "AC Repair" },
    ],
    cta: {
      headline: "Keep Your Business Comfortable",
      subtext: "Commercial HVAC repair, maintenance, and installation — call Paul Brothers today.",
    },
  },
};
