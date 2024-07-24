import {
  CALENDAR_HEADER,
  isEqualDate,
  isSaturday,
  isSunday,
} from "../../utils/calendar/date";
import { useQuery } from "@tanstack/react-query";
import DiaryController from "../../apis/diary.controller";
import {
  dateToDotString,
  HOUR,
  yearMonthToDashString,
} from "../../utils/api/dateConverter";
import { ResponseSkeleton } from "../skeleton/ResponseSkeleton";

export const CalendarGrid = ({
  days,
  selectedYearMonth,
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <>
      <div className={"grid grid-cols-7 gap-2 text-4xl mobile:text-2xl"}>
        <CalendarHeader />
        <CalenderBody
          days={days}
          selectedYearMonth={selectedYearMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </>
  );
};

const CalendarHeader = () => {
  return CALENDAR_HEADER.map((day, index) => (
    <CalendarHeaderCell key={day} day={day} index={index} />
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

  return days.map((day, index) => (
    <CalendarBodyCell
      key={dateToDotString({ ...selectedYearMonth, day: index })}
      day={day}
      selectedYearMonth={selectedYearMonth}
      selectedDate={selectedDate}
      handleClickCell={handleClickCell}
    />
  ));
};

const CalendarHeaderCell = ({ index, day, className }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-full ${className}`}
    >
      <span
        className={`font-black mb-2 
          ${isSaturday(index) && "text-blue-600"} 
          ${isSunday(index) && "text-red-600"}`}
      >
        {day}
      </span>
    </div>
  );
};

const CalendarBodyCell = ({
  selectedYearMonth,
  selectedDate,
  className = "",
  handleClickCell,
  day,
  index,
}) => {
  let {
    isFetching,
    isSuccess,
    data: diaryChecks,
  } = useQuery({
    queryKey: [
      "diaries",
      { year: selectedYearMonth.year, month: selectedYearMonth.month },
    ],
    queryFn: () =>
      DiaryController.findCheckDiaries({
        userId: 2,
        year: selectedYearMonth.year,
        month: selectedYearMonth.month,
      }),
    staleTime: HOUR * 2,
  });

  const isSelectedCell = (day) => {
    return isEqualDate(selectedDate, {
      ...selectedYearMonth,
      day,
    });
  };

  return (
    <div
      className={`relative flex flex-col justify-center items-center w-full ${className}`}
    >
      {isFetching && <ResponseSkeleton />}
      {!isFetching && isSuccess && (
        <>
          <div
            className={`flex flex-col justify-center items-center rounded-full cursor-pointer px-1 w-16 h-16
          mobile:w-10 mobile:h-10
          ${isSunday(index) && "text-red-600"}
          ${isSaturday(index) && "text-blue-600"}
          ${isSelectedCell(day) && "bg-blue-600 !text-white"}
        `}
            onClick={() => handleClickCell(day)}
          >
            {day}
          </div>
          <Dot
            isVisible={
              diaryChecks.data.result[
                yearMonthToDashString({ ...selectedYearMonth })
              ][day]?.isExist
            }
            isSelected={isSelectedCell(day)}
          />
        </>
      )}
    </div>
  );
};

const Dot = ({ isVisible, isSelected }) => {
  return (
    <span
      className={`absolute bottom-0 w-2 h-2 bg-primary-600 rounded-full invisible ${isVisible && "!visible"} ${isSelected && "!bg-white"}`}
    />
  );
};
