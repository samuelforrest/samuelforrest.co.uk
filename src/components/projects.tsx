import Link from "next/link";
import Image from "next/image";
import { formatDate, getProjects } from "src/app/projects/utils";

export function ProjectsGrid() {
  let allProjects = getProjects();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 justify-items-center sm:justify-items-stretch">
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="group flex flex-col overflow-hidden rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
            href={`/projects/${project.slug}`}
          >
            {project.metadata.image && (
              <div className="relative h-48 w-full overflow-hidden bg-neutral-800">
                <Image
                  src={project.metadata.image}
                  alt={project.metadata.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="flex flex-col p-4 flex-1">
              <h2 className="font-semibold text-lg mb-2 text-neutral-100 line-clamp-2">
                {project.metadata.title}
              </h2>
              <p className="text-sm text-neutral-400 mb-3 line-clamp-2 flex-1">
                {project.metadata.summary}
              </p>
              <p className="text-xs text-neutral-500">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
