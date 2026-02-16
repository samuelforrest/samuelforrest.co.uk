import { ProjectsGrid } from "src/components/projects";

export const metadata = {
  title: "Projects | Samuel Forrest",
  description:
    "Samuel Forrest's projects ranging from client website projects to dissertations.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <ProjectsGrid />
    </section>
  );
}
