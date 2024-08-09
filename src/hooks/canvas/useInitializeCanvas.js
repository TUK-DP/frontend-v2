import { useEffect } from "react";
import { useAiImageStore } from "../../stores/AiImagesStore";

const useInitializeCanvas = ({ canvasBgRef, keyword }) => {
  const { AiImages } = useAiImageStore();

  useEffect(() => {
    if (canvasBgRef && canvasBgRef.current) {
      const bgCanvas = canvasBgRef.current;
      const bgCtx = canvasBgRef.current.getContext("2d");

      const matchingImageUrl = AiImages[keyword.keywordId]?.imageUrl;
      const opacity = AiImages[keyword.keywordId]?.opacity;

      if (matchingImageUrl) {
        const backgroundImage = new Image();
        backgroundImage.crossOrigin = "anonymous";
        backgroundImage.src = matchingImageUrl + `?v=${new Date().getTime()}`;
        backgroundImage.onload = () => {
          bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
          bgCtx.globalAlpha = opacity;
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
