"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contact } from "@/content/contact";
import { IconType } from "react-icons";

// Icon mapping for socials
const socialIcons: Record<string, IconType> = {
  "LinkedIn": FaLinkedinIn,
  "GitHub": FaGithub,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-20 rounded-[3rem] text-center relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-30 mb-8 block">
              Get in touch
            </span>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              {contact.heading}
            </h2>

            <p className="text-xl opacity-50 max-w-xl mx-auto mb-12 leading-relaxed font-light">
              {contact.subheading}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href={`mailto:${contact.email}`}
                className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--foreground)] text-[var(--background)] font-bold transition-all hover:pr-10 active:scale-95"
              >
                <span>Write an email</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex gap-4">
                {contact.socials.map((s, idx) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    className="group relative p-4 rounded-2xl glass hover:bg-[var(--foreground)]/10 transition-all opacity-50 hover:opacity-100 active:scale-90 flex items-center justify-center"
                  >
                    {/* Tooltip */}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {s.label}
                    </span>
                    {(() => {
                      const Icon = socialIcons[s.label];
                      return Icon ? <Icon size={20} /> : <ArrowUpRight size={20} />;
                    })()}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-16 text-xs font-medium opacity-20 uppercase tracking-[0.2em]">
              {contact.email}
            </div>

            {/* Minimal Footer */}
            <div className="mt-12 pt-8 border-t border-[var(--foreground)]/5">
              <p className="text-xs opacity-30">
                © {new Date().getFullYear()} Rudra. Crafted with Intelligence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}