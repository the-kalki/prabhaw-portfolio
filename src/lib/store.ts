import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      activeSection: 'home',
      isLocked: false,
      theme: 'dark',
      setActiveSection: (section) => set({ activeSection: section }),
      setLocked: (locked) => set({ isLocked: locked }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      reset: () => set({ activeSection: 'home', isLocked: false }),
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({ theme: state.theme }), // Only persist theme
    }
  )
);
