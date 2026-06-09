const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function siteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `${basePath}/`;
  return `${basePath}${normalized}`;
}
