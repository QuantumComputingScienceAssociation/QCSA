"use client";

import Image from "next/image";
import { useState } from "react";

export default function TeamHeadshot({ name, src }: { name: string; src?: string }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#234285]/10 text-sm font-bold text-[#234285] sm:h-20 sm:w-20">
      {!loaded && <span aria-hidden="true">{initials}</span>}
      {src && !failed && (
        <Image
          src={src}
          alt={name}
          fill
          sizes="80px"
          className={`object-cover ${loaded ? "" : "invisible"}`}
          onLoad={() => setLoaded(true)}
          onError={() => {
            console.error(`Failed to load research headshot: ${src}`);
            setFailed(true);
          }}
        />
      )}
    </div>
  );
}
