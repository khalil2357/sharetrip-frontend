import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DUMMY_USER, ADMIN_USER } from '@/lib/dummy-data';

interface AuthState {
  isAuthenticated: boolean;
  user: typeof DUMMY_USER | typeof ADMIN_USER | null;
  isAdmin: boolean;
  login: (email: string, password: string, role?: 'user' | 'admin') => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      isAdmin: false,
      login: (email, password, role = 'user') => {
        // Dummy auth — accept any non-empty input
        if (!email || !password) return false;
        
        if (role === 'admin') {
          set({ isAuthenticated: true, user: ADMIN_USER, isAdmin: true });
        } else {
          set({ isAuthenticated: true, user: { ...DUMMY_USER, email }, isAdmin: false });
        }
        return true;
      },
      logout: () => {
        set({ isAuthenticated: false, user: null, isAdmin: false });
      },
    }),
    {
      name: 'skyroute-auth',
    }
  )
);

interface WishlistState {
  items: { id: string; type: string; title: string }[];
  addItem: (item: { id: string; type: string; title: string }) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const exists = get().items.find((i) => i.id === item.id);
        if (!exists) {
          set((state) => ({ items: [...state.items, item] }));
        }
      },
      removeItem: (id) => {
        set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
      },
      isInWishlist: (id) => {
        return !!get().items.find((i) => i.id === id);
      },
    }),
    {
      name: 'skyroute-wishlist',
    }
  )
);
