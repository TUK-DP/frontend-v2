import { Api } from "./common.controller";

class DiaryRecallController extends Api {
  // 일기회상 퀴즈
  quiz = async ({ diaryId }) => {
    return await this.get("/quiz", { diaryId });
  };
}

export default new DiaryRecallController();
