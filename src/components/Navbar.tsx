"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full relative">
      {/* Navbar background */}
<div className="absolute inset-0 bg-gradient-to-b from-[#060B08]/95 to-black/90 backdrop-blur-md" />

{/* Subtle green glow */}
<div className="absolute left-1/2 top-[-120px] -translate-x-1/2 h-[260px] w-[260px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Prabhaw.dev
        </Link>

        {/* Right: Menu button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="text-sm font-medium text-white hover:opacity-80 transition"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Dropdown links */}
<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute right-6 top-full mt-2 w-40 rounded-lg border border-white/10 bg-black/90 shadow-lg"
    >
      <ul className="flex flex-col py-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
}