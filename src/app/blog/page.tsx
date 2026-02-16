import { BlogPosts } from "src/components/posts";

export const metadata = {
  title: "Articles",
  description:
    "Explore the latest discoveries and insights in biology and life sciences.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Articles</h1>
      <BlogPosts />
    </section>
  );
}
