import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { User, Session } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  setSession: (session: Session | null) => void;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,
  signIn: async (email, password) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user, session: data.session });
  },
  signUp: async (email, password) => {
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user, session: data.session });
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null, session: null });
  },
  setSession: (session) => set({ 
    session, 
    user: session?.user ?? null,
    loading: false 
  }),
  initialize: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      set({ 
        session,
        user: session?.user ?? null,
        loading: false
      });

      // Set up auth state change listener
      supabase.auth.onAuthStateChange((_event, session) => {
        set({ 
          session,
          user: session?.user ?? null
        });
      });
    } catch (error) {
      console.error('Error initializing auth:', error);
      set({ loading: false });
    }
  },
}));