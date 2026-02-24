import { techLogos } from "@/data/projects";
import { LogoLoop } from "@/components/ui/LogoLoop";
import { sectionClass } from "@/lib/utils";

export function TechStackSection() {
  const focusAreas = ["Web Development", "Network Engineering", "IoT Systems", "Hardware Workflow"];

  return (
    <section className="py-20">
      <div className={sectionClass}>
        <h2 className="text-3xl font-bold text-gray-100">Tech Stack</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.14em] text-gray-400">Tools</p>
            <p className="mt-1 text-lg font-semibold text-cyan-300">{techLogos.length}+ Technologies</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 sm:col-span-1 lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.14em] text-gray-400">Core Focus</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <LogoLoop items={techLogos} />
        </div>
      </div>
    </section>
  );
}
