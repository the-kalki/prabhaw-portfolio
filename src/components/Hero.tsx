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
              Frontend <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Architect.
              </span>
            </h1>

            <p className="text-lg md:text-xl opacity-60 max-w-xl mb-10 leading-relaxed">
              Crafting immersive digital experiences with focus on performance, accessibility, and modern aesthetics.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => handleCTA("projects")}
                className="px-8 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold hover:opacity-90 transition-all active:scale-95"
              >
                View Work
              </button>
              <button
                onClick={() => handleCTA("contact")}
                className="px-8 py-4 rounded-full glass font-semibold hover:bg-[var(--foreground)]/5 transition-all active:scale-95"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass p-4 border-white/20 shadow-2xl">
              <Image
                src="/hero-avatar.jpg"
                alt="Developer Avatar"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}