import { Link } from "react-router-dom";
import { site, serviceNavLinks, navLinks } from "@/content/site";
import { routes } from "@/lib/routes";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-pb-deep py-10 text-white/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-white">{site.name}</p>
            <p className="mt-2 text-sm leading-relaxed">
              Family-owned mobile HVAC company serving the Salt Lake Valley and
              surrounding areas. Licensed, insured, and BBB A+ Accredited.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {serviceNavLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={site.phoneHref} className="transition hover:text-white">
                  Call: {site.phone}
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
              <li>
                <span className="text-white/50">{site.address.label}: </span>
                {site.address.full}
              </li>
              <li>
                <Link to={routes.contactUs} className="transition hover:text-white">
                  Get a Free Estimate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs">
          &copy; {year} {site.name}. All rights reserved. Mobile HVAC services
          throughout the Salt Lake Valley and surrounding areas.
        </p>
      </div>
    </footer>
  );
}
