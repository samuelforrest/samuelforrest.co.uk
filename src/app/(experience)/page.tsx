import { WORK_EXPERIENCE, EDUCATION, TECH_STACK } from "./data";
import { WorkExperienceGrid } from "src/components/work-experience-grid";
import { EducationGrid } from "src/components/education-grid";
import { ConnectSection } from "src/components/connect-section";
import { baseUrl } from "../sitemap";

export const metadata = {
  title: "Samuel Forrest",
  description:
    "Samuel Forrest is an A Level student passionate about modern web and application development. Currently the CTO at Apprentadream, Private Tutor on Superprof and a Freelance Developer.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Samuel Forrest",
    description:
      "Samuel Forrest is an A Level student passionate about modern web and application development. Currently the CTO at Apprentadream, Private Tutor on Superprof and a Freelance Developer.",
    url: baseUrl,
    type: "website",
    images: [
      {
        url: "/samuelforrest.JPG",
        width: 1200,
        height: 630,
        alt: "Samuel Forrest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Forrest",
    description:
      "Samuel Forrest is an A Level student passionate about modern web and application development. Currently the CTO at Apprentadream, Private Tutor on Superprof and a Freelance Developer.",
    images: ["/samuelforrest.JPG"],
  },
};

export default function Personal() {
  return (
    <main className="space-y-24">
      <section>
        <div className="flex-1">
          <h1 className="font-semibold text-2xl mb-10 tracking-tighter">
            Experience
          </h1>
          <h3 className="mb-5 text-lg font-medium">Summary</h3>
          <p className="text-black dark:text-white">
            Samuel Forrest is an A Level student passionate about modern web and
            application development. Currently the CTO at Apprentadream, Private
            Tutor on Superprof and a Freelance Developer.
          </p>
        </div>
      </section>
      <section>
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <WorkExperienceGrid experiences={WORK_EXPERIENCE} />
      </section>

      <section>
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <EducationGrid education={EDUCATION} />
      </section>

      <section>
        <h3 className="mb-5 text-lg font-medium">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <a
              key={tech.id}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm  transition-all duration-200   bg-zinc-800 text-zinc-100 hover:bg-zinc-700 cursor-pointer"
            >
              <span className="font-medium">{tech.name}</span>
              <span className="text-xs text-zinc-400 transition-colors group-hover:text-zinc-300">
                {tech.category}
              </span>
            </a>
          ))}
        </div>
      </section>

      <ConnectSection />
    </main>
  );
}
