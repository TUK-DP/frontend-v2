import { CALENDAR_HEADER, isEqualDate } from "../../utils/calendar/date";

export const CalendarGrid = ({
  selectedMonth,
  selectedDate,
  setSelectedDate,
  days,
}) => {
  return (
    <div className={"grid grid-cols-7 text-4xl mobile:text-2xl"}>
      <CalendarHeader />
      <CalenderBody
        days={days}
        selectedMonth={selectedMonth}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

const CalendarHeader = () => {
  const isSaturday = (day) => {
    return day === "토";
  };

  const isSunday = (day) => {
    return day === "일";
  };

  return CALENDAR_HEADER.map((day, index) => (
    <CalendarCell key={day}>
      <span
        className={`font-black mb-2 
          ${isSaturday(day) && "text-blue-600"} 
          ${isSunday(day) && "text-red-600"}`}
      >
        {day}
      </span>
    </CalendarCell>
  ));
};

const CalenderBody = ({
  days,
  selectedMonth,
  selectedDate,
  setSelectedDate,
}) => {
  const getKey = (selectedMonth, index) => {
    return `${selectedMonth.year}.${selectedMonth.month}.${index}`;
  };

  const isSaturday = (index) => {
    return index % 7 === 6;
  };

  const isSunday = (index) => {
    return index % 7 === 0;
  };

  const isSelectedCell = (day) => {
    return isEqualDate(selectedDate, {
      year: selectedMonth.year,
      month: selectedMonth.month,
      day,
    });
  };

  const handleClickCell = (day) => {
    if (!day) return;

    setSelectedDate({
      year: selectedMonth.year,
      month: selectedMonth.month,
      day,
    });
  };

  return days.map((day, index) => (
    <CalendarCell key={getKey(selectedMonth, index)}>
      <div
        className={`flex justify-center rounded-full items-center cursor-pointer px-1 w-16 h-16
          mobile:w-10 mobile:h-10
          ${isSunday(index) && "text-red-600"}
          ${isSaturday(index) && "text-blue-600"}
          ${isSelectedCell(day) && "bg-blue-600 !text-white"}
        `}
        onClick={() => handleClickCell(day)}
      >
        {day}
      </div>
    </CalendarCell>
  ));
};

const CalendarCell = ({ className = "", children }) => {
  return (
    <div
      className={`flex justify-center items-center w-full h-full ${className}`}
    >
      {children}
    </div>
  );
};
