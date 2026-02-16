"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { WORK_EXPERIENCE, EDUCATION, SOCIAL_LINKS, TECH_STACK } from "./data";

export default function Personal() {
  const [showMoreWork, setShowMoreWork] = useState(false);
  const [showMoreEducation, setShowMoreEducation] = useState(false);
  const [showPrimaryEmail, setShowPrimaryEmail] = useState(false);

  const displayedWorkExperience = showMoreWork
    ? WORK_EXPERIENCE
    : WORK_EXPERIENCE.slice(0, 3);
  const displayedEducation = showMoreEducation
    ? EDUCATION
    : EDUCATION.slice(0, 2);

  return (
    <main className="space-y-24">
      <section>
        <div className="flex-1">
          <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
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
        <div className="flex flex-col space-y-2">
          {displayedWorkExperience.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/50 p-px dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <div className="relative h-full w-full rounded-[15px] bg-white p-3 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row items-center gap-4">
                  {job.logo && (
                    <div className="shrink-0">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="object-fit h-12 w-12 rounded-full"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-row justify-between">
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">
                        {job.title}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        {WORK_EXPERIENCE.length > 4 && (
          <div className="mt-3 flex justify-center">
            <button
              onClick={() => setShowMoreWork(!showMoreWork)}
              className="flex cursor-pointer items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {showMoreWork ? "Show Less" : "Show More"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${showMoreWork ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </section>

      <section>
        <h3 className="mb-5 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-2">
          {displayedEducation.map((edu) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/50 p-px dark:bg-zinc-600/30"
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              key={edu.id}
            >
              <div className="relative h-full w-full rounded-[15px] bg-white p-3 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row items-center gap-4">
                  {edu.logo && (
                    <div className="shrink-0">
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className="object-fit h-12 w-12 rounded-full"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-row justify-between">
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">
                        {edu.degree}
                      </h4>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                        {edu.school}
                      </p>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {edu.start} - {edu.end}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        {EDUCATION.length > 2 && (
          <div className="mt-3 flex justify-center">
            <button
              onClick={() => setShowMoreEducation(!showMoreEducation)}
              className="flex cursor-pointer items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {showMoreEducation ? "Show Less" : "Show More"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${showMoreEducation ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </section>

      <section>
        <h3 className="mb-5 text-lg font-medium">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.id}
              className="group relative inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-900 transition-all duration-200 hover:bg-zinc-200 hover:text-black dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
              <span className="font-medium">{tech.name}</span>
              <span className="text-xs text-zinc-500 transition-colors group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{" "}
          {showPrimaryEmail ? (
            <a
              className="underline underline-offset-3 dark:text-zinc-300"
              href="mailto:sam@samuelforrest.co.uk"
            >
              sam@samuelforrest.co.uk
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setShowPrimaryEmail(true)}
              className="cursor-pointer underline underline-offset-3 dark:text-zinc-300"
            >
              reveal email
            </button>
          )}
        </p>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          You can book a call with me using{" "}
          <a
            className="underline underline-offset-3 dark:text-zinc-300"
            href="https://calendar.app.google/9wXUj2N4fN96NApu6"
          >
            this link
          </a>
        </p>
      </section>
    </main>
  );
}
