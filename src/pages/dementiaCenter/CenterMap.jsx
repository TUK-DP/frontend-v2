import React from "react";
import { useLocation } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import KakaoMap from "../../components/dementiaCenter/KakaoMap";

export const CENTER_MAP_PAGE_PATH = "/dementia/center/map";

const CenterMap = () => {
  const location = useLocation();
  const { center } = location.state;
  return (
    <div className="mx-6 tablet:mx-12">
      <div className="text-center text-2xl tablet:text-4xl font-bold mb-6 tablet:mb-10">
        {center.name}
      </div>
      <div className="h-[30rem] tablet:h-[45rem]">
        <KakaoMap latitude={center.latitude} longitude={center.longitude} />
      </div>
      <CenterInfo address={center.address} callnumber={center.callnumber} />
    </div>
  );
};

export default CenterMap;

const CenterInfo = ({ address, callnumber }) => {
  return (
    <div className="text-xl tablet:text-3xl mt-5 tablet:mt-8 pb-8 md:pb-12">
      <div className="flex items-center mb-3 tablet:mb-6">
        <FaRegBuilding className="mr-3" />
        {address}
      </div>
      <div className="flex items-center">
        <IoCall className="mr-3" />
        {callnumber}
      </div>
    </div>
  );
};
