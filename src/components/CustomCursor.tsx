"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", updateMousePosition);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll("a, button, [role='button']");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    // Don't render on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) {
        return null;
    }

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 2.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            >
                <div className="w-3 h-3 rounded-full bg-white" />
            </motion.div>

            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 z-[9998] pointer-events-none"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isVisible ? (isHovering ? 0.5 : 0.2) : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 0.8,
                }}
            >
                <div className="w-10 h-10 rounded-full border border-emerald-400" />
            </motion.div>
        </>
    );
}
