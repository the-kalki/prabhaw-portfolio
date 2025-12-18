"use client";

import { motion } from "framer-motion";
import { about } from "@/content/about";
import { fadeUp, stagger } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl px-6"
      >
        {/* Soft panel */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-10 py-12">
          {/* Section label */}
          <motion.span
            variants={fadeUp}
            className="text-sm uppercase tracking-wider text-white/50"
          >
            About
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-semibold"
          >
            {about.heading}
          </motion.h2>

          {/* Body */}
          <div className="mt-8 max-w-3xl space-y-5">
            {about.body.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-white/75 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}