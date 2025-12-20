"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useStore } from "@/lib/store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";

export default function Home() {
  const { activeSection, isLocked } = useStore();
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle body overflow and scoped smooth scroll when locked
  useEffect(() => {
    let lenis: Lenis | null = null;

    if (isMounted && isLocked) {
      document.body.style.overflow = "hidden";

      // Initialize scoped Lenis for the locked container
      if (containerRef.current && contentRef.current) {
        lenis = new Lenis({
          wrapper: containerRef.current,
          content: contentRef.current, // Target the inner content div
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis?.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      lenis?.destroy();
    };
  }, [isLocked, isMounted]);

  const shouldShowLocked = isMounted && isLocked;

  return (
    <main className="relative min-h-screen transition-colors duration-500">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
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
