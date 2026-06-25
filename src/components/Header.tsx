import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, serviceNavLinks, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { ContactButtons } from "./ContactButtons";

function navClass(isActive: boolean) {
  return isActive
    ? "font-semibold text-white"
    : "font-medium text-white/70 transition hover:text-white";
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-pb-navy/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:py-4">
        <Link to={routes.home} className="group flex min-w-0 flex-col">
          <span className="truncate text-lg font-bold text-white sm:text-xl">
            {site.name}
          </span>
          <span className="hidden text-xs font-medium text-sky-300 sm:block">
            Midvale, UT · Salt Lake Valley
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          <NavLink
            to={routes.home}
            end
            className={({ isActive }) => `text-sm ${navClass(isActive)}`}
          >
            Home
          </NavLink>

          <div className="relative group">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-white/70 transition hover:text-white"
              aria-haspopup="true"
            >
              Services
              <ChevronDown className="h-4 w-4" aria-hidden />
            </button>
            <div className="invisible absolute left-0 top-full z-50 w-56 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-white/10 bg-pb-navy-light py-2 shadow-xl shadow-black/40">
                {serviceNavLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm ${navClass(isActive)}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `text-sm ${navClass(isActive)}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ContactButtons size="sm" />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-pb-navy-light/95 px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            <NavLink
              to={routes.home}
              end
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-sm ${navClass(isActive)}`
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm ${navClass(isActive)}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-white"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {servicesOpen
              ? serviceNavLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `rounded-lg py-2 pl-6 pr-3 text-sm ${navClass(isActive)}`
                    }
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    {link.label}
                  </NavLink>
                ))
              : null}
          </div>
          <div className="mt-4 border-t border-white/10 pt-4">
            <ContactButtons layout="stack" showEstimate />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
