"use client";

import { motion } from "framer-motion";
import { about } from "@/content/about";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden"
        >
          {/* Subtle accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -mr-32 -mt-32" />

          <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-6 block">
            The Story
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            {about.heading}
          </h2>

          <div className="space-y-6">
            {about.body.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg md:text-xl opacity-60 leading-relaxed font-light"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-[var(--glass-border)] grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-1">5+</div>
              <div className="text-xs opacity-40 uppercase tracking-widest">Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-xs opacity-40 uppercase tracking-widest">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">20+</div>
              <div className="text-xs opacity-40 uppercase tracking-widest">Tech Stack</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-xs opacity-40 uppercase tracking-widest">Commitment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}