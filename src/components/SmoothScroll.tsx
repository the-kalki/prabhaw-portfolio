"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useStore } from "@/lib/store";

export default function SmoothScroll() {
    const { isLocked } = useStore();

    useEffect(() => {
        if (isLocked) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [isLocked]);

    return null;
}
