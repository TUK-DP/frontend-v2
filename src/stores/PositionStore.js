import { create } from "zustand";

export const positionStore = create((set) => ({
  position: { latitude: undefined, longitude: undefined },
  setPosition: ({ latitude, longitude }) =>
    set({ position: { latitude, longitude } }),
}));
