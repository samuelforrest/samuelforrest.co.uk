"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { XIcon, ChevronDown } from "lucide-react";
import { Spotlight } from "src/components/ui/spotlight";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "src/components/ui/morphing-dialog";

import Link from "next/link";
import { AnimatedBackground } from "src/components/ui/animated-background";
import {
  WORK_EXPERIENCE,
  EDUCATION,
  BLOG_POSTS,
  SOCIAL_LINKS,
  TECH_STACK,
} from "./data";

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};

export default function Personal() {
  const [showMoreWork, setShowMoreWork] = useState(false);
  const [showMoreEducation, setShowMoreEducation] = useState(false);
  const [showPrimaryEmail, setShowPrimaryEmail] = useState(false);
  const [showSecondaryEmail, setShowSecondaryEmail] = useState(false);

  const displayedWorkExperience = showMoreWork
    ? WORK_EXPERIENCE
    : WORK_EXPERIENCE.slice(0, 3);
  const displayedEducation = showMoreEducation
    ? EDUCATION
    : EDUCATION.slice(0, 2);

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-black dark:text-white">
            Samuel Forrest is an A Level student passionate about modern web and
            application development. Currently the CTO at Apprentadream, Private
            Tutor on Superprof and a Freelance Developer.
          </p>
        </div>
        <div className="flex items-center justify-start space-x-3 pt-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:hover:text-white hover:text-black dark:text-zinc-400"
            >
              {link.label}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          ))}
        </div>
      </motion.section>
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Experience</h3>
        <div className="flex flex-col space-y-2">
          {displayedWorkExperience.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/50 p-px dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
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
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
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
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
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
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
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
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
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

        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm text-zinc-600 dark:hover:text-white hover:text-black dark:text-zinc-400"
            >
              {link.label}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
