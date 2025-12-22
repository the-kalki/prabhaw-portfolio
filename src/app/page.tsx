"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import NeonGlowBackground from "@/components/NeonGlowBackground";
import { useStore } from "@/lib/store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const { activeSection, isLocked } = useStore();
  const [isMounted, setIsMounted] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Wait for hydration to complete
  useEffect(() => {
    setIsMounted(true);
    // Small delay to ensure Zustand store is fully hydrated from localStorage
    const timer = setTimeout(() => setIsHydrated(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Handle body overflow when locked
  useEffect(() => {
    if (isMounted && isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLocked, isMounted]);

  const shouldShowLocked = isMounted && isHydrated && isLocked;

  // Don't render section content until hydrated to prevent flash
  if (!isHydrated) {
    return (
      <main className="relative min-h-screen transition-colors duration-500">
        <NeonGlowBackground />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen transition-colors duration-500">
      {/* Neon Glow Background - lightweight CSS-only effect */}
      <NeonGlowBackground />

      <AnimatePresence mode="wait">
        {!shouldShowLocked ? (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col"
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        ) : (
          <motion.div
            key={`locked-${activeSection}`}
            ref={containerRef}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
              opacity: { duration: 0.3 }
            }}
            className="fixed inset-0 z-10 overflow-y-auto pt-24 pb-12 hide-scrollbar"
          >
            <div ref={contentRef} className="container mx-auto px-6 md:px-12">
              {activeSection === "about" && <About />}
              {activeSection === "skills" && <Skills />}
              {activeSection === "projects" && <Projects />}
              {activeSection === "contact" && <Contact />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Universal Background Blur Overlay when locked */}
      <AnimatePresence>
        {shouldShowLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 bg-[var(--background)]/80 backdrop-blur-3xl"
          />
        )}
      </AnimatePresence>
    </main>
  );
}

