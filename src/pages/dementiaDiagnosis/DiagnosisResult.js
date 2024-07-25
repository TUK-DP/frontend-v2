import RecentDiagnosisGraph from "../../components/mypage/RecentDiagnosisGraph";
import CompareBarChart from "../../components/diagnosis/CompareBarChart";
import { getDiagnosisState } from "../../utils/diagnosis/getDiagnosisState";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE_PATH } from "../Home";

export const DIAGNOSIS_RESULT_PAGE_PATH = "/diagnosis/result";

const DiagnosisResult = () => {
  const number = 10;

  const { text, textColor } = getDiagnosisState(number);

  return (
    <div className={"text-5xl px-32 pb-10 mobile:px-4 mobile:text-2xl"}>
      <div
        className={`text-6xl mobile:text-4xl font-bold text-center ${textColor}`}
      >
        {text}
      </div>
      <RecentDiagnosisGraph
        number={number}
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
      <CompareBarChart pre={5} now={number} />
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
