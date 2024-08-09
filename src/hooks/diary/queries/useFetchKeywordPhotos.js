import { useInfiniteQuery } from "@tanstack/react-query";
import DiaryController from "../../../apis/diary.controller";

const useFetchKeywordPhotos = (keyword) => {
  const { data, fetchNextPage, hasNextPage, isFetching, isSuccess, isError } =
    useInfiniteQuery({
      queryKey: [keyword],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await DiaryController.getKeywordPhotos({
          keyword,
          page: pageParam,
          pageSize: 6,
        });
        return response.data.result;
      },
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.imgUrls.length > 0 ? allPages.length + 1 : undefined;
      },
      enabled: !!keyword,
    });

  const imgUrls = data?.pages.flatMap((page) => page.imgUrls) || [];

  return {
    imgUrls,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isSuccess,
    isError,
  };
};

export default useFetchKeywordPhotos;
