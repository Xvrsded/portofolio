"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "home");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const getActiveByScroll = () => {
      const offset = 120;
      const scrollPosition = window.scrollY + offset;

      let current = sections[0].id;
      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        } else {
          break;
        }
      }

      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (nearBottom) {
        current = sections[sections.length - 1].id;
      }

      setActive(current);
    };

    getActiveByScroll();
    window.addEventListener("scroll", getActiveByScroll, { passive: true });
    window.addEventListener("resize", getActiveByScroll);

    return () => {
      window.removeEventListener("scroll", getActiveByScroll);
      window.removeEventListener("resize", getActiveByScroll);
    };
  }, [ids]);

  return active;
}
