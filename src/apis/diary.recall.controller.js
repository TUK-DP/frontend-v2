import { Api } from "./common.controller";

class DiaryRecallController extends Api {
  // 일기회상 퀴즈
  quiz = async ({ diaryId }) => {
    return await this.get("/quiz", { diaryId });
  };
  // 일기회상 답안 제출 및 확인
  checkAnswer = async (answers) => {
    return await this.post("/diary/checkanswer", answers);
  };
}

export default new DiaryRecallController();
