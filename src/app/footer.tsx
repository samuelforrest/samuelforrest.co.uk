"use client";

import { TextLoop } from "src/components/ui/text-loop";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 px-0 py-4">
      <div className="flex items-center justify-center">
        <a href="https://github.com/ibelick/nim" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>© 2026 Samuel Forrest</span>
            <span>Accurate as of 16/02/25</span>
          </TextLoop>
        </a>
      </div>
    </footer>
  );
}
