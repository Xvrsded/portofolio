import { ProfileData } from "@/types";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitText } from "@/components/animations/SplitText";
import { sectionClass } from "@/lib/utils";

type AboutSectionProps = {
  profile: ProfileData;
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-20">
      <div className={sectionClass}>
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-gray-100">About</h2>
        </ScrollReveal>
        <div className="mt-6 space-y-5">
          {profile.about.map((text, index) => (
            <ScrollReveal key={text} delay={index * 0.08}>
              <SplitText text={text} className="text-base leading-relaxed text-gray-300" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
