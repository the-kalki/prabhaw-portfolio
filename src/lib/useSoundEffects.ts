"use client";

import { useCallback, useEffect, useState } from "react";

// Simple click sound using Web Audio API
function createClickSound(audioContext: AudioContext) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.08);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

export function useSoundEffects() {
    const [isMuted, setIsMuted] = useState(true); // Default muted for better UX
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

    useEffect(() => {
        // Load mute preference from localStorage
        const stored = localStorage.getItem("sound-muted");
        if (stored !== null) {
            setIsMuted(stored === "true");
        }
    }, []);

    useEffect(() => {
        // Save mute preference to localStorage
        localStorage.setItem("sound-muted", String(isMuted));
    }, [isMuted]);

    const initAudio = useCallback(() => {
        if (!audioContext) {
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            setAudioContext(ctx);
            return ctx;
        }
        return audioContext;
    }, [audioContext]);

    const playClick = useCallback(() => {
        if (isMuted) return;
        const ctx = initAudio();
        if (ctx.state === "suspended") {
            ctx.resume();
        }
        createClickSound(ctx);
    }, [isMuted, initAudio]);

    const toggleMute = useCallback(() => {
        setIsMuted((prev) => !prev);
    }, []);

    return { playClick, isMuted, toggleMute };
}
