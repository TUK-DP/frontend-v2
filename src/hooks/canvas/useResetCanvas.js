import { useEffect } from "react";
import { useAiImageStore } from "../../stores/AiImagesStore";
import { useKeywordStore } from "../../stores/KeywordStore";
const useResetCanvas = () => {
  const { resetAiImages } = useAiImageStore();
  const { resetSelectedKeyword } = useKeywordStore();

  useEffect(() => {
    resetAiImages();
    resetSelectedKeyword();
  }, []);
};
export default useResetCanvas;
