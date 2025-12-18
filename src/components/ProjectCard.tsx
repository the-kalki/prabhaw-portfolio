"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

type Props = {
  project: {
    title: string;
    domain: string;
    description: string;
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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6
                 transition hover:border-white/20"
    >
      {/* 🔥 GLOW LAYER — EMPTY ON PURPOSE */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 bg-white/5 blur-xl" />
      </div>

      {/* 👇 YOUR ACTUAL CARD CONTENT (UNCHANGED) */}
      <div>
        <h3 className="text-xl font-medium">{project.title}</h3>
        <p className="text-sm text-white/60">{project.domain}</p>
      </div>

      <p className="mt-4 text-white/75">{project.description}</p>

      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {project.highlights.map((h, i) => (
          <li key={i}>• {h}</li>
        ))}
      </ul>
    </motion.div>
  );
}

