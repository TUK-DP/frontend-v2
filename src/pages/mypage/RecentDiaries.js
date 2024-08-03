import React, { useEffect } from "react";
import useRequireAuth from "../../hooks/auth/useRequireAuth";
import { useInfiniteQuery } from "@tanstack/react-query";
import { generateRecentMock } from "../../utils/mock/diary/diaryMockData";
import { MINUTE } from "../../utils/api/dateConverter";
import useScreenOn from "../../hooks/common/useScreenOn";
import { range } from "../../utils/array/range";
import { ResponseSkeleton } from "../../components/skeleton/ResponseSkeleton";

export const RECENT_DIARIES_PAGE_PATH = "/recentdiaries";

const RecentDiaries = () => {
  const { userId, isLogin } = useRequireAuth();

  let { data, isFetching, fetchNextPage, isSuccess, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["diary", "recent"],
      queryFn: async ({ pageParam }) => {
        const response = await generateRecentMock(pageParam, 6);
        return response.data.result;
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        if (lastPage.hasNext) return lastPageParam + 1;
        return undefined;
      },
      enabled: isLogin,
      staleTime: MINUTE,
      gcTime: 5 * MINUTE,
    });

  const { isOnScreen, targetRef } = useScreenOn({
    marginOffset: 30,
  });

  useEffect(() => {
    if (!isOnScreen || isFetching || !hasNextPage) return;
    fetchNextPage();
  }, [isOnScreen, isFetching, isSuccess]);

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
            <div className={"h-12 overflow-clip rounded-lg-xl"}>
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
  const { createDate } = diary;
  const [year, month, day] = createDate.split("-");
  return (
    <div className="text-xl md:text-3xl my-9 flex justify-between pr-5">
      {`${Number(month)}월 ${Number(day)}일의 일기`}
      <button>확인하기 {">"} </button>
    </div>
  );
};

const convertData = (data) => {
  return Object.groupBy(
    data.pages
      .flat()
      .map((response) => response.diaryList)
      .flat(),
    ({ createDate }) => createDate.slice(0, 7)
  );
};
