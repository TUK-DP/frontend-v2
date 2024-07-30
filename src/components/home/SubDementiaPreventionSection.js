import React from "react";
import btn_gymnastics from "../../assets/home/button/btn_gymnastics.png";
import btn_rockScissorsPaper from "../../assets/home/button/btn_rockScissorsPaper.png";
import btn_colorMatch from "../../assets/home/button/btn_colorMatch.png";
import useGoGym from "../../hooks/gym/useGoGym";
import { ROCK_SCISSOR_PAPER_INTRO_PAGE_PATH } from "../../pages/games/RockScissorPaperIntro";
import { COLOR_MTACH_INTRO_PAGE_PATH } from "../../pages/games/ColorMatchIntro";

import { useNavigate } from "react-router-dom";
const SubDementiaPreventionSection = () => {
  const { goGymPage } = useGoGym();
  return (
    <>
      <div className="text-2xl font-bold mt-14 mb-5">치매를 예방해볼까요?</div>
      <GymnasticsButton goGymPage={goGymPage} />
      <div className=" text-md md:text-xl my-5">
        <span className="text-orange-500">미니게임</span>
        <span>을 통해 두뇌를 활성화 시키세요!</span>
      </div>
      <GameButtonList />
    </>
  );
};
//체조 버튼 컴포넌트
const GymnasticsButton = ({ goGymPage }) => {
  return (
    <div
      className="mb-6 flex justify-between items-center border-2 rounded-xl p-5 md:px-12 bg-[#f4f4f4] text-md sm:text-lg md:text-xl cursor-pointer"
      onClick={goGymPage}
    >
      <img src={btn_gymnastics} />
      <div className="mr-8 md:mr-16">
        <span className="text-orange-500">간단한 체조</span>
        <span>를 통해</span>
        <br />
        <span>치매를 예방하세요 {">"}</span>
      </div>
    </div>
  );
};

//미니게임 리스트 컴포넌트
export const GameButtonList = () => {
  const navigate = useNavigate();
  //게임 데이터
  const games = [
    {
      imgsrc: btn_rockScissorsPaper,
      name: "지는 가위바위보",
      onClick: () => {
        navigate(ROCK_SCISSOR_PAPER_INTRO_PAGE_PATH);
      },
    },
    {
      imgsrc: btn_colorMatch,
      name: "컬러매치",
      onClick: () => {
        navigate(COLOR_MTACH_INTRO_PAGE_PATH);
      },
    },
  ];

  return (
    <>
      {games.map((game, index) => (
        <div
          key={index}
          className="h-[4rem] flex justify-between items-center border-2 rounded-xl px-4 mb-5 text-lg md:text-2xl cursor-pointer"
          onClick={game.onClick}
        >
          <img src={game.imgsrc} alt={game.name} width={"50px"} />
          {game.name}
          <span className="text-blue-600 font-bold">도전 {">"}</span>
        </div>
      ))}
    </>
  );
};

export default SubDementiaPreventionSection;
