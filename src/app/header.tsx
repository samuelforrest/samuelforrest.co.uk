"use client";
import { TextEffect } from "src/components/ui/text-effect";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "src/components/nav";

export function Header() {
  return (
    <header className="mb-8">
      <Navbar />
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
          <Image
            src="/images/samuelforrest.webp"
            alt="Samuel Forrest"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <Link href="/" className="text-2xl font-medium text-white">
            Samuel Forrest
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-black dark:text-white"
            delay={0.5}
          >
            Student, Developer & Tutor
          </TextEffect>
        </div>
      </div>
    </header>
  );
}
