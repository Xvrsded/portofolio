"use client";

import { m } from "framer-motion";
import { hardSkills, softSkills } from "@/data/skills";
import { sectionClass } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className={sectionClass}>
        <h2 className="text-3xl font-bold text-gray-100">Skills</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {[hardSkills, softSkills].map((group) => (
            <article key={group.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <h3 className="text-lg font-semibold text-cyan-300">{group.title}</h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1 flex justify-between text-sm text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <m.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8 }}
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
