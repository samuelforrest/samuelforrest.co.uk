"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { XIcon, ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import Link from "next/link";
import { AnimatedBackground } from "@/components/ui/animated-background";
import {
  PROJECTS,
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
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreEducation, setShowMoreEducation] = useState(false);

  const displayedWorkExperience = showMoreWork
    ? WORK_EXPERIENCE
    : WORK_EXPERIENCE.slice(0, 3);
  const displayedProjects = showMoreProjects ? PROJECTS : PROJECTS.slice(0, 3);
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
          <p className="text-zinc-600 dark:text-zinc-400">
            A Level student passionate about modern web and application
            development. Freelance developer at Forrest Studio, CTO at
            Apprentadream and Private Tutor on Superprof.
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
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="flex flex-col space-y-2">
          {displayedProjects.map((project) => (
            <MorphingDialog key={project.id}>
              <MorphingDialogTrigger>
                <div className="relative overflow-hidden rounded-2xl bg-zinc-300/50 p-px dark:bg-zinc-600/30 cursor-pointer">
                  <Spotlight
                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={64}
                  />
                  <div className="relative flex h-full w-full flex-row rounded-[15px] bg-white dark:bg-zinc-950">
                    <div className="flex w-3/4 flex-col justify-between p-4">
                      <div>
                        <div className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50">
                          {project.name}
                          <span className="absolute bottom-0.5 left-0 block h-px w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                        </div>
                        <p className="text-base text-zinc-600 dark:text-zinc-400">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-1/4 overflow-hidden rounded-r-[15px]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="relative h-auto w-full max-w-screen-sm overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="flex flex-col">
                    {/* Full-width image */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 p-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                          {project.name}
                        </h2>
                        <MorphingDialogClose className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
                          <XIcon size={24} />
                        </MorphingDialogClose>
                      </div>

                      <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Action buttons */}
                      {project.links && (
                        <div className="flex flex-wrap gap-3 mt-2">
                          {project.links.website && (
                            <a
                              href={project.links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                            >
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Visit Website
                            </a>
                          )}
                          {project.links.sourceCode && (
                            <a
                              href={project.links.sourceCode}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                            >
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 10.4346 2.77841 12.8946 5.43941 13.7372C5.77841 13.7972 5.89741 13.5922 5.89741 13.4172C5.89741 13.2572 5.89141 12.7722 5.88841 12.1472C3.97741 12.5522 3.58041 11.2272 3.58041 11.2272C3.27141 10.4922 2.82241 10.2882 2.82241 10.2882C2.19941 9.87322 2.87141 9.88222 2.87141 9.88222C3.56141 9.93022 3.92241 10.5752 3.92241 10.5752C4.53541 11.6502 5.53841 11.3452 5.90741 11.1772C5.96741 10.7322 6.14441 10.4272 6.34041 10.2642C4.81241 10.0992 3.20441 9.50122 3.20441 6.97822C3.20441 6.28622 3.46541 5.71922 3.93541 5.27422C3.86841 5.10922 3.63641 4.40722 4.00041 3.44322C4.00041 3.44322 4.57741 3.26622 5.87941 4.14222C6.43041 3.99722 7.01541 3.92522 7.59941 3.92222C8.18341 3.92522 8.76841 3.99722 9.31941 4.14222C10.6204 3.26622 11.1964 3.44322 11.1964 3.44322C11.5614 4.40722 11.3294 5.10922 11.2624 5.27422C11.7334 5.71922 11.9924 6.28622 11.9924 6.97822C11.9924 9.50722 10.3814 10.0972 8.84841 10.2582C9.09141 10.4742 9.30941 10.9012 9.30941 11.5522C9.30941 12.4842 9.30241 13.2372 9.30241 13.4172C9.30241 13.5942 9.42041 13.8012 9.76441 13.7362C12.4244 12.8926 14.3234 10.4336 14.3234 7.49972C14.3234 3.84204 11.3583 0.876892 7.49991 0.876892Z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                />
                              </svg>
                              View Source Code
                            </a>
                          )}
                          {project.links.download && (
                            <a
                              href={project.links.download}
                              download
                              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                            >
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Download
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          ))}
        </div>
        {PROJECTS.length > 3 && (
          <div className="mt-3 flex justify-center">
            <button
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="flex cursor-pointer items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {showMoreProjects ? "Show Less" : "Show More"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${showMoreProjects ? "rotate-180" : ""}`}
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
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{" "}
          <a
            className="underline underline-offset-3 dark:text-zinc-300"
            href="mailto:sam@samuelforrest.co.uk"
          >
            sam@samuelforrest.co.uk
          </a>
        </p>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          My previous email is still active for a limited period{" "}
          <a
            className="underline underline-offset-3 dark:text-zinc-300"
            href="mailto:sam@samuelforrest.me"
          >
            sam@samuelforrest.me
          </a>
        </p>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to message me on&nbsp;
          <a
            className="underline underline-offset-3 dark:text-zinc-300"
            href="https://www.linkedin.com/in/samueljforrest"
          >
            LinkedIn
          </a>
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
