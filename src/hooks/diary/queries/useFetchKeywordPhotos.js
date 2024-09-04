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
        return {
          imgUrls: response.data.result.imgUrls,
          hasNextPage: response.data.result.hasNext,
          currentPage: response.data.result.currentPage,
          totalPage: response.data.result.totalPage,
        };
      },
      getNextPageParam: (lastPage) => {
        return lastPage.hasNextPage && lastPage.currentPage < lastPage.totalPage
          ? lastPage.currentPage + 1
          : undefined;
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
