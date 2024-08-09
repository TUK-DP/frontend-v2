import { useState } from "react";
import FontSizeControl from "../../components/mypage/FontSizeControl";
import ApiKeyInput from "../../components/mypage/ApiKeyInput";
import useFetchUser from "../../hooks/user/query/useFetchUser";
import { removeUserInLocalStorage } from "../../utils/auth/localStorageController";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE_PATH } from "../Home";
import userStore from "../../stores/UserStore";
import { useQueryClient } from "@tanstack/react-query";
import RecentDiagnosisGraph from "../../components/mypage/RecentDiagnosisGraph";
import useFetchRecentDiagnosis from "../../hooks/Diagnosis/queries/useFetchRecentDiagnosis";
import { RECENT_DIARIES_PAGE_PATH } from "./RecentDiaries";
import SurveyIcon from "../../assets/home/button/btn_survey.png";
import useGoDiagnosisGuide from "../../hooks/Diagnosis/useGoDiagnosisGuide";

export const MY_PAGE_PATH = "/mypage";

const MyPage = () => {
  const { user } = useFetchUser();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState({
    fontSize: false,
    apiKey: false,
  });

  const onClick = (name) => {
    setIsOpen({
      ...isOpen,
      [name]: !isOpen[name],
    });
  };

  const goRecentDiaryPage = () => {
    navigate(RECENT_DIARIES_PAGE_PATH);
  };

  return (
    <div className={"relative pb-20 flex flex-col gap-4 px-4"}>
      <h1 className={"text-5xl font-bold mb-10"}>{user?.username}</h1>
      <LogoutButton />

      <RecentDiagnosisSection />

      <h1 onClick={goRecentDiaryPage} className={"text-3xl cursor-pointer"}>
        최근 일기
      </h1>
      <FontSizeControl
        isOpen={isOpen.fontSize}
        onClick={() => onClick("fontSize")}
      />
      <ApiKeyInput isOpen={isOpen.apiKey} onClick={() => onClick("apiKey")} />
    </div>
  );
};

const RecentDiagnosisSection = ({ ...props }) => {
  const { record, isCanRender, isRecordExist } = useFetchRecentDiagnosis();

  const { goDiagnosisGuide } = useGoDiagnosisGuide();

  if (isCanRender && isRecordExist) {
    return (
      <>
        <h2 className={"text-3xl font-bold"}>최근 진단 결과</h2>
        <div className={"border-2 rounded-xl"}>
          <RecentDiagnosisGraph number={record[0].totalScore} />
        </div>
        <p className={"border-b-2 border-black my-6"} />
      </>
    );
  }
  if (isCanRender && !isRecordExist) {
    return (
      <div
        className={
          "p-4 rounded-lg font-bold border-2 mb-4 text-xl h-20 box-content bg-secondary-600 cursor-pointer"
        }
        onClick={goDiagnosisGuide}
      >
        <img
          className={"h-full aspect-square float-right "}
          src={SurveyIcon}
          alt="사진"
        />
        <div className={"flex-col flex h-full"}>
          <div className={""}>치매 진단 기록이 없습니다!</div>
          <div className={"mt-auto"}>진단하러 가볼까요?</div>
        </div>
      </div>
    );
  }
};

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setUserLogout } = userStore((state) => state);
  const queryClient = useQueryClient();
  return (
    <button
      onClick={() => {
        removeUserInLocalStorage();
        setUserLogout();
        navigate(HOME_PAGE_PATH);
        queryClient.clear();
      }}
      className={
        "absolute top-0 right-4 border-4 px-4 py-2 rounded-xl font-bold"
      }
    >
      로그아웃
    </button>
  );
};

export default MyPage;
