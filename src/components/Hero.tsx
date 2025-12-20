"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useStore } from "@/lib/store";

export default function Hero() {
  const { setActiveSection, setLocked } = useStore();

  const handleCTA = (sectionId: "projects" | "contact") => {
    setActiveSection(sectionId);
    setLocked(true);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full glass mb-6 text-xs font-medium tracking-widest uppercase opacity-60"
            >
              Available for projects
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              DevOps <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Engineer.
              </span>
            </h1>

            <p className="text-lg md:text-xl opacity-60 max-w-xl mb-10 leading-relaxed">
              Orchestrating resilient cloud infrastructure with a focus on automation, scalability, and operational excellence.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => handleCTA("projects")}
                className="px-8 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold hover:opacity-90 transition-all active:scale-95"
              >
                View Work
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-4 rounded-full glass font-semibold hover:bg-[var(--foreground)]/5 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-80 h-96 md:w-[26rem] md:h-[34rem] flex-shrink-0"
          >
            {/* Glowing Aura */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-[3rem] blur-3xl" />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[var(--background)]/50">
              <Image
                src="/hero-avatar.jpg"
                alt="Developer Avatar"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Decor elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-40 mix-blend-screen" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 mix-blend-screen" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}