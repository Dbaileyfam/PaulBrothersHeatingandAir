import { useEffect } from "react";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/siteUrl";

type PageMetaProps = {
  title: string;
  description: string;
  path?: string;
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function PageMeta({ title, description, path = "/" }: PageMetaProps) {
  const fullTitle =
    path === "/"
      ? `${title} | ${site.name}`
      : `${title} | ${site.shortName} HVAC`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta("description", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", siteUrl(path));
  }, [fullTitle, description, path]);

  return null;
}
