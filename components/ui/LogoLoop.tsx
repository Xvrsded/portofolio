import Image from "next/image";
import { TechLogo } from "@/types";

type LogoLoopProps = {
  items: TechLogo[];
};

export function LogoLoop({ items }: LogoLoopProps) {
  const doubled = [...items, ...items];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 py-4">
      <div className="flex w-max animate-logo-loop items-center gap-4 px-4 group-hover:[animation-play-state:paused]">
        {doubled.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex items-center gap-3 rounded-full border border-white/15 bg-slate-900 px-4 py-2 text-sm text-gray-200"
          >
            <Image src={logo.logo} alt={logo.alt} width={28} height={28} className="size-7 rounded" />
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
