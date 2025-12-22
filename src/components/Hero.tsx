"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useStore } from "@/lib/store";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const roles = ["DevOps Engineer.", "Cloud Architect.", "Frontend Dev."];

export default function Hero() {
  const { setActiveSection, setLocked } = useStore();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleCTA = (sectionId: "projects" | "contact") => {
    setActiveSection(sectionId);
    setLocked(true);
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
              Prabhaw Kumar<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                {displayText}
                <span className="animate-pulse text-blue-400">|</span>
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
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Floating 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-72 h-80 md:w-[24rem] md:h-[30rem] flex-shrink-0"
            style={{ perspective: "1000px" }}
          >
            {/* Soft glow behind avatar */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-emerald-500/20 blur-[80px] rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Floating animation wrapper */}
            <motion.div
              className="relative w-full h-full"
              animate={{
                y: [0, -15, 0],
                rotateX: [0, 2, 0],
                rotateY: [-3, 3, -3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Avatar Image - No border, clean edges */}
              <div className="relative w-full h-full">
                <Image
                  src="/hero-avatar.jpg"
                  alt="Developer Avatar"
                  fill
                  className="object-cover object-top rounded-[2rem] shadow-2xl"
                  sizes="(max-width: 768px) 288px, 384px"
                  priority
                  style={{
                    filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))",
                  }}
                />
              </div>

              {/* Subtle 3D depth layers */}
              <div
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                style={{ transform: "translateZ(-20px)" }}
              />
            </motion.div>

            {/* Floating particles/orbs */}
            <motion.div
              className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-blue-400/60 blur-sm"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-8 h-8 rounded-full bg-purple-400/50 blur-sm"
              animate={{
                y: [0, 15, 0],
                x: [0, -10, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-emerald-400/40 blur-sm"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}