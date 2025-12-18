"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/skills";
import { fadeUp, stagger } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
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
          {skills.heading}
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.groups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-lg font-medium text-white/90">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}