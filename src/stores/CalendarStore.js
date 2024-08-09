import { create } from "zustand";
import { getNow } from "../utils/calendar/date";

const { year, month, day } = getNow();

export const useCalendarStore = create((set) => ({
  selectedDate: { year, month, day },
  selectedYearMonth: { year, month },

  setSelectedDate: ({ year, month, day }) => {
    set((state) => ({
      selectedDate: { year, month, day },
    }));
  },

  setSelectedYearMonth: ({ year, month }) => {
    set((state) => ({
      selectedYearMonth: { year, month },
    }));
  },
}));
