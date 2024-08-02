import { create } from "zustand";

const useUserStore = create((set) => ({
  userId: 0,
  isLogin: false,
  setUserLogin: ({ userId }) => set({ userId, isLogin: true }),
  setUserLogout: () => set({ userId: 0, isLogin: false }),
}));

export default useUserStore;
