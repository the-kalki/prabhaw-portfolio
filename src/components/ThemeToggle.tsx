"use client";

import { useStore } from "@/lib/store";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    if (!mounted) return null;

    return (
        <motion.button
            className="fixed bottom-8 right-8 z-[100] flex h-14 w-14 items-center justify-center rounded-full glass shadow-2xl hover:scale-110 active:scale-95 transition-transform border border-white/20"
            onClick={toggleTheme}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === 'dark' ? (
                        <Sun className="text-yellow-400 w-6 h-6" fill="currentColor" />
                    ) : (
                        <Moon className="text-slate-800 w-6 h-6" fill="currentColor" />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
}
