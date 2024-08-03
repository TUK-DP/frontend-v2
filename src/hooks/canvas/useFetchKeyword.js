import useFetchDiary from "../diary/queries/useFetchDiary";

const useFetchKeywords = () => {
  const { diary } = useFetchDiary();
  let keywords = diary?.keywords ?? [];
  let isKeywordEmpty = false;

  if (diary.keywords.length === 0) {
    keywords.push({
      keyword: "자유롭게 그려보세요!",
      keywordId: 0,
      imgUrl: null,
    });
    isKeywordEmpty = true;
  }

  return { keywords, isKeywordEmpty };
};

export default useFetchKeywords;
