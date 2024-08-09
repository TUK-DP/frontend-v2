import { Api } from "./common.controller";

/**
 * @typedef {{
 *   id: number,
 *   totalScore : number,
 * }} DiagnosisRecord
 */

class DiagnosisController extends Api {
  //치매 진단 설문지 조회
  getDiagnosis = async () => {
    return await this.get(`/diag`);
  };

  //치매 진단 결과 저장
  saveDiagnosisResult = async ({ userId, diagAnswer }) => {
    return await this.post(`/diag`, { userId, diagAnswer });
  };

  //최근 진단 결과 조회
  /**
   * @return {Promise<AxiosResponse<ApiResponse<DiagnosisRecord[]>>>}
   */
  getRecentDiagnosis = async ({ userId }) => {
    return await this.get("/diag/record", { userId });
  };
}

export default new DiagnosisController();
