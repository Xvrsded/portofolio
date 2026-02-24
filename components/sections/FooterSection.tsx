import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { sectionClass } from "@/lib/utils";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-slate-950 to-slate-900 py-10">
      <div className={`${sectionClass} grid gap-8 md:grid-cols-3`}>
        <div>
          <p className="text-lg font-bold text-gray-100">{profile.logoText}</p>
          <p className="text-sm text-gray-400">{profile.headline}</p>
        </div>
        <nav aria-label="Footer Sitemap" className="flex flex-wrap gap-3 text-sm text-gray-300">
          {profile.footerSitemap.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:justify-end">
          {profile.social.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-cyan-300">
              {social.label}
            </a>
          ))}
          <a href="#home" aria-label="Back to top" className="rounded-full border border-white/20 p-2 text-gray-200 hover:border-cyan-300/40">
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
