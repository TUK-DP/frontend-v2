import ImageController from "../../apis/image.controller";
import { useDrawStateStore } from "../../stores/DrawState";
import useFetchKeywords from "./useFetchKeywords";
import useFetchDiary from "../diary/queries/useFetchDiary";

const useSaveCanvas = () => {
  const { drawState } = useDrawStateStore();
  const { keywords, isKeywordEmpty } = useFetchKeywords();
  const { diaryId } = useFetchDiary().diary;
  const mergedCanvas = [];

  // 그림 그리는 캔버스와 ai 도움 받기 사진 올리는 캔버스 합치기
  const mergeCanvas = async (canvasRefs, canvasBgRefs) => {
    console.log(canvasRefs, canvasBgRefs);
    const width = canvasRefs[0].current.width;
    for (let i = 0; i < canvasRefs.length; i++) {
      const resultCanvas = document.createElement("canvas");
      resultCanvas.width = width;
      resultCanvas.height = width;

      const resultCtx = resultCanvas.getContext("2d");

      resultCtx.drawImage(canvasBgRefs[i].current, 0, 0, width, width);
      resultCtx.drawImage(canvasRefs[i].current, 0, 0, width, width);

      const blob = await canvasToBlob(resultCanvas);
      const imgUrl = await uploadCanvasImgToUrl(blob);
      console.log("blob : ", blob);
      console.log("imgUrl : ", imgUrl);
    }
  };

  // 캔버스 저장
  const saveCanvas = async () => {
    const imgUrlsOfCanvas = [];
    // drawState의 키를 배열로 변환하여 순회
    for (const keyword of Object.keys(drawState)) {
      const canvasState = drawState[keyword].canvasState;
      const blob = await imageDataToCanvasBlob(canvasState);
      const imgUrl = await uploadCanvasImgToUrl(blob);

      imgUrlsOfCanvas.push(imgUrl);
    }
    console.log(imgUrlsOfCanvas);
    await saveCanvasToImg(imgUrlsOfCanvas);
  };

  // 캔버스를 blob 형태로 변환
  const canvasToBlob = async (canvas) => {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("blob 데이터 변환 실패"));
        }
      });
    });
  };

  const imageDataToCanvasBlob = async (imageData) => {
    // 새로운 캔버스를 생성
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // 캔버스 크기를 ImageData의 크기로 설정
    canvas.width = imageData.width;
    canvas.height = imageData.height;

    // ImageData를 캔버스에 그리기
    ctx.putImageData(imageData, 0, 0);

    // 캔버스를 blob으로 변환
    return await canvasToBlob(canvas);
  };

  // 캔버스를 이미지로 변환 후, imgUrl 반환
  const uploadCanvasImgToUrl = async (blob) => {
    const formData = new FormData();
    formData.append("image", blob, "image.png");
    const response = await ImageController.uploadImg(formData);
    return response.data.result.imageUrl;
  };

  // 변환 된 이미지를 키워드/일기 아이디로 저장
  const saveCanvasToImg = async (imgUrlsOfCanvas) => {
    if (isKeywordEmpty)
      ImageController.saveImgByDiaryId(diaryId, imgUrlsOfCanvas[0]);
    if (!isKeywordEmpty) {
      await Promise.all(
        keywords.map(({ keywordId }, index) => {
          return ImageController.saveImgByKeyword(
            keywordId,
            imgUrlsOfCanvas[index]
          );
        })
      );
    }
  };
  return { mergeCanvas, saveCanvas };
};

export default useSaveCanvas;
