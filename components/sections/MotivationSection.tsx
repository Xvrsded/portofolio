"use client";

import { m } from "framer-motion";
import { profile } from "@/data/profile";
import { ShinyText } from "@/components/animations/ShinyText";
import { SplitText } from "@/components/animations/SplitText";
import { sectionClass } from "@/lib/utils";

export function MotivationSection() {
  return (
    <section className="py-20">
      <div className={sectionClass}>
        <m.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl border border-white/15 bg-slate-900/50 p-8 text-center"
        >
          <SplitText text={profile.quote} className="text-xl font-semibold text-gray-100 sm:text-2xl" />
          <p className="mt-3 text-sm text-gray-400">
            <ShinyText text="Driven by precision, resilience, and continuous improvement." />
          </p>
        </m.div>
      </div>
    </section>
  );
}
