"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useStore } from "@/lib/store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const { activeSection, isLocked } = useStore();

  // Handle body overflow when locked
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLocked]);

  return (
    <main className="relative min-h-screen transition-colors duration-500">
      <AnimatePresence mode="wait">
        {!isLocked ? (
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-10 overflow-y-auto pt-24 pb-12 hide-scrollbar"
          >
            <div className="container mx-auto px-6 md:px-12">
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
        {isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 bg-black/60 backdrop-blur-3xl"
          />
        )}
      </AnimatePresence>
    </main>
  );
}
