import type { MetadataRoute } from "next";
import posts from "../content/blog-posts.json";

const baseUrl = "https://www.chambersofvanshikamittal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/team",
    "/practice-areas",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const pageEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog "posts" have no dedicated route; they link straight to PDFs, so list those for indexing.
  const pdfEntries: MetadataRoute.Sitemap = posts
    .filter((p) => p.fileName)
    .map((p) => ({
      url: `${baseUrl}/pdfs/${p.fileName}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    }));

  return [...pageEntries, ...pdfEntries];
}
