"use client";
import { TextEffect } from "src/components/ui/text-effect";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
          <Image
            src="/samuelforrest.JPG"
            alt="Samuel Forrest"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <Link
            href="/"
            className="text-2xl font-medium text-black dark:text-white"
          >
            Samuel Forrest
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Student, Developer & Tutor
          </TextEffect>
        </div>
      </div>
    </header>
  );
}
