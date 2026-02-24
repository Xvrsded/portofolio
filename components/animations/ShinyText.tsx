"use client";

type ShinyTextProps = {
  text: string;
  className?: string;
};

export function ShinyText({ text, className }: ShinyTextProps) {
  return (
    <span
      className={`relative inline-block bg-[linear-gradient(110deg,#a5b4fc,45%,#e5e7eb,55%,#22d3ee)] bg-[length:250%_100%] bg-clip-text text-transparent motion-safe:animate-shiny ${className ?? ""}`}
    >
      {text}
    </span>
  );
}
