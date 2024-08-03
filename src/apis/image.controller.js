import { Api } from "./common.controller";

class ImgController extends Api {
  // 이미지 업로드
  uploadImg = async (formData) => {
    return await this.post("/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  // 키워드 별 이미지 저장
  saveImgByKeyword = async (keywordId, imgUrl) => {
    return await this.post(`/keyword/${keywordId}/image`, {
      imgUrl,
    });
  };
  // 키워드가 없을 때
  saveImgByDiaryId = async (diaryId, imgUrl) => {
    return await this.post(`/diary/${diaryId}/image`, {
      imgUrl,
    });
  };
}

export default new ImgController();
