import { useEffect } from "react";
import { absoluteUrl, SITE_NAME } from "../lib/site";

type Props = {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
  noIndex?: boolean;
};

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export default function Seo({ title, description, path, jsonLd, noIndex }: Props) {
  const ld = JSON.stringify(jsonLd ?? null);

  useEffect(() => {
    const url = absoluteUrl(path);
    const image = absoluteUrl("/og.png");
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex, follow" : "index, follow");
    upsertLink("canonical", url);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:locale", "en_GB");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    let script = document.getElementById("bf-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "bf-jsonld";
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = ld === "null" ? "" : ld;
  }, [title, description, path, ld, noIndex]);

  return null;
}
