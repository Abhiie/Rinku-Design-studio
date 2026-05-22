import { create } from 'zustand';

interface LoaderState {
  done: boolean;
  setDone: (done: boolean) => void;
}

export const useLoaderState = create<LoaderState>((set) => ({
  done: false,
  setDone: (done) => set({ done }),
}));
