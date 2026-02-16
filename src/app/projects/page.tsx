import { ProjectsGrid } from "src/components/projects";

export const metadata = {
  title: "Projects",
  description:
    "A collection of my personal projects, from web development to research papers.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <ProjectsGrid />
    </section>
  );
}
