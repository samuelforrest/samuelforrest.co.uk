import { ProjectsGrid } from "src/components/projects";
import { baseUrl } from "../sitemap";

export const metadata = {
  title: "Projects | Samuel Forrest",
  description:
    "Samuel Forrest's projects ranging from client website projects to dissertations.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Samuel Forrest",
    description: "Samuel Forrest's projects ranging from client website projects to dissertations.",
    url: `${baseUrl}/projects`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Samuel Forrest",
    description: "Samuel Forrest's projects ranging from client website projects to dissertations.",
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <ProjectsGrid />
    </section>
  );
}
