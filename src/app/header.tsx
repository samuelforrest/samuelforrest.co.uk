"use client";
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
          <p className="text-white">Student, Developer & Tutor</p>
        </div>
      </div>
    </header>
  );
}
