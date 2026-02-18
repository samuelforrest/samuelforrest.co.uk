"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  logo?: string;
  id: string;
};

export function WorkExperienceGrid({
  experiences,
}: {
  experiences: WorkExperience[];
}) {
  return (
    <>
      <div className="flex flex-col space-y-2">
        {experiences.map((job) => (
          <div
            className="relative overflow-hidden rounded-2xl  p-px bg-zinc-600/30"
            key={job.id}
          >
            <div className="relative h-full w-full rounded-[15px] p-3 bg-zinc-950">
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
                    <h4 className="font-normal text-zinc-100">{job.title}</h4>
                    <p className="text-zinc-400 text-sm">{job.company}</p>
                  </div>
                  <p className="text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
