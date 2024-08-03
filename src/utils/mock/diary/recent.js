import { range } from "../../array/range";
import { delay } from "../../api/delay";

const recentDiary = range(10)
  .map((value1) =>
    range(20).map((value2) => ({
      diaryId: value1 * 5 + value2,
      title: `title${value1 * 5 + value2}`,
      content: `content${value1 * 5 + value2}`,
      createDate: `2024-${String(value1 + 1).padStart(2, "0")}-${String(value2 + 1).padStart(2, "0")}`,
      imgUrl: "https://source.unsplash.com/random",
    }))
  )
  .flat()
  .reverse();

export const generateRecentMock = async (page, pageSize) => {
  const pageObj = () => {
    const diaryList = recentDiary.slice((page - 1) * pageSize, page * pageSize);
    return {
      totalDataSize: recentDiary.length,
      totalPage: Math.ceil(recentDiary.length / pageSize),
      hasNext: diaryList.at(-1).diaryId !== recentDiary.at(-1).diaryId,
      hasPrevious: diaryList.at(0).diaryId !== recentDiary.at(0).diaryId,
      currentPage: page,
      dataSize: diaryList.length,
      diaryList,
    };
  };

  await delay(600);
  return { data: { result: pageObj(page, pageSize) } };
};
