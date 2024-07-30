import { create } from "zustand";

const useUserStore = create((set) => ({
  userId: 0,
  token: {
    AccessToken: "",
    RefreshToken: "",
  },
  isLogin: false,
  setUserLogin: ({ userId, AccessToken, RefreshToken }) =>
    set({ userId, isLogin: true, AccessToken, RefreshToken }),
}));

export default useUserStore;
