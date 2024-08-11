import { create } from "zustand";
import { getNow } from "../utils/calendar/date";

const { year, month, day } = getNow();

export const useCalendarStore = create((set) => ({
  selectedDate: { year, month, day },

  setSelectedDate: ({ year, month, day }) => {
    set((state) => ({
      selectedDate: { year, month, day },
    }));
  },
}));
