import React from "react";
import { useNavigate } from "react-router-dom";
import { CENTER_MAP_PAGE_PATH } from "../../pages/dementiaCenter/CenterMap";

const CenterList = ({
  centers,
  isSearchClicked,
  isPositionFetchingDone,
  isCenterDataFetchingDone,
}) => {
  return (
    <>
      <NoneCentersComp
        centers={centers}
        isSearchClicked={isSearchClicked}
        isPositionFetchingDone={isPositionFetchingDone}
        isCenterDataFetchingDone={isCenterDataFetchingDone}
      />
      <div className="overflow-scroll scrollbar-hide">
        {centers.length > 0 && <CenterComp centers={centers} />}
      </div>
    </>
  );
};
export default CenterList;

const NoneCentersComp = ({
  centers,
  isSearchClicked,
  isPositionFetchingDone,
  isCenterDataFetchingDone,
}) => {
  if (!isPositionFetchingDone) {
    return null;
  }
  if (!isSearchClicked && centers.length === 0) {
    return (
      <div className={"text-center mt-4 md:text-2xl"}>
        치매 센터를 검색해 주세요
      </div>
    );
  }
  if (isSearchClicked && isCenterDataFetchingDone && centers.length === 0) {
    return (
      <div className={"text-center mt-4 md:text-2xl"}>검색 결과가 없습니다</div>
    );
  }
  return null;
};

const CenterComp = ({ centers }) => {
  const navigate = useNavigate();

  const onClick = (center) => {
    navigate(CENTER_MAP_PAGE_PATH, { state: { center } });
  };
  return (
    <div className="flex-col text-lg ">
      {centers.map((center, index) => (
        <div
          onClick={() => onClick(center)}
          key={index}
          className={`flex flex-col h-24 md:h-32 px-3 md:px-6 justify-evenly ${index % 2 === 1 ? "bg-[#F7F7F7]" : ""}`}
        >
          <div className="flex justify-between font-bold text-xl md:text-3xl">
            <span>{center.name}</span>
            <span>{center.distance} km</span>
          </div>
          <div className={"text-[#686868] md:text-2xl"}>{center.address}</div>
        </div>
      ))}
    </div>
  );
};
