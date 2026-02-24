"use client";

import { ReactNode } from "react";

type GradualBlurProps = {
  children: ReactNode;
};

export function GradualBlur({ children }: GradualBlurProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 transition">
      <div className="pointer-events-none absolute inset-0 opacity-0 backdrop-blur-md transition group-hover:opacity-100" />
      {children}
    </div>
  );
}
