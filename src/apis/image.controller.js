import { Api } from "./common.controller";

class ImageController extends Api {
  //AI 이미지 생성
  /**
   * @return {Promise<AxiosResponse<ApiResponse<AiImageList>>>}
   */
  generateImage = async ({ password = "쓰레기값", prompt, n }) => {
    return await this.post("/image/generate", { password, prompt, n });
  };

  checkState = async ({ taskId }) => {
    return await this.get("/image/generate", { taskId });
  };

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

export default new ImageController();

/**
 * @typedef {{
 *   urls : string[],
 * }} AiImageList
 */
