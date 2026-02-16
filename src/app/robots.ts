import { baseUrl } from "./sitemap";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/documents/",
      },
      // Block AI crawlers from documents directory
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: "/documents/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: "/documents/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: "/documents/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: "/documents/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: "/documents/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: "/documents/",
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: "/documents/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
