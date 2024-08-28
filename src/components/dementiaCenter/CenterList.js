import React from "react";
import { useNavigate } from "react-router-dom";
import { CENTER_MAP_PAGE_PATH } from "../../pages/dementiaCenter/CenterMap";
import { useGetNearByCenter } from "../../hooks/DementiaCenter/useGetNearByCenter";

const CenterList = () => {
  const { centerList } = useGetNearByCenter();

  return (
    <div className="overflow-scroll scrollbar-hide flex-col text-lg">
      {!!centerList &&
        centerList.map((center, index) => (
          <CenterComp
            key={`${center.name} ${center.address} ${center.code}`}
            center={center}
            index={index}
          />
        ))}
    </div>
  );
};

const CenterComp = ({ center, index }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(CENTER_MAP_PAGE_PATH, { state: { center } });
      }}
      className={`flex flex-col h-24 md:h-32 px-3 md:px-6 justify-evenly ${index % 2 === 1 ? "bg-[#F7F7F7]" : ""}`}
    >
      <div className="flex justify-between font-bold text-xl md:text-3xl">
        <span>{center.name}</span>
        <span>{center.distance} km</span>
      </div>
      <div className={"text-[#686868] md:text-2xl"}>{center.address}</div>
    </div>
  );
};

export default CenterList;
