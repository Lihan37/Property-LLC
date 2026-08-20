import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://www.propropertycaresolutions.com"; return ["","/services","/about","/projects","/reviews","/contact"].map(route => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : .8 })); }
