import { Api } from "./common.controller";
import { delay } from "../utils/api/delay";
import { SECONDS } from "../utils/api/dateConverter";

/**
 * @typedef {{
 *   id : number,
 *   title : string,
 *   createDate : string - YYYY-MM-DD,
 *   content : string,
 *   imgUrl : string,
 * }} Diary
 *
 * @typedef{{
 *  isExist : boolean,
 *  diaryId :number | null,
 * }} CheckDiary
 *
 * @typedef {{
 *   "2024-7" : {
 *      "1" : CheckDiary,
 *      // ...
 *   },
 * }} CheckDiaries
 *
 */

class DiaryController extends Api {
  //유저의 일기 조회

  /**
   * @return {Promise<AxiosResponse<ApiResponse<Diary>>>}
   */
  findDiaryByUserIdAndDate = async (userId, { date }) => {
    return await this.get(`/diary/user/${userId}`, { date });
  };

  /**
   * @return {Promise<AxiosResponse<ApiResponse<CheckDiaries>>>}
   */
  findCheckDiaries = async ({ userId, year, month }) => {
    await delay(500);
    return await this.get("/diary/check", { userId, year, month });
  };

  // //일기 작성
  // writeDiary = async (diaryData) => {
  //   return await this.post("/diary", { data: diaryData });
  // };
  // //일기 수정
  // updateDiary = async (diaryId, diaryData) => {
  //   return await this.patch(`/diary/${diaryId}`, { data: diaryData });
  // };
  // // 일기 삭제
  // deleteDiary = async (diaryId, diaryData) => {
  //   return await this.delete(`/diary/${diaryId}`);
  // };
  // //일기회상 퀴즈
  // getQuiz = async ({ diaryId }) => {
  //   return await this.get(`/quiz?diaryId=${diaryId}`);
  // };
  // //일기회상 답안 확인
  // checkAnswer = async (quizData) => {
  //   return await this.post("/diary/checkanswer", { data: quizData });
  // };
  // //일기별 키워드 조회
  // getKeyword = async (diaryId) => {
  //   return await this.get(`/keyword/diary/${diaryId}`);
  // };
  // //키워드별 사진 페이징
  // getKeywordPhotos = async ({ keyword, page, pageSize }) => {
  //   return await this.get(
  //     `/image?keyword=${keyword}&page=${page}&pageSize=${pageSize}`
  //   );
  // };
  // //키워드별 이미지 저장
  // saveKeywordImg = async (keywordId, imgUrl) => {
  //   return await this.post(`/keyword/${keywordId}/image`, {
  //     data: imgUrl,
  //   });
  // };
  // //그래프 데이터 가져오기
  // getGraphData = async (diaryId) => {
  //   return await this.get(`/diary/${diaryId}/graph`);
  // };
  // //일기 이미지 저장
  // saveDiaryImg = async (diaryId, imgUrl) => {
  //   return await this.post(`/diary/${diaryId}/image`, {
  //     data: imgUrl,
  //   });
  // };
  // //기간별 일기 리스트 가져오기
  // searchDiaryList = async ({ userId, startDate, finishDate, sortBy }) => {
  //   return await this.get(
  //     `/diary/list?userId=${userId}&startDate=${startDate}&finishDate=${finishDate}&sortBy=${sortBy}`
  //   );
  // };
  // //기간별 일기 유무 리스트 가져오기
  // checkDiaryList = async ({ userId, year, month }) => {
  //   return await this.get(
  //     `/diary/check?userId=${userId}&year=${year}&month=${month}`
  //   );
  // };
}

export default new DiaryController();
