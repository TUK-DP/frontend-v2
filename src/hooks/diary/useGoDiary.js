import { useNavigate } from "react-router-dom";
import { DIARY_PAGE_PATH } from "../../pages/diarys/Diary";
import { DIARY_DRAW_PAGE_PATH } from "../../pages/draws/DiaryDraw";

const useGoDiary = () => {
  let navigate = useNavigate();
  const goDiaryPage = () => {
    navigate(DIARY_PAGE_PATH);
  };

  const goDiaryDrawPage = () => {
    navigate(DIARY_DRAW_PAGE_PATH);
  };

  return { goDiaryPage, goDiaryDrawPage };
};

export default useGoDiary;
