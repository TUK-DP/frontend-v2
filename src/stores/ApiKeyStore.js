import create from "zustand";

const useApiKeyStore = create((set) => ({
  apiKey: "",
  setApiKey: (input) => set({ apiKey: input }),
}));

export default useApiKeyStore;
