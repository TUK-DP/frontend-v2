import { range } from "../array/range";

export const CALENDAR_HEADER = ["일", "월", "화", "수", "목", "금", "토"];

export const getNextYearMonth = ({ year, month }) => {
  if (month === 12) {
    return {
      year: year + 1,
      month: 1,
    };
  }

  return {
    year,
    month: month + 1,
  };
};

export const getPreYearMonth = ({ year, month }) => {
  if (month === 1) {
    return {
      year: year - 1,
      month: 12,
    };
  }

  return {
    year,
    month: month - 1,
  };
};

export const isSaturday = (index) => {
  return index % 7 === 6;
};

export const isSunday = (index) => {
  return index % 7 === 0;
};

export const isEqualDate = (date1, date2) => {
  return (
    date1.year === date2.year &&
    date1.month === date2.month &&
    date1.day === date2.day
  );
};

// 선택된 달의 날짜 배열을 반환합니다.
export const getCalendarDaysInMonth = ({ year, month }) => {
  // 달의 첫번째 날의 요일. 월 => 1, 화 => 2, ... 일 => 0
  let firstDayOfMonth = getFirstDayOfMonth({
    year,
    month,
  });

  // 달의 날짜 마지막 날.
  const lastDayInMonth = getLastDayOfMonth({
    year,
    month,
  });

  // 빈 셀, 실제 날짜 삽입
  let days = [
    ...range(firstDayOfMonth).map(() => ""),
    ...range(1, lastDayInMonth + 1),
  ];

  // 마지막 빈 셀을 삽입해 7개로 나누어지도록
  while (days.length % 7 !== 0) {
    days.push("");
  }

  return days;
};

// 달의 첫째 날의 요일을 반환합니다. (0: 일요일, 1: 월요일, ...)
const getFirstDayOfMonth = ({ year, month }) => {
  return new Date(year, month - 1, 1).getDay();
};

// 달의 마지막 날을 반환합니다.
const getLastDayOfMonth = ({ year, month }) => {
  return new Date(year, month, 0).getDate();
};
