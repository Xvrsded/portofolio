"use client";

import { m } from "framer-motion";

type SplitTextProps = {
  text: string;
  className?: string;
};

export function SplitText({ text, className }: SplitTextProps) {
  const words = text.split(" ");

  return (
    <p className={className} aria-label={text}>
      {words.map((word, idx) => (
        <m.span
          key={`${word}-${idx}`}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: idx * 0.03 }}
          className="mr-2 inline-block"
        >
          {word}
        </m.span>
      ))}
    </p>
  );
}
