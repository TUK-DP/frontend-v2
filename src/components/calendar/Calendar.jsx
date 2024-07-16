import { useState } from "react";
import { CalendarMonthSelector } from "./CalendarMonthSelector";
import { CalendarGrid } from "./CalendarGrid";
import { getCalendarDaysInMonth } from "../../utils/calendar/date";

export const Calendar = ({
  selectedYearMonth,
  setSelectedYearMonth,
  selectedDate,
  setSelectedDate,
}) => {
  // 선택된 달의 길이가 42인 날짜 배열 => ["", "" ,1 , 2, ... , "" ]
  const days = getCalendarDaysInMonth({ ...selectedYearMonth });

  return (
    <>
      <CalendarMonthSelector
        selectedYearMonth={selectedYearMonth}
        setSelectedYearMonth={setSelectedYearMonth}
      />
      <CalendarGrid
        selectedYearMonth={selectedYearMonth}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        days={days}
      />
    </>
  );
};
