import React, { useState } from "react";
import GymIcon from "../../assets/gym/GymIcon.png";
import AccordionWrapper from "../../components/wrapper/AccordionWrapper";
import { GYM_DATA } from "../../assets/gym/GYM_DATA";

export const GYM_PAGE_PATH = "/gym";

const Gym = () => {
  return (
    <>
      <GymBanner />
      <GymList />
    </>
  );
};

export default Gym;

const GymBanner = () => {
  return (
    <div className={"flex w-full justify-around px-2 pb-5"}>
      <div className={"flex flex-col font-bold justify-between py-2"}>
        <p className={"text-3xl"}>체조로 예방하세요!</p>
        <p className={"text-xl text-secondary-500"}>
          몸을 움직이는 것은
          <br />
          치매 예방에 도움이 됩니다!
        </p>
      </div>
      <img src={GymIcon} />
    </div>
  );
};

const GymList = () => {
  return (
    <>
      {GYM_DATA.map((data, index) => {
        return (
          <GymItem
            key={index}
            data={data}
            bgColor={index % 2 == 0 ? "bg-secondary-400" : "bg-white"}
          />
        );
      })}
    </>
  );
};

const GymItem = ({ data, bgColor }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const handleClickVideoOpen = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  const width = window.innerWidth * 0.9;

  return (
    <div
      className={`w-full flex flex-col ${bgColor} text-xl p-5 items-center tablet:px-10`}
      onClick={handleClickVideoOpen}
    >
      <p className={"w-full font-bold text-left"}>{data.title}</p>
      <p className={"w-full text-right"}>{data.time}</p>
      {isVideoOpen ? <div className={"h-5 tablet:h-10"}></div> : null}
      <AccordionWrapper isOpen={isVideoOpen}>
        <iframe
          width={width}
          height={(width / 16) * 9}
          src={data.src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </AccordionWrapper>
    </div>
  );
};
