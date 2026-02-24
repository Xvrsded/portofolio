"use client";

import { m } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";
import { NavItem } from "@/types";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";

type PillNavProps = {
  items: NavItem[];
  hireMeHref?: string;
  hireMeLabel?: string;
};

export function PillNav({ items, hireMeHref, hireMeLabel = "Hire Me" }: PillNavProps) {
  const active = useActiveSection(items.map((item) => item.id));
  const direction = useScrollDirection(8);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const offset = 96;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <m.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: !isAtTop && direction === "down" ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      aria-label="Main Navigation"
      className="fixed inset-x-0 top-4 z-50 mx-auto w-fit rounded-full border border-white/15 bg-slate-900/75 px-2 py-2 shadow-lg shadow-cyan-500/10 backdrop-blur-xl"
    >
      <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(event) => handleNavClick(event, item.id)}
              className={cn(
                "rounded-full px-3 py-2 text-xs font-medium text-gray-300 transition sm:text-sm",
                active === item.id
                  ? "bg-gradient-to-r from-indigo-500/40 to-cyan-500/40 text-gray-100 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                  : "hover:bg-white/10"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
        {hireMeHref && (
          <li>
            <a
              href={hireMeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:brightness-110 sm:text-sm"
            >
              {hireMeLabel}
            </a>
          </li>
        )}
      </ul>
    </m.nav>
  );
}
