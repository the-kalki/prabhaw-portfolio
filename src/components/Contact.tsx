"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { contact } from "@/content/contact";
import { fadeUp, stagger } from "@/lib/motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-28 border-t border-white/10"
    >
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
          {contact.heading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-white/70"
        >
          {contact.subheading}
        </motion.p>

        {/* Email CTA */}
        <motion.a
  href={`mailto:${contact.email}`}
  className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-black
             transition hover:scale-[1.02] active:scale-[0.98]
             focus:outline-none focus:ring-2 focus:ring-white/30"
>

          <Mail size={20} />
          {contact.email}
        </motion.a>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-6 text-sm"
        >
          {contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              className="inline-flex items-center gap-1 text-white/70 hover:text-white"
            >
              {s.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}