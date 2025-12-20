"use client";

import { useEffect, useRef, useState } from "react";

interface GlowingWiresBackgroundProps {
    intensity?: number; // 0 to 1, default 1
}

interface WireConfig {
    id: number;
    path: string;
    duration: number;
    delay: number;
    color: string;
    glowColor: string;
    thickness: number;
}

// Generate smooth flowing bezier curve path
function generateWirePath(width: number, height: number, seed: number): string {
    const seededRandom = (min: number, max: number) => {
        const x = Math.sin(seed++) * 10000;
        return min + (x - Math.floor(x)) * (max - min);
    };

    // Random start edge
    const startEdge = Math.floor(seededRandom(0, 4));
    let startX: number, startY: number;

    switch (startEdge) {
        case 0: startX = seededRandom(0, width); startY = -100; break;
        case 1: startX = width + 100; startY = seededRandom(0, height); break;
        case 2: startX = seededRandom(0, width); startY = height + 100; break;
        default: startX = -100; startY = seededRandom(0, height);
    }

    // Generate smooth control points
    const numPoints = Math.floor(seededRandom(4, 7));
    const points: { x: number; y: number }[] = [];

    for (let i = 0; i < numPoints; i++) {
        points.push({
            x: seededRandom(width * 0.05, width * 0.95),
            y: seededRandom(height * 0.05, height * 0.95),
        });
    }

    // End on opposite edge
    const endEdge = (startEdge + 2) % 4;
    let endX: number, endY: number;

    switch (endEdge) {
        case 0: endX = seededRandom(0, width); endY = -100; break;
        case 1: endX = width + 100; endY = seededRandom(0, height); break;
        case 2: endX = seededRandom(0, width); endY = height + 100; break;
        default: endX = -100; endY = seededRandom(0, height);
    }

    // Build smooth cubic bezier path
    let d = `M ${startX} ${startY}`;

    const allPoints = [{ x: startX, y: startY }, ...points, { x: endX, y: endY }];

    for (let i = 1; i < allPoints.length; i++) {
        const prev = allPoints[i - 1];
        const curr = allPoints[i];
        const next = allPoints[i + 1] || curr;
        const prevPrev = allPoints[i - 2] || prev;

        // Catmull-Rom to Bezier conversion for smooth curves
        const cp1x = prev.x + (curr.x - prevPrev.x) / 6;
        const cp1y = prev.y + (curr.y - prevPrev.y) / 6;
        const cp2x = curr.x - (next.x - prev.x) / 6;
        const cp2y = curr.y - (next.y - prev.y) / 6;

        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }

    return d;
}

// Premium color palette with glow variants
const colorPalette = [
    { stroke: "rgb(96, 165, 250)", glow: "rgba(96, 165, 250, 0.8)" },   // blue-400
    { stroke: "rgb(167, 139, 250)", glow: "rgba(167, 139, 250, 0.8)" }, // violet-400
    { stroke: "rgb(52, 211, 153)", glow: "rgba(52, 211, 153, 0.8)" },   // emerald-400
    { stroke: "rgb(251, 113, 133)", glow: "rgba(251, 113, 133, 0.8)" }, // rose-400
    { stroke: "rgb(34, 211, 238)", glow: "rgba(34, 211, 238, 0.8)" },   // cyan-400
    { stroke: "rgb(250, 204, 21)", glow: "rgba(250, 204, 21, 0.8)" },   // yellow-400
];

export default function GlowingWiresBackground({ intensity = 1 }: GlowingWiresBackgroundProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const [wires, setWires] = useState<WireConfig[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Generate wires on mount and resize
    useEffect(() => {
        const generateWires = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setDimensions({ width, height });

            const wireCount = 10;
            const newWires: WireConfig[] = [];

            for (let i = 0; i < wireCount; i++) {
                const colorSet = colorPalette[i % colorPalette.length];
                newWires.push({
                    id: i,
                    path: generateWirePath(width, height, i * 1337 + Date.now() % 10000),
                    duration: 20 + (i % 5) * 8, // 20-52 seconds for variety
                    delay: -(i * 3), // Stagger starts
                    color: colorSet.stroke,
                    glowColor: colorSet.glow,
                    thickness: 10 + (i % 3) * 4, // 10-18px base thickness
                });
            }

            setWires(newWires);
        };

        generateWires();

        // Debounced resize handler
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(generateWires, 300);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    // Calculate path length for each wire (approximation)
    const getPathLength = (pathData: string): number => {
        // Approximate path length based on viewport
        return 3000;
    };

    return (
        <div
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{
                zIndex: 1,
                opacity: intensity * 0.55,
            }}
            aria-hidden="true"
        >
            <svg
                ref={svgRef}
                className="w-full h-full dark:mix-blend-screen mix-blend-multiply"
                viewBox={`0 0 ${dimensions.width || 1920} ${dimensions.height || 1080}`}
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    {/* Ambient glow filter - very soft and wide */}
                    <filter id="ambientGlow" x="-300%" y="-300%" width="700%" height="700%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur1" />
                        <feGaussianBlur in="SourceGraphic" stdDeviation="60" result="blur2" />
                        <feMerge>
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                        </feMerge>
                    </filter>

                    {/* Pipe body glow - medium blur */}
                    <filter id="pipeGlow" x="-150%" y="-150%" width="400%" height="400%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Core highlight - tight glow */}
                    <filter id="coreGlow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {wires.map((wire) => {
                    const pathLength = getPathLength(wire.path);
                    const dashLength = 500;
                    const gapLength = pathLength - dashLength;

                    return (
                        <g key={wire.id} className="wire-group">
                            {/* Layer 1: Wide ambient glow */}
                            <path
                                d={wire.path}
                                fill="none"
                                stroke={wire.glowColor}
                                strokeWidth={wire.thickness * 5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#ambientGlow)"
                                opacity={0.1}
                                strokeDasharray={`${dashLength} ${gapLength}`}
                                style={{
                                    animation: `flowWire ${wire.duration}s linear ${wire.delay}s infinite`,
                                    willChange: "stroke-dashoffset",
                                }}
                            />

                            {/* Layer 2: Pipe body */}
                            <path
                                d={wire.path}
                                fill="none"
                                stroke={wire.color}
                                strokeWidth={wire.thickness}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#pipeGlow)"
                                opacity={0.35}
                                strokeDasharray={`${dashLength} ${gapLength}`}
                                style={{
                                    animation: `flowWire ${wire.duration}s linear ${wire.delay}s infinite`,
                                    willChange: "stroke-dashoffset",
                                }}
                            />

                            {/* Layer 3: Inner bright core */}
                            <path
                                d={wire.path}
                                fill="none"
                                stroke="white"
                                strokeWidth={wire.thickness * 0.25}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#coreGlow)"
                                opacity={0.4}
                                strokeDasharray={`${dashLength} ${gapLength}`}
                                style={{
                                    animation: `flowWire ${wire.duration}s linear ${wire.delay}s infinite`,
                                    willChange: "stroke-dashoffset",
                                }}
                            />
                        </g>
                    );
                })}
            </svg>

            {/* Vignette overlay for depth and content separation */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 10%, var(--background) 65%)",
                    opacity: 0.75,
                }}
            />

            {/* CSS Animation - GPU accelerated */}
            <style jsx>{`
        @keyframes flowWire {
          from {
            stroke-dashoffset: 3000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
        </div>
    );
}
