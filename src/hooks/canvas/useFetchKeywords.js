import useFetchDiary from "../diary/queries/useFetchDiary";
import { useKeywordStore } from "../../stores/KeywordStore";

const useFetchKeywords = () => {
  const { selectedKeyword } = useKeywordStore((state) => state);
  const { diary } = useFetchDiary();

  const isKeywordEmpty = !diary?.keywords?.length;
  let keywords = isKeywordEmpty
    ? [
        {
          keyword: "자유롭게 그려보세요!",
          keywordId: 0,
          imgUrl: null,
        },
      ]
    : diary.keywords;

  return { keywords, isKeywordEmpty };
};
export default useFetchKeywords;
