"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/content/profile";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          {profile.title}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-lg text-white/70"
        >
          {profile.tagline}
        </motion.p>

        <motion.ul
          variants={item}
          className="mt-6 flex flex-wrap gap-3"
        >
          {profile.highlights.map((h) => (
            <li
              key={h}
              className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80 backdrop-blur"
            >
              {h}
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={profile.ctas.primary.href}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-black
             transition hover:scale-[1.02] active:scale-[0.98]
             focus:outline-none focus:ring-2 focus:ring-white/30"
          >

            {profile.ctas.primary.label}
            <ArrowRight size={18} />
          </a>

          <a
            href={profile.ctas.secondary.href}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-white
             transition hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]
             focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            {profile.ctas.secondary.label}
            <Download size={18} />
          </a>
        </motion.div>
      </motion.div>

      {/* subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />
      </div>
    </section>
  );
}