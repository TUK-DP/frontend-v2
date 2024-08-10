import RecentDiagnosisGraph from "../../components/mypage/RecentDiagnosisGraph";
import CompareBarChart from "../../components/diagnosis/CompareBarChart";
import { getDiagnosisState } from "../../utils/diagnosis/getDiagnosisState";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE_PATH } from "../Home";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DiagnosisController from "../../apis/diagnosis.controller";
import useRequireAuth from "../../hooks/auth/useRequireAuth";

export const DIAGNOSIS_RESULT_PAGE_PATH = "/diagnosis/result";

const DiagnosisResult = () => {
  const { state } = useLocation();
  const { text, textColor } = getDiagnosisState(state.totalScore);
  const [recentResult, setRecentResult] = useState(0);
  const { userId, isAutoLoginSuccess } = useRequireAuth();

  useEffect(() => {
    if (!isAutoLoginSuccess) return;
    const fetchResult = async () => {
      const res = await DiagnosisController.getRecentDiagnosis({
        userId,
      });
      console.log(res.data.result[1].totalScore);
      setRecentResult(res.data.result[1].totalScore ?? 0);
    };
    fetchResult();
  }, [isAutoLoginSuccess]);

  return (
    <div className={"text-5xl px-32 pb-10 mobile:px-4 mobile:text-2xl"}>
      <div
        className={`text-6xl mobile:text-4xl font-bold text-center ${textColor}`}
      >
        {text}
      </div>
      <RecentDiagnosisGraph
        number={state.totalScore}
        className={"mx-20 mobile:-my-0 mobile:mx-10"}
      />
      <div
        className={
          "flex flex-col gap-10 rounded-xl bg-[#FFECEC] p-10 font-bold text-4xl mobile:text-2xl mobile:gap-4 mobile:p-6"
        }
      >
        <span>정확한 진단을 위해서는</span>
        <span>전문가와의 상담을 권장합니다.</span>
      </div>
      <div className={"my-20 font-bold"}>진단 결과 비교</div>
      <CompareBarChart
        key={
          "이친구들 변경되면 리렌더링 됨" + (recentResult + state.totalScore)
        }
        pre={recentResult}
        now={state.totalScore}
      />
      <GoHomeButton />
    </div>
  );
};

export default DiagnosisResult;

const GoHomeButton = () => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(HOME_PAGE_PATH)}
      className={
        "border-2 rounded-xl py-3 tablet:py-6 flex justify-center items-center cursor-pointer my-10 font-bold"
      }
    >
      홈으로 가기
    </div>
  );
};
