import { useNavigate } from "react-router-dom";
import { DIARY_DRAW_PAGE_PATH } from "../../pages/draws/DiaryDraw";
import { useDrawingToolStore } from "../../stores/DrawingToolStore";

const useGoDiaryDraw = () => {
  const navigate = useNavigate();
  const { initDrawingTools } = useDrawingToolStore();
  const goDiaryDraw = () => {
    initDrawingTools();
    navigate(DIARY_DRAW_PAGE_PATH);
  };
  return { goDiaryDraw };
};

export default useGoDiaryDraw;
