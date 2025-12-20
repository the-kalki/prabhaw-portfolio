"use client";

/**
 * NeonGlowBackground - Lightweight neon ambient effect
 * Uses pure CSS gradients and transforms (GPU-accelerated)
 * No JavaScript animations, no SVG filters = maximum performance
 */
export default function NeonGlowBackground() {
    return (
        <div
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        >
            {/* Row 1: Top edge */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full opacity-[0.18] animate-pulse-slow"
                style={{
                    top: "-10%",
                    left: "5%",
                    background: "radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)",
                    filter: "blur(80px)",
                    willChange: "opacity",
                }}
            />
            <div
                className="absolute w-[450px] h-[450px] rounded-full opacity-[0.14] animate-pulse-slower"
                style={{
                    top: "-8%",
                    left: "45%",
                    background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)",
                    filter: "blur(70px)",
                    willChange: "opacity",
                    animationDelay: "-2s",
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full opacity-[0.18] animate-pulse-slow"
                style={{
                    top: "-5%",
                    right: "5%",
                    background: "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 60%)",
                    filter: "blur(60px)",
                    willChange: "opacity",
                    animationDelay: "-4s",
                }}
            />

            {/* Row 2: Middle section */}
            <div
                className="absolute w-[550px] h-[550px] rounded-full opacity-[0.12] animate-pulse-slower"
                style={{
                    top: "25%",
                    left: "-5%",
                    background: "radial-gradient(circle, rgba(52, 211, 153, 0.5) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)",
                    filter: "blur(90px)",
                    willChange: "opacity",
                    animationDelay: "-1s",
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full opacity-[0.10] animate-pulse-slow"
                style={{
                    top: "35%",
                    left: "35%",
                    background: "radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 60%)",
                    filter: "blur(70px)",
                    willChange: "opacity",
                    animationDelay: "-5s",
                }}
            />
            <div
                className="absolute w-[500px] h-[500px] rounded-full opacity-[0.14] animate-pulse-slower"
                style={{
                    top: "20%",
                    right: "-8%",
                    background: "radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)",
                    filter: "blur(80px)",
                    willChange: "opacity",
                    animationDelay: "-3s",
                }}
            />

            {/* Row 3: Bottom section */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full opacity-[0.18] animate-pulse-slow"
                style={{
                    bottom: "-15%",
                    left: "10%",
                    background: "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)",
                    filter: "blur(100px)",
                    willChange: "opacity",
                    animationDelay: "-2s",
                }}
            />
            <div
                className="absolute w-[450px] h-[450px] rounded-full opacity-[0.12] animate-pulse-slower"
                style={{
                    bottom: "-10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 60%)",
                    filter: "blur(80px)",
                    willChange: "opacity",
                    animationDelay: "-6s",
                }}
            />
            <div
                className="absolute w-[550px] h-[550px] rounded-full opacity-[0.14] animate-pulse-slow"
                style={{
                    bottom: "-12%",
                    right: "-5%",
                    background: "radial-gradient(circle, rgba(52, 211, 153, 0.4) 0%, rgba(16, 185, 129, 0.15) 50%, transparent 70%)",
                    filter: "blur(90px)",
                    willChange: "opacity",
                    animationDelay: "-4s",
                }}
            />
        </div>
    );
}
