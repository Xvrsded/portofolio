"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useState } from "react";
import { ProfileData } from "@/types";
import { ScrollFloat } from "@/components/animations/ScrollFloat";
import { GradientText } from "@/components/animations/GradientText";
import { ShinyText } from "@/components/animations/ShinyText";
import { Lanyard } from "@/components/animations/Lanyard";
import { sectionClass } from "@/lib/utils";

type HeroSectionProps = {
  profile: ProfileData;
};

export function HeroSection({ profile }: HeroSectionProps) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });
  const sparkles = [
    { id: 1, size: 70, x: "14%", y: "18%", delay: 0.1 },
    { id: 2, size: 58, x: "76%", y: "28%", delay: 0.5 },
    { id: 3, size: 88, x: "62%", y: "64%", delay: 0.9 },
    { id: 4, size: 52, x: "24%", y: "74%", delay: 1.2 },
    { id: 5, size: 64, x: "42%", y: "46%", delay: 1.6 }
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 sm:pt-24">
      <div className={`${sectionClass} grid items-center gap-10 md:grid-cols-2`}>
        <ScrollFloat className="space-y-6">
          <p className="text-sm uppercase tracking-[0.18em] text-gray-400">Professional Portfolio</p>
          <h1 className="text-3xl font-bold leading-tight text-gray-100 sm:text-5xl">
            <GradientText text={profile.hero.greeting} />
          </h1>
          <h2 className="max-w-2xl text-sm font-semibold leading-relaxed text-cyan-300 sm:text-lg">{profile.hero.role}</h2>
          <p className="max-w-xl text-base text-gray-300 sm:text-lg">
            <ShinyText text={profile.hero.tagline} />
          </p>
          <ul className="grid max-w-2xl gap-2 text-xs text-gray-300 sm:text-base">
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Network engineering with reliability-first mindset</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Hands-on hardware workflow: schematic, PCB layout, and assembly</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">IoT + web system integration for practical operational needs</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            {profile.hero.ctas.map((cta, index) => (
              <m.a
                key={cta.label}
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={
                  index === 0
                    ? "rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950"
                    : index === 1
                      ? "rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200"
                      : "rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-gray-200"
                }
              >
                {cta.label}
              </m.a>
            ))}
          </div>
        </ScrollFloat>

        <Lanyard className="mx-auto w-full max-w-[320px] sm:max-w-[350px]">
          <article
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const x = ((event.clientX - rect.left) / rect.width) * 100;
              const y = ((event.clientY - rect.top) / rect.height) * 100;
              setSpotlight({ x, y, active: true });
            }}
            onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
            className="group relative h-[500px] overflow-hidden rounded-[28px] border border-indigo-300/20 bg-gradient-to-b from-slate-700/90 to-slate-950/95 shadow-[0_20px_80px_rgba(56,189,248,0.22)] sm:h-[610px] sm:rounded-[32px]"
          >
            <div
              className={`pointer-events-none absolute inset-0 rounded-[34px] transition-opacity duration-300 ${spotlight.active ? "opacity-100" : "opacity-0"}`}
              style={{
                background: `radial-gradient(260px circle at ${spotlight.x}% ${spotlight.y}%, rgba(129,140,248,0.45), rgba(56,189,248,0.24) 38%, rgba(2,6,23,0) 72%)`
              }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_50%_6%,rgba(147,197,253,0.24),transparent_44%)]" />
            <div className="relative z-10 h-full">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="(max-width:768px) 100vw, 390px"
                className="object-cover object-top contrast-110 brightness-95"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/15 to-slate-950/72" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(96,165,250,0.22),transparent_52%)]" />
              {sparkles.map((sparkle) => (
                <span
                  key={sparkle.id}
                  className="pointer-events-none absolute rounded-full bg-gradient-to-r from-cyan-200/80 via-cyan-300/70 to-transparent blur-[1px] animate-sparkle-float"
                  style={{
                    left: sparkle.x,
                    top: sparkle.y,
                    width: `${sparkle.size}px`,
                    height: `${Math.max(18, Math.floor(sparkle.size * 0.2))}px`,
                    animationDelay: `${sparkle.delay}s`
                  }}
                />
              ))}

              <div className="absolute inset-x-4 top-5 text-center sm:inset-x-5 sm:top-7">
                <h3 className="text-[25px] font-bold leading-tight text-indigo-100/95 sm:text-[31px]">{profile.name}</h3>
                <p className="mx-auto -mt-1 max-w-[260px] text-[10px] font-medium leading-relaxed text-indigo-100/75 sm:max-w-[300px] sm:text-[11px]">{profile.hero.role}</p>
              </div>

              <p className="absolute inset-x-4 bottom-4 text-center text-xs text-gray-200/90 sm:inset-x-5 sm:bottom-5 sm:text-sm">Network • IoT • Web Engineering</p>
            </div>
          </article>
        </Lanyard>
      </div>
    </section>
  );
}
