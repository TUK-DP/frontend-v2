import { useEffect } from "react";
import { useAiImageStore } from "../../stores/AiImagesStore";
import { useKeywordStore } from "../../stores/KeywordStore";

const useInitializeCanvas = ({ canvasBgRef, keyword }) => {
  const { AiImages } = useAiImageStore();

  useEffect(() => {
    if (canvasBgRef && canvasBgRef.current) {
      const bgCanvas = canvasBgRef.current;
      const bgCtx = canvasBgRef.current.getContext("2d");

      const matchingImageUrl = AiImages[keyword.keywordId]?.imageUrl;

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
      } else {
        bgCtx.fillStyle = "white";
        bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
      }
    }
  }, [canvasBgRef, AiImages, keyword]);

  return {};
};
export default useInitializeCanvas;
