import React from "react";
import { range } from "../../utils/array/range";
import { ResponseSkeleton } from "../../components/skeleton/ResponseSkeleton";
import useFetchRecentDiary from "../../hooks/diary/queries/useFetchRecentDiary";
import { useCalendarStore } from "../../stores/CalendarStore";
import { useNavigate } from "react-router-dom";
import { DIARY_PAGE_PATH } from "../diarys/Diary";

export const RECENT_DIARIES_PAGE_PATH = "/recentdiaries";

const RecentDiaries = () => {
  const { data, isFetching, isSuccess, targetRef } = useFetchRecentDiary();

  return (
    <div className="ml-10 md:ml-20 pb-6">
      {isSuccess &&
        Object.entries(convertData(data)).map(([yearMonth, diaryArr]) => {
          const [year, month] = yearMonth.split("-");
          return (
            <div key={yearMonth} className="my-8 md:my-16">
              <MonthlyTitle year={year} month={month} />
              {diaryArr.map((diary) => (
                <DiaryItem key={diary.diaryId} diary={diary} />
              ))}
            </div>
          );
        })}
      <div className={"flex flex-col gap-8"}>
        {isFetching &&
          range(6).map(() => (
            <div
              key={Math.random()}
              className={"h-12 overflow-clip rounded-lg-xl"}
            >
              <ResponseSkeleton />
            </div>
          ))}
      </div>
      <div ref={targetRef} />
    </div>
  );
};

export default RecentDiaries;

const MonthlyTitle = ({ year, month }) => {
  return (
    <div className="flex items-center text-2xl md:text-4xl text-[#5B5B5B] font-bold">
      <p>
        {year}년 {month.toString().padStart(2, "0")}월
      </p>
      <div className="flex-1 h-1 bg-[#5B5B5B] ml-2"></div>
    </div>
  );
};

const DiaryItem = ({ diary }) => {
  const { setSelectedYearMonth, setSelectedDate } = useCalendarStore(
    (state) => state
  );

  const navigate = useNavigate();

  const { createDate } = diary;
  const [year, month, day] = createDate.split("-").map((i) => Number(i));

  const onClick = () => {
    setSelectedYearMonth({ year, month });
    setSelectedDate({ year, month, day });
    navigate(DIARY_PAGE_PATH);
  };

  return (
    <div className="text-xl md:text-3xl my-9 flex justify-between pr-5">
      {`${Number(month)}월 ${Number(day)}일의 일기`}
      <button onClick={onClick}>확인하기 {">"} </button>
    </div>
  );
};

/**
 * { pages: [[ {diaryId : 0, createDate: "", diaryList: [...], ...}, ... ]]}
 * 위 데이터를
 * { "2022-02": [{diaryId : 0, createDate: "", diaryList: [...], ...}, ...], "2022-01": [{diaryId : 0, createDate: "", diaryList: [...], ...}, ...] }
 * 형태로 변환
 */
const convertData = (data) => {
  return Object.groupBy(
    data.pages
      .flat()
      .map(({ diaryList }) => diaryList)
      .flat(),
    ({ createDate }) => createDate.slice(0, 7)
  );
};
