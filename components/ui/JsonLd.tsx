import { profile } from "@/data/profile";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "ID"
    },
    email: profile.email,
    telephone: profile.phone,
    sameAs: [profile.linkedIn, profile.github]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
