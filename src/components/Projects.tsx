"use client";

import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import { fadeUp, stagger } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
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
          {projects.heading}
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.items.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}