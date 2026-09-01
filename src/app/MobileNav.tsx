"use client";

import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useRef } from "react";

export default function MobileNav({ logo }: { logo: StaticImageData }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function close() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  return (
    <>
      <Link className="brand" href="/" aria-label="Home" onClick={close}>
        <Image suppressHydrationWarning className="logo logo--nav" src={logo} alt="Chambers of Vanshika Mittal logo" />
      </Link>

      <details ref={detailsRef} className="navlinks navlinks--mobile">
        <summary className="menu-toggle" aria-label="Open menu">
          <span className="menu-icon" aria-hidden="true"></span>
        </summary>
        <div className="menu-panel" role="menu" aria-label="Primary">
          <Link href="/team" onClick={close}>Team</Link>
          <Link href="/practice-areas" onClick={close}>Practice Areas</Link>
          <Link href="/blog" onClick={close}>Blog</Link>
          <Link href="/contact" onClick={close}>Contact Us</Link>
        </div>
      </details>
    </>
  );
}

