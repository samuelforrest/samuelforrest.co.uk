import { getBlogPosts } from "./blog/utils";
import { getProjects } from "./projects/utils";

export const baseUrl = "https://www.samuelforrest.co.uk";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  let projects = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.metadata.publishedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  let routes = ["", "/blog", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return [...routes, ...blogs, ...projects];
}
