"use client";

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
  return (
    <>
      <div className="flex flex-col space-y-2">
        {education.map((edu) => (
          <div
            className="relative overflow-hidden rounded-2xl  p-px bg-zinc-600/30"
            key={edu.id}
          >
            <div className="relative h-full w-full rounded-[15px] p-3 bg-zinc-950">
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
                    <h4 className="font-normal text-zinc-100">{edu.degree}</h4>
                    <p className="text-zinc-400 text-sm">{edu.school}</p>
                  </div>
                  <p className="text-zinc-400">
                    {edu.start} - {edu.end}
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
