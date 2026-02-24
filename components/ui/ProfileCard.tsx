"use client";

import Image from "next/image";
import { m, useMotionValue, useSpring } from "framer-motion";
import { MapPin } from "lucide-react";
import { ProfileData } from "@/types";

type ProfileCardProps = {
  profile: ProfileData;
};

export function ProfileCard({ profile }: ProfileCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rx = useSpring(rotateX, { stiffness: 200, damping: 18 });
  const ry = useSpring(rotateY, { stiffness: 200, damping: 18 });

  return (
    <m.article
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        rotateY.set((x - rect.width / 2) / 20);
        rotateX.set((rect.height / 2 - y) / 20);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className="rounded-3xl border border-indigo-300/20 bg-slate-900/70 p-6 shadow-2xl shadow-indigo-500/10"
    >
      <div className="relative mx-auto mb-4 size-24 overflow-hidden rounded-full border border-cyan-300/30">
        <Image src={profile.photo} alt={profile.name} fill className="object-cover" sizes="96px" />
      </div>
      <h3 className="text-center text-xl font-bold text-gray-100">{profile.name}</h3>
      <p className="mt-1 text-center text-xs leading-relaxed text-gray-400">{profile.hero.role}</p>
      <p className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-400">
        <MapPin size={14} /> {profile.location}
      </p>
      <div className="mt-5 grid grid-cols-2 gap-2">
        {profile.social.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 px-3 py-2 text-center text-xs text-gray-200 transition hover:border-cyan-300/50"
          >
            {social.label}
          </a>
        ))}
      </div>
      <a
        href={profile.cvUrl}
        className="mt-5 block rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-center text-sm font-semibold text-slate-950"
      >
        Download CV
      </a>
    </m.article>
  );
}
