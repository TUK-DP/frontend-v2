import useFetchDiary from "../diary/queries/useFetchDiary";

const useFetchKeywords = () => {
  const { diary } = useFetchDiary();
  console.log(diary.keywords.length);

  const keywords = diary?.keywords ?? [];

  const updatedKeywords =
    keywords.length === 0
      ? [
          {
            keyword: "자유롭게 그려보세요!",
            keywordId: 0,
            imgUrl: null,
          },
        ]
      : [...keywords];

  const isKeywordEmpty = diary?.keywords.length === 0;

  return { keywords: updatedKeywords, isKeywordEmpty };
};

export default useFetchKeywords;
