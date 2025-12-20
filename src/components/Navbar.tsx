"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", id: "about" as const },
  { name: "Skills", id: "skills" as const },
  { name: "Project", id: "projects" as const },
  { name: "Contact", id: "contact" as const },
  { name: "MySpace", id: "myspace" as const, external: true, href: "https://myspace-nine-mu.vercel.app/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { setActiveSection, setLocked, reset } = useStore();

  const handleLinkClick = (link: typeof navLinks[0]) => {
    if (link.external) {
      window.open(link.href, "_blank");
      setOpen(false);
      return;
    }

    setActiveSection(link.id);
    setLocked(true);
    setOpen(false);

    const element = document.getElementById(link.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 z-[100] w-full px-6 py-4 md:px-12 md:py-8 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Navbar background */}
        <div className="absolute inset-0 bg-[var(--background)]/80 backdrop-blur-md -z-10 transition-colors duration-300 border-b border-[var(--glass-border)]" />

        {/* Left: Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-[var(--glass-border)]">
            <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tighter">dev</span>
        </button>

        {/* Right: Menu button container */}
        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-sm font-medium hover:opacity-70 transition flex items-center gap-1"
          >
            Menu
          </button>

          {/* Dropdown links */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute right-0 top-full mt-4 w-32 overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[var(--background)]/90 backdrop-blur-xl shadow-2xl"
              >
                <ul className="flex flex-col p-1">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="w-full text-left px-4 py-2.5 text-xs font-medium opacity-70 hover:bg-[var(--foreground)]/5 hover:opacity-100 transition-all rounded-lg"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}