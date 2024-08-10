import {
  CALENDAR_HEADER,
  getCalendarDaysInMonth,
  isEqualDate,
  isSaturday,
  isSunday,
} from "../../utils/calendar/date";
import { dateToDashString } from "../../utils/api/dateConverter";
import { ResponseSkeleton } from "../skeleton/ResponseSkeleton";
import useFetchDiaryChecks from "../../hooks/diary/queries/useFetchDiaryChecks";
import { useCalendarStore } from "../../stores/CalendarStore";

export const CalendarGrid = () => {
  return (
    <>
      <div className={"grid grid-cols-7 gap-2 text-4xl mobile:text-2xl"}>
        <CalendarHeader />
        <CalenderBody />
      </div>
    </>
  );
};

const CalendarHeader = () => {
  return CALENDAR_HEADER.map((day, index) => (
    <CalendarHeaderCell key={day} day={day} index={index} />
  ));
};

const CalenderBody = () => {
  let { setSelectedDate, selectedDate } = useCalendarStore((state) => state);

  // 선택된 달의 길이가 42인 날짜 배열 => ["", "" ,1 , 2, ... , "" ]
  const days = getCalendarDaysInMonth({ ...selectedDate });

  const handleClickCell = (day) => {
    if (!day) return;

    setSelectedDate({
      ...selectedDate,
      day,
    });
  };

  return days.map((day, index) => (
    <CalendarBodyCell
      key={dateToDashString({ ...selectedDate, day: index })}
      {...{ day, handleClickCell }}
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

const CalendarBodyCell = ({ handleClickCell, day, index }) => {
  let { selectedDate } = useCalendarStore((state) => state); // 선택된 달의 길이가 42인 날짜 배열 => ["", "" ,1 , 2, ... , "" ]

  let { isCanRender, isDiaryExistDay } = useFetchDiaryChecks();

  const isSelectedCell = (day) => {
    return isEqualDate(selectedDate, {
      ...selectedDate,
      day,
    });
  };

  return (
    <div className={`flex justify-center items-center w-full`}>
      <div
        className={
          "relative flex justify-center w-16 h-16  mobile:w-10 mobile:h-10"
        }
      >
        {!isCanRender && <ResponseSkeleton />}
        {isCanRender && (
          <>
            <CellWithCircle
              {...{ isSelectedCell, index, day, handleClickCell }}
            />
            <Dot
              isVisible={isDiaryExistDay(day)}
              isSelected={isSelectedCell(day)}
            />
          </>
        )}
      </div>
    </div>
  );
};

const CellWithCircle = ({ day, index, isSelectedCell, handleClickCell }) => {
  return (
    <div
      onClick={() => handleClickCell(day)}
      className={`flex flex-col justify-center aspect-square items-center rounded-full cursor-pointer px-1          
          ${isSunday(index) && "text-red-600"}
          ${isSaturday(index) && "text-blue-600"}
          ${isSelectedCell(day) && "bg-blue-600 !text-white"}
        `}
    >
      {day}
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
