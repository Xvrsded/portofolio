"use client";

import { m, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

type LanyardProps = {
  children: ReactNode;
  className?: string;
};

export function Lanyard({ children, className }: LanyardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });

  return (
    <m.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        rotateY.set((x - centerX) / 14);
        rotateX.set((centerY - y) / 14);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div className="relative before:absolute before:-inset-6 before:-z-10 before:rounded-[30px] before:bg-cyan-400/20 before:blur-2xl">
        {children}
      </div>
    </m.div>
  );
}
