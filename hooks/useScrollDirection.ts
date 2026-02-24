"use client";

import { useEffect, useState } from "react";

export function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastY = window.scrollY;

    const updateDirection = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      if (Math.abs(delta) > threshold) {
        setDirection(delta > 0 ? "down" : "up");
        lastY = y;
      }
    };

    window.addEventListener("scroll", updateDirection, { passive: true });
    return () => window.removeEventListener("scroll", updateDirection);
  }, [threshold]);

  return direction;
}
