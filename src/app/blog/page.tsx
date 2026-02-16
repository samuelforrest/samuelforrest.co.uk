import { BlogPosts } from "src/components/posts";
import { baseUrl } from "../sitemap";

export const metadata = {
  title: "Blog | Samuel Forrest",
  description:
    "Samuel Forrest's blog discussing topics such as software engineering, AI and degree apprenticeships.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Samuel Forrest",
    description:
      "Samuel Forrest's blog discussing topics such as software engineering, AI and degree apprenticeships.",
    url: `${baseUrl}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Samuel Forrest",
    description:
      "Samuel Forrest's blog discussing topics such as software engineering, AI and degree apprenticeships.",
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  );
}
