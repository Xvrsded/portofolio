export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  greeting: string;
  role: string;
  tagline: string;
  ctas: { label: string; href: string }[];
};

export type ProfileData = {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  whatsapp: string;
  photo: string;
  logoText: string;
  nav: NavItem[];
  hero: HeroContent;
  about: string[];
  quote: string;
  social: SocialLink[];
  footerSitemap: NavItem[];
  cvUrl: string;
};

export type ExperienceItem = {
  company: string;
  year: string;
  role: string;
  highlights: string[];
};

export type ProjectCategory = "Web" | "IoT" | "Network" | "Mobile" | "Research";

export type ProjectItem = {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
  stack: string[];
  categories: ProjectCategory[];
  liveDemo?: string;
  github?: string;
};

export type SkillGroup = {
  title: string;
  items: { name: string; level: number }[];
};

export type TechLogo = {
  name: string;
  logo: string;
  alt: string;
};
