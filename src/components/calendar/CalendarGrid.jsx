import {
  CALENDAR_HEADER,
  isEqualDate,
  isSaturday,
  isSunday,
} from "../../utils/calendar/date";

export const CalendarGrid = ({
  days,
  selectedYearMonth,
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <div className={"grid grid-cols-7 text-4xl mobile:text-2xl"}>
      <CalendarHeader />
      <CalenderBody
        days={days}
        selectedYearMonth={selectedYearMonth}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

const CalendarHeader = () => {
  return CALENDAR_HEADER.map((day, index) => (
    <CalendarCell key={day}>
      <span
        className={`font-black mb-2 
          ${isSaturday(index) && "text-blue-600"} 
          ${isSunday(index) && "text-red-600"}`}
      >
        {day}
      </span>
    </CalendarCell>
  ));
};

const CalenderBody = ({
  days,
  selectedYearMonth,
  selectedDate,
  setSelectedDate,
}) => {
  const handleClickCell = (day) => {
    if (!day) return;

    setSelectedDate({
      ...selectedYearMonth,
      day,
    });
  };

  const isSelectedCell = (day) => {
    return isEqualDate(selectedDate, {
      ...selectedYearMonth,
      day,
    });
  };

  const getKey = (selectedMonth, index) => {
    return `${selectedMonth.year}.${selectedMonth.month}.${index}`;
  };

  return days.map((day, index) => (
    <CalendarCell key={getKey(selectedYearMonth, index)}>
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
