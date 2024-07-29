import { Api } from "./common.controller";

class ImageController extends Api {
  // // 이미지 업로드
  // uploadImg = async (imgData) => {
  //   return await this.post("/image", {
  //     data: imgData,
  //     content_type: "multipart/form-data",
  //   });
  // };

  //AI 이미지 생성
  /**
   * @return {Promise<AxiosResponse<ApiResponse<AiImageList>>>}
   */
  generateImage = async ({ password = "쓰레기값", prompt, n }) => {
    return await this.post("/image/generate", { password, prompt, n });
  };
}

export default new ImageController();

/**
 * @typedef {{
 *   urls : string[],
 * }} AiImageList
 */
