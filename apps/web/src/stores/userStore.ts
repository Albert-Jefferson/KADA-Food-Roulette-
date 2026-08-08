import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProfile } from '@/api';

interface UserState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  
  // Actions
  setUser: (user: UserProfile | null) => void;
  setToken: (token: string | null) => void;
  login: (token: string, user: UserProfile) => void;
  logout: () => void;
  updateUser: (updates: Partial<UserProfile>) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setUser: (user) => set({ user, isAuthenticated: !!user }),

      setToken: (token) => {
        if (token) {
          localStorage.setItem('token', token);
        } else {
          localStorage.removeItem('token');
        }
        set({ token });
      },

      login: (token, user) => {
        localStorage.setItem('token', token);
        set({ token, user, isAuthenticated: true });
      },

      logout: () => {
        localStorage.removeItem('token');
        set({ token: null, user: null, isAuthenticated: false });
      },

      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ token: state.token }),
    }
  )
);
