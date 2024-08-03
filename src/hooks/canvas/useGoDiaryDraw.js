import { useNavigate } from "react-router-dom";
import { DIARY_DRAW_PAGE_PATH } from "../../pages/draws/DiaryDraw";

const useGoDiaryDraw = () => {
  const navigate = useNavigate();
  const goDiaryDraw = () => {
    navigate(DIARY_DRAW_PAGE_PATH);
  };
  return { goDiaryDraw };
};

export default useGoDiaryDraw;
