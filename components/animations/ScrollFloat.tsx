"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

type ScrollFloatProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollFloat({ children, className }: ScrollFloatProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <m.div style={{ y }} className={className}>
      {children}
    </m.div>
  );
}
