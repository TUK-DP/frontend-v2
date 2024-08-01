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

export const MY_PAGE_PATH = "/mypage";

const MyPage = () => {
  const { user } = useFetchUser();
  const { record, isCanRender } = useFetchRecentDiagnosis();

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

  return (
    <div className={"relative pb-20 flex flex-col gap-4 px-4"}>
      <h1 className={"text-5xl font-bold"}>{user?.username}</h1>
      <LogoutButton />
      <h2 className={"text-3xl mt-10 font-bold"}>최근 진단 결과</h2>
      <div className={"border-2 rounded-xl"}>
        {isCanRender && <RecentDiagnosisGraph number={record[0].totalScore} />}
      </div>

      <p className={"border-b-2 border-black my-6"} />

      <h1 className={"text-3xl"}>최근 일기</h1>
      <FontSizeControl
        isOpen={isOpen.fontSize}
        onClick={() => onClick("fontSize")}
      />
      <ApiKeyInput isOpen={isOpen.apiKey} onClick={() => onClick("apiKey")} />
    </div>
  );
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
