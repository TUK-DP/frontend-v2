import { useEffect } from "react";
import { useAiImageStore } from "../../stores/AiImagesStore";
const useResetAiImages = () => {
  const { resetAiImages } = useAiImageStore();

  useEffect(() => {
    resetAiImages();
  }, []);
};
export default useResetAiImages;
