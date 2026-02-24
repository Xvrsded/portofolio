type GradientTextProps = {
  text: string;
  className?: string;
};

export function GradientText({ text, className }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-indigo-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent ${className ?? ""}`}
    >
      {text}
    </span>
  );
}
