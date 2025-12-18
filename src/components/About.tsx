"use client";

import { motion } from "framer-motion";
import { about } from "@/content/about";
import { fadeUp, stagger } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl px-6"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-semibold"
        >
          {about.heading}
        </motion.h2>

        <div className="mt-6 grid gap-4 max-w-3xl">
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
      </motion.div>
    </section>
  );
}