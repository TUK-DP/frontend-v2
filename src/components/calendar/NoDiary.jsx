import btn_diary from "../../assets/home/button/btn_diary.png";

const NoDiary = ({ isExist }) => {
  if (isExist) {
    return;
  }

  return (
    <div
      className={
        "px-4 flex font-bold flex-col gap-4 mt-4 text-2xl tablet:text-4xl tablet:gap-10 tablet:mt-10"
      }
    >
      <div>직접 쓴 일기로 그림을 그리고</div>
      <div>퀴즈도 풀어보세요!</div>
      <GoWriteDiaryButton />
    </div>
  );
};

const GoWriteDiaryButton = () => {
  return (
    <div
      className={
        "flex items-center border-2 rounded-xl h-40 p-4 bg-secondary-600 tablet:h-64 cursor-pointer"
      }
    >
      <img src={btn_diary} className={"h-full"} />
      <div className={"text-3xl text-[#5B5B5B] tablet:text-4xl"}>
        일기 쓰러 가기
      </div>
    </div>
  );
};

export default NoDiary;
