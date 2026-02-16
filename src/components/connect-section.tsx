"use client";

import { useState } from "react";

export function ConnectSection() {
  const [showPrimaryEmail, setShowPrimaryEmail] = useState(false);

  return (
    <section>
      <h3 className="mb-5 text-lg font-medium">Connect</h3>
      <p className="mb-5 text-zinc-400">
        Feel free to contact me at{" "}
        {showPrimaryEmail ? (
          <a
            className="underline underline-offset-3 text-zinc-300"
            href="mailto:sam@samuelforrest.co.uk"
          >
            sam@samuelforrest.co.uk
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setShowPrimaryEmail(true)}
            className="cursor-pointer underline underline-offset-3 text-zinc-300"
          >
            reveal email
          </button>
        )}
      </p>
      <p className="mb-5 text-zinc-400">
        You can book a call with me using{" "}
        <a
          className="underline underline-offset-3 text-zinc-300"
          href="https://calendar.app.google/9wXUj2N4fN96NApu6"
        >
          this link
        </a>
      </p>
    </section>
  );
}
