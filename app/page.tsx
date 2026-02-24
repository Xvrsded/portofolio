import dynamic from "next/dynamic";
import { profile } from "@/data/profile";
import { PillNav } from "@/components/ui/PillNav";
import { JsonLd } from "@/components/ui/JsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProfileCardSection } from "@/components/sections/ProfileCardSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FooterSection } from "@/components/sections/FooterSection";

const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection").then((mod) => mod.ProjectsSection), {
  ssr: true,
  loading: () => <div className="mx-auto max-w-6xl px-4 py-20 text-sm text-gray-500">Loading projects...</div>
});

const FeaturedVisualSection = dynamic(
  () => import("@/components/sections/FeaturedVisualSection").then((mod) => mod.FeaturedVisualSection),
  {
    ssr: false,
    loading: () => <div className="py-16 text-center text-sm text-gray-500">Loading visual...</div>
  }
);

const MotivationSection = dynamic(
  () => import("@/components/sections/MotivationSection").then((mod) => mod.MotivationSection),
  {
    ssr: true,
    loading: () => <div className="mx-auto max-w-6xl px-4 py-16 text-sm text-gray-500">Loading motivation...</div>
  }
);

const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection").then((mod) => mod.SkillsSection), {
  ssr: true,
  loading: () => <div className="mx-auto max-w-6xl px-4 py-16 text-sm text-gray-500">Loading skills...</div>
});

const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then((mod) => mod.ContactSection), {
  ssr: true,
  loading: () => <div className="mx-auto max-w-6xl px-4 py-16 text-sm text-gray-500">Loading contact...</div>
});

export default function Home() {
  const hireMeNavLink = `${profile.whatsapp}?text=Hi%20Guntur%2C%20I%20want%20to%20hire%20you%20for%20a%20project.`;

  return (
    <main className="relative min-h-screen">
      <div className="portfolio-bg" aria-hidden>
        <div className="liquid-blob one" />
        <div className="liquid-blob two" />
        <div className="liquid-blob three" />
      </div>
      <div className="relative z-10">
        <JsonLd />
        <PillNav items={profile.nav} hireMeHref={hireMeNavLink} hireMeLabel="Hire Me" />
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <ProfileCardSection profile={profile} />
        <ExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <FeaturedVisualSection />
        <MotivationSection />
        <SkillsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
