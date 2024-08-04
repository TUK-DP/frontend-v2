import { useEffect } from "react";
import { useAiImageStore } from "../../stores/AiImagesStore";
import { useKeywordStore } from "../../stores/KeywordStore";

const useInitializeCanvas = ({ canvasBgRef }) => {
  const { AiImages } = useAiImageStore();
  const { selectedKeyword } = useKeywordStore();

  useEffect(() => {
    if (canvasBgRef && canvasBgRef.current) {
      const bgCanvas = canvasBgRef.current;
      const bgCtx = canvasBgRef.current.getContext("2d");

      bgCtx.fillStyle = "white";
      bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);

      const matchingImageUrl = AiImages[selectedKeyword.keywordId]?.imageUrl;

      if (matchingImageUrl) {
        const backgroundImage = new Image();
        backgroundImage.crossOrigin = "anonymous";
        backgroundImage.src = matchingImageUrl + `?v=${new Date().getTime()}`;
        backgroundImage.onload = () => {
          bgCtx.drawImage(
            backgroundImage,
            0,
            0,
            bgCanvas.width,
            bgCanvas.height
          );
        };
      }
    }
  }, [canvasBgRef.current, AiImages, selectedKeyword.keywordId]);

  return {};
};
export default useInitializeCanvas;
