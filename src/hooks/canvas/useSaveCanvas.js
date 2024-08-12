import ImageController from "../../apis/image.controller";
import useFetchKeywords from "./useFetchKeywords";
import useFetchDiary from "../diary/queries/useFetchDiary";

const useSaveCanvas = () => {
  const { keywords, isKeywordEmpty } = useFetchKeywords();
  const { diaryId } = useFetchDiary().diary;

  // 그림 저장
  const saveCanvas = async (canvasRefs, canvasBgRefs) => {
    const formData = new FormData();

    for (let i = 0; i < canvasRefs.length; i++) {
      const resultCanvas = await mergeCanvas(canvasRefs[i], canvasBgRefs[i]);
      const blob = await canvasToBlob(resultCanvas);
      formData.append("images", blob, `image${i}.png`);
    }
    const imageUrls = await uploadImages(formData);

    await saveCanvasToImg(imageUrls);
  };

  // 그림 그리는 캔버스와 ai 도움 받기 사진을 한 캔버스로 합치기
  const mergeCanvas = async (canvasRef, canvasBgRef) => {
    try {
      const width = canvasRef.current.width;
      const resultCanvas = document.createElement("canvas");
      resultCanvas.width = width;
      resultCanvas.height = width;

      const resultCtx = resultCanvas.getContext("2d");

      resultCtx.drawImage(canvasBgRef.current, 0, 0, width, width);
      resultCtx.drawImage(canvasRef.current, 0, 0, width, width);

      return resultCanvas;
    } catch (error) {
      console.error("Error merging canvas : ", error);
    }
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

  const uploadImages = async (formData) => {
    try {
      const res = await ImageController.uploadImgs(formData);
      if (res.data.isSuccess) {
        return res.data.result.imageUrls;
      } else {
        console.error(res.data.message);
      }
    } catch (error) {
      console.error("Error uploading images : ", error);
    }
  };

  // 변환 된 이미지를 키워드/일기 아이디로 저장
  const saveCanvasToImg = async (imageUrls) => {
    try {
      if (isKeywordEmpty) {
        await ImageController.saveImgByDiaryId(diaryId, imageUrls[0]);
      } else {
        await Promise.all(
          keywords.map(({ keywordId }, index) => {
            return ImageController.saveImgByKeyword(
              keywordId,
              imageUrls[index]
            );
          })
        );
      }
    } catch (error) {
      console.error("Error saving images : ", error);
    }
  };

  return { saveCanvas };
};

export default useSaveCanvas;
