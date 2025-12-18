"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-[#060B08] via-black to-black" />

{/* Green glow accent */}
<div className="absolute left-1/2 top-32 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-emerald-500/15 blur-[140px]" />

{/* Secondary subtle glow */}
<div className="absolute left-[30%] top-[55%] h-[300px] w-[300px] rounded-full bg-green-400/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-32">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_0_30px_rgba(16,185,129,0.15)]"

        >
          DevOps Engineer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base md:text-lg text-white/60"
        >
          Automating infrastructure. Shipping reliable systems.
        </motion.p>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {[
            "AWS",
            "Docker",
            "Kubernetes",
            "Terraform",
            "CI/CD",
            "Linux",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-white/60 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          {/* Primary */}
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View Projects
          </Link>

          {/* Secondary */}
          <Link
            href="/resume.pdf"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
          >
            Download Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}