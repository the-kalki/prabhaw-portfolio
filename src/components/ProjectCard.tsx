"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef, MouseEvent } from "react";

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
      external?: string;
    };
  };
};

export default function ProjectCard({ project }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse movement for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative perspective-1000"
    >
      {/* Spotlight Effect Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([xValue, yValue]) =>
              `radial-gradient(600px circle at ${xValue}px ${yValue}px, rgba(52, 211, 153, 0.08), transparent 80%)`
          ),
        }}
      />

      <div
        style={{ transform: "translateZ(50px)" }}
        className="glass p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col group transition-all duration-500 hover:bg-[var(--foreground)]/5 hover:border-[var(--glass-border)] border border-[var(--glass-border)]"
      >
        <div className="flex justify-between items-start mb-8">
          <div style={{ transform: "translateZ(30px)" }}>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 mb-2 block">
              {project.domain}
            </span>
            <h3 className="text-3xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-4" style={{ transform: "translateZ(40px)" }}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="p-3 rounded-full bg-[var(--foreground)]/5 opacity-40 hover:opacity-100 hover:bg-[var(--foreground)]/10 transition-all active:scale-90"
              >
                <Github size={20} />
              </a>
            )}
            {project.links.external && (
              <a
                href={project.links.external}
                target="_blank"
                className="p-3 rounded-full bg-[var(--foreground)]/5 opacity-40 hover:opacity-100 hover:bg-[var(--foreground)]/10 transition-all active:scale-90"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p
          className="text-lg opacity-50 leading-relaxed mb-8 font-light"
          style={{ transform: "translateZ(20px)" }}
        >
          {project.description}
        </p>

        {project.image && (
          <div
            style={{ transform: "translateZ(60px)" }}
            className="relative mb-8 overflow-hidden rounded-2xl border border-[var(--glass-border)] aspect-video"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        )}

        <div className="mt-auto" style={{ transform: "translateZ(30px)" }}>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg bg-emerald-500/5 text-emerald-400/80 border border-emerald-500/10 transition-all group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20"
              >
                {t}
              </span>
            ))}
          </div>

          <ul className="space-y-4">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-4 text-sm opacity-40 group-hover:opacity-60 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 mt-1.5 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}



