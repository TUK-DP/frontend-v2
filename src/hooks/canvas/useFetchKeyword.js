import useFetchDiary from "../diary/queries/useFetchDiary";

const useFetchKeywords = () => {
  const { diary } = useFetchDiary();
  let keywords = diary?.keywords ?? [];

  if (diary.keywords.length === 0) {
    keywords = [
      { keyword: "자유롭게 그려주세요!", keywordId: 0, imgUrl: null },
    ];
  }

  return { keywords };
};

export default useFetchKeywords;
