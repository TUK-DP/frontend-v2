import useFetchDiary from "../diary/queries/useFetchDiary";

const useFetchKeywords = () => {
  const { diary } = useFetchDiary();
  let keywords = diary?.keywords ?? [];

  return { keywords };
};

export default useFetchKeywords;
