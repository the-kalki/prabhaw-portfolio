"use client";

import { motion } from "framer-motion";
import { navItems } from "@/content/nav";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full backdrop-blur border-b border-white/10 bg-black/40"
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-sm font-semibold tracking-wide"
        >
          Prabhaw<span className="text-white/50">.dev</span>
        </a>

        {/* Links */}
        <ul className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#projects"
          className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
        >
          View Work
        </a>
      </nav>
    </motion.header>
  );
}