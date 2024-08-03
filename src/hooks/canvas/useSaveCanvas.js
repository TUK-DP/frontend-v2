import ImgController from "../../apis/image.controller";
import { useDrawStateStore } from "../../stores/DrawState";
import useFetchKeywords from "./useFetchKeyword";
import useFetchDiary from "../diary/queries/useFetchDiary";

const useSaveCanvas = () => {
  const { drawState } = useDrawStateStore();
  const { keywords, isKeywordEmpty } = useFetchKeywords();
  const { diaryId } = useFetchDiary().diary;

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
    const response = await ImgController.uploadImg(formData);
    return response.data.result.imageUrl;
  };

  // 변환 된 이미지를 키워드/일기 아이디로 저장
  const saveCanvasToImg = async (imgUrlsOfCanvas) => {
    if (isKeywordEmpty)
      ImgController.saveImgByDiaryId(diaryId, imgUrlsOfCanvas[0]);
    if (!isKeywordEmpty) {
      await Promise.all(
        keywords.map(({ keywordId }, index) => {
          return ImgController.saveImgByKeyword(
            keywordId,
            imgUrlsOfCanvas[index]
          );
        })
      );
    }
  };
  return { saveCanvas };
};

export default useSaveCanvas;
