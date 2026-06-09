import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-pb-border bg-pb-navy py-10 text-white/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{site.name}</p>
            <p className="mt-2 text-sm leading-relaxed">
              Family-owned HVAC company serving Midvale and Salt Lake County.
              Licensed, insured, and BBB A+ Accredited.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#services" className="transition hover:text-white">
                  HVAC Services
                </a>
              </li>
              <li>
                <a href="#service-areas" className="transition hover:text-white">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={site.phoneHref} className="transition hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.textHref} className="transition hover:text-white">
                  Text: {site.text}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="transition hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>{site.address.full}</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs">
          &copy; {year} {site.name}. All rights reserved. HVAC services in
          Midvale, Utah and Salt Lake County.
        </p>
      </div>
    </footer>
  );
}
