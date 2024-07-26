import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

export const CENTER_MAP_PAGE_PATH = "/dementia/center/map";

const CenterMap = () => {
  return (
    <div className="mx-6">
      <div className="text-center text-2xl font-bold mb-6">center.name</div>
      <div className="bg-[#d9d9d9] h-[30rem]">kakaoMap</div>
      <CenterInfo address={"center.address"} time={"center.time"} />
    </div>
  );
};

export default CenterMap;

const CenterInfo = ({ address, time }) => {
  return (
    <div className="text-xl mt-5">
      <div className="flex items-center mb-3">
        <FaRegBuilding className="mr-3" />
        {address}
      </div>
      <div className="flex items-center">
        <MdOutlineWatchLater className="mr-3" />
        {time}
      </div>
    </div>
  );
};
