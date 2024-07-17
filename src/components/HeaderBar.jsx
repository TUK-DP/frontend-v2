import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HeaderBar = ({ content }) => {
  const navigate = useNavigate();
  const handleClickBackButton = () => {
    navigate(-1);
  };
  return (
    <div className="w-full h-headerBarHeight px-3 py-4 flex flex-row items-center absolute top-0 ">
      <IoIosArrowBack
        size={40}
        color="#B2B2B2"
        onClick={handleClickBackButton}
      />
      {/* 나중에 페이지 이름 넣을 곳 */}
      {/* <div className={"flex-1 text-center"}>{content}</div> */}
      <div className={"w-10"}></div>
    </div>
  );
};

export default HeaderBar;
