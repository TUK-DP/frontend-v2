import useRequireAuth from "../../auth/useRequireAuth";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MINUTE } from "../../../utils/api/dateConverter";
import useScreenOn from "../../common/useScreenOn";
import { useEffect } from "react";
import DiaryController from "../../../apis/diary.controller";

const useFetchRecentDiary = () => {
  const { userId, isLogin } = useRequireAuth();

  let { data, isFetching, fetchNextPage, isSuccess, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["diary", "recent"],
      queryFn: async ({ pageParam }) => {
        const response = await DiaryController.recentDiaries({
          userId,
          page: pageParam,
          pageSize: 10,
        });
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
    marginOffset: 100,
  });

  useEffect(() => {
    if (!isOnScreen || isFetching || !hasNextPage) return;
    fetchNextPage();
  }, [isOnScreen, isFetching, isSuccess]);

  return { data, isFetching, isSuccess, targetRef };
};

export default useFetchRecentDiary;
