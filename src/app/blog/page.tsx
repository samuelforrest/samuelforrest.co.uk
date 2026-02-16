import { BlogPosts } from "src/components/posts";

export const metadata = {
  title: "Blog | Samuel Forrest",
  description:
    "Samuel Forrest's blog discussing topics such as software engineering, AI and degree apprenticeships.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  );
}
