"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSoundEffects } from "@/lib/useSoundEffects";

export default function SoundToggle() {
    const { isMuted, toggleMute, playClick } = useSoundEffects();

    const handleClick = () => {
        toggleMute();
        if (isMuted) {
            // Play sound after unmuting (slight delay for state update)
            setTimeout(() => playClick(), 50);
        }
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-4 left-4 z-50 p-3 rounded-full glass opacity-50 hover:opacity-100 transition-all active:scale-90"
            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
        >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
    );
}
