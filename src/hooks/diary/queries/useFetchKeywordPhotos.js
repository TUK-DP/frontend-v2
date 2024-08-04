import { useQuery } from "@tanstack/react-query";
import DiaryController from "../../../apis/diary.controller";

const useFetchKeywordPhotos = (keyword, page = 1, pageSize = 6) => {
  const {
    data = { imgUrls: [] },
    isFetching,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: [keyword, page],
    queryFn: async () => {
      const response = await DiaryController.getKeywordPhotos({
        keyword,
        page,
        pageSize,
      });
      return response.data.result;
    },
    keepPreviousData: true,
    enabled: !!keyword,
  });

  return { imgUrls: data.imgUrls, isFetching, isSuccess, isError };
};

export default useFetchKeywordPhotos;
