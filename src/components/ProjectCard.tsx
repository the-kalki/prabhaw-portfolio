"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Props = {
  project: {
    title: string;
    domain: string;
    description: string;
    image?: string;
    highlights: string[];
    tech: string[];
    links: {
      github?: string;
    };
  };
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col group transition-all duration-500 hover:bg-[var(--foreground)]/5 hover:border-[var(--glass-border)]"
    >
      <div className="flex justify-between items-start mb-8">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 mb-2 block">
            {project.domain}
          </span>
          <h3 className="text-3xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              className="p-3 rounded-full bg-[var(--foreground)]/5 opacity-40 hover:opacity-100 hover:bg-[var(--foreground)]/10 transition-all active:scale-90"
            >
              <Github size={20} />
            </a>
          )}
          <button className="p-3 rounded-full bg-[var(--foreground)]/5 opacity-40 hover:opacity-100 hover:bg-[var(--foreground)]/10 transition-all active:scale-90">
            <ExternalLink size={20} />
          </button>
        </div>
      </div>

      <p className="text-lg opacity-50 leading-relaxed mb-8 font-light">
        {project.description}
      </p>

      {project.image && (
        <div className="relative mb-8 overflow-hidden rounded-2xl border border-[var(--glass-border)] aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg bg-emerald-500/5 text-emerald-400/80 border border-emerald-500/10"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-4">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-4 text-sm opacity-40 group-hover:opacity-60 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 mt-1.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}


