import { useEffect } from "react";
import { useAiImageStore } from "../../stores/AiImagesStore";
import { useKeywordStore } from "../../stores/KeywordStore";
import { useDrawStateStore } from "../../stores/DrawState";
const useResetCanvas = () => {
  const { resetAiImages } = useAiImageStore();
  const { resetSelectedKeyword } = useKeywordStore();
  const { resetCanvasState } = useDrawStateStore();

  useEffect(() => {
    resetCanvasState();
    resetAiImages();
    resetSelectedKeyword();
  }, []);
};
export default useResetCanvas;
