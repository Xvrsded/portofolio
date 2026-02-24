import { experiences } from "@/data/experience";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { sectionClass } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className={sectionClass}>
        <h2 className="text-3xl font-bold text-gray-100">Experience</h2>
        <ol className="relative mt-8 border-l border-white/20 pl-8">
          {experiences.map((experience, index) => (
            <ScrollReveal key={experience.company} delay={index * 0.1} className="mb-10 last:mb-0">
              <li>
                <span className="absolute -left-1.5 mt-2 size-3 rounded-full bg-cyan-400" aria-hidden />
                <p className="text-sm text-cyan-300">{experience.year}</p>
                <h3 className="mt-1 text-xl font-semibold text-gray-100">{experience.company}</h3>
                <p className="text-sm text-gray-400">{experience.role}</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
