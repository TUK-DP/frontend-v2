import btn_diary from "../../assets/home/button/btn_diary.png";
import { DIARY_DETAIL_PAGE_PATH } from "../../pages/diaryDetails/DiaryDetail";
import { useNavigate } from "react-router-dom";

const NoDiary = ({ isExist }) => {
  if (isExist) {
    return;
  }

  return (
    <div
      className={
        "px-4 flex font-bold flex-col mobile:gap-4 mobile:mt-4 mobile:text-2xl text-4xl gap-10 mt-10"
      }
    >
      <div>직접 쓴 일기로 그림을 그리고</div>
      <div>퀴즈도 풀어보세요!</div>
      <GoWriteDiaryButton />
    </div>
  );
};

const GoWriteDiaryButton = () => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(DIARY_DETAIL_PAGE_PATH);
      }}
      className={
        "flex items-center border-2 rounded-xl mobile:h-28 p-4 bg-secondary-600 h-48 cursor-pointer mb-5"
      }
    >
      <img src={btn_diary} className={"h-full mr-5"} />
      <div className={"mobile:text-2xl text-[#5B5B5B] text-4xl"}>
        일기 쓰러 가기
      </div>
    </div>
  );
};

export default NoDiary;
