import { ProfileData } from "@/types";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { sectionClass } from "@/lib/utils";

type ProfileCardSectionProps = {
  profile: ProfileData;
};

export function ProfileCardSection({ profile }: ProfileCardSectionProps) {
  return (
    <section className="py-12">
      <div className={sectionClass}>
        <ScrollReveal className="mx-auto max-w-md">
          <ProfileCard profile={profile} />
        </ScrollReveal>
      </div>
    </section>
  );
}
