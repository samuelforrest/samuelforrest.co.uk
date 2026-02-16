"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  link: string;
  logo?: string;
  id: string;
};

export function EducationGrid({ education }: { education: Education[] }) {
  const [showMore, setShowMore] = useState(false);
  const displayed = showMore ? education : education.slice(0, 2);

  return (
    <>
      <div className="flex flex-col space-y-2">
        {displayed.map((edu) => (
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
      {education.length > 2 && (
        <div className="mt-3 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {showMore ? "Show Less" : "Show More"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </>
  );
}
