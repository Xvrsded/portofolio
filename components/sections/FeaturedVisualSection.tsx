import Image from "next/image";
import { profile } from "@/data/profile";
import { Lanyard } from "@/components/animations/Lanyard";
import { sectionClass } from "@/lib/utils";

export function FeaturedVisualSection() {
  return (
    <section className="py-16">
      <div className={`${sectionClass} flex justify-center`}>
        <Lanyard className="w-full max-w-md">
          <div className="rounded-3xl border border-white/15 bg-slate-900/70 p-5 shadow-[0_20px_80px_rgba(34,211,238,0.18)]">
            <div className="relative h-64 overflow-hidden rounded-2xl">
              <Image src={profile.photo} alt={profile.name} fill sizes="(max-width:768px) 100vw, 400px" className="object-cover" />
            </div>
            <h3 className="mt-4 text-center text-xl font-semibold text-gray-100">Personal Branding Highlight</h3>
          </div>
        </Lanyard>
      </div>
    </section>
  );
}
