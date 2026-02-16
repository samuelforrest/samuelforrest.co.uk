import Link from "next/link";
import { FaLinkedin, FaGithub, FaYoutube, FaGoogle } from "react-icons/fa";
import { SOCIAL_LINKS } from "src/app/data";

const navItems = {
  "/": {
    name: "Experience",
  },
  "/projects": {
    name: "Projects",
  },
  "/blog": {
    name: "Blog",
  },
  "/documents": {
    name: "Documents",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-2 mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isDocuments = path === "/documents";
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                    isDocuments ? "hidden md:flex" : ""
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-row gap-3 items-center">
            <a
              href="https://github.com/samuelforrest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-300 transition-colors "
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@samuel-forrest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              <FaYoutube className="h-5 w-5 " />
            </a>
            <a
              href="https://www.linkedin.com/in/samueljforrest/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
