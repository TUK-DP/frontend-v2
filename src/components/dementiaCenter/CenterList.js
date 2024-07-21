import React from "react";

const CenterList = ({ centers, isSearchClicked }) => {
  return (
    <div className={"overflow-scroll"}>
      <NoneCentersComp centers={centers} isSearchClicked={isSearchClicked} />
      {centers.length > 0 && <CenterComp centers={centers} />}
    </div>
  );
};
export default CenterList;

const NoneCentersComp = ({ centers, isSearchClicked }) => {
  if (!isSearchClicked) {
    return <div className={"text-center mt-4"}>치매 센터를 검색해 주세요</div>;
  }
  if (isSearchClicked && centers.length === 0) {
    return <div className={"text-center mt-4"}>검색 결과가 없습니다</div>;
  }
  return null;
};

const CenterComp = ({ centers }) => {
  return (
    <div className="flex-col text-lg">
      {centers.map((center, index) => (
        <div
          key={index}
          className={`flex flex-col h-24 px-3 justify-evenly ${index % 2 === 1 ? "bg-[#F7F7F7]" : ""}`}
        >
          <div className="flex justify-between font-bold text-xl">
            <span>{center.centerName}</span>
            <span>{center.distance} km</span>
          </div>
          <div className={"text-[#686868]"}>{center.address}</div>
        </div>
      ))}
    </div>
  );
};
