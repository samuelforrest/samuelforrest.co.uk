"use client";

import { TextLoop } from "src/components/ui/text-loop";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 px-0 py-4">
      <div className="flex items-center justify-between">
        <TextLoop className="text-xs text-zinc-500">
          <span>© 2026 Samuel Forrest</span>
          <span>Accurate as of 16/02/25</span>
        </TextLoop>

        <div className="flex flex-row gap-3 items-center">
          <a
            href="https://github.com/samuelforrest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neutral-300 transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.youtube.com/@samuelforrest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <FaYoutube className="h-5 w-5" />
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
      </div>
    </footer>
  );
}
