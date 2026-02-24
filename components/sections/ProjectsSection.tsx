"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projectCategories, projects } from "@/data/projects";
import { ProjectCategory } from "@/types";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GradualBlur } from "@/components/animations/GradualBlur";
import { sectionClass } from "@/lib/utils";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20">
      <div className={sectionClass}>
        <h2 className="text-3xl font-bold text-gray-100">Projects</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {["All", ...projectCategories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category as ProjectCategory | "All")}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-950"
                  : "border border-white/15 text-gray-300 hover:border-cyan-300/40"
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.07}>
              <GradualBlur>
                <article className="group relative p-4">
                  <div className="relative h-48 overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-cyan-300">{project.year}</p>
                    <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-300">{project.description}</p>
                    <p className="mt-3 text-xs text-gray-400">{project.stack.join(" • ")}</p>
                    <div className="mt-4 flex gap-3">
                      {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs text-gray-200 hover:border-cyan-300/50">
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs text-gray-200 hover:border-cyan-300/50">
                          <Github size={14} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </GradualBlur>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
