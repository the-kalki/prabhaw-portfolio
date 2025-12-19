import { create } from 'zustand';

type Section = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'myspace';

interface AppState {
    activeSection: Section;
    isLocked: boolean;
    theme: 'dark' | 'light';
    setActiveSection: (section: Section) => void;
    setLocked: (locked: boolean) => void;
    toggleTheme: () => void;
    reset: () => void;
}

export const useStore = create<AppState>((set) => ({
    activeSection: 'home',
    isLocked: false,
    theme: 'dark',
    setActiveSection: (section) => set({ activeSection: section }),
    setLocked: (locked) => set({ isLocked: locked }),
    toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
    reset: () => set({ activeSection: 'home', isLocked: false }),
}));
