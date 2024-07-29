import React, { useState } from "react";
import CenterList from "../../components/dementiaCenter/CenterList";
import Search from "../../assets/dementiaCenter/search.png";
import { useGetNearByCenter } from "../../hooks/DementiaCenter/useGetNearByCenter";

export const DEMENTIA_CENTER_PAGE_PATH = "/dementia/center";

const DementiaCenter = () => {
  const {
    isPositionFetchingDone,
    isCenterDataFetchingDone,
    inputRadius,
    onRadiusChange,
    centers,
    fetchNearbyCenters,
  } = useGetNearByCenter({
    latitude: "",
    longitude: "",
  });

  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearch = () => {
    setIsSearchClicked(true);
    fetchNearbyCenters();
  };

  return (
    <div className={"flex flex-col h-[99%] pt-5"}>
      <SearchBar
        isPositionFetchingDone={isPositionFetchingDone}
        onSearch={handleSearch}
        value={inputRadius}
        onRadiusChange={onRadiusChange}
      />
      <CenterList
        centers={centers}
        isSearchClicked={isSearchClicked}
        isPositionFetchingDone={isPositionFetchingDone}
        isCenterDataFetchingDone={isCenterDataFetchingDone}
      />
    </div>
  );
};

export default DementiaCenter;

const SearchBar = ({
  isPositionFetchingDone,
  onSearch,
  value,
  onRadiusChange,
}) => {
  return (
    <div className="mx-2.5 mb-3 flex items-center w-auto h-12 md:h-16 px-4 md:px-5 border-[1px] rounded-3xl border-black">
      <input
        value={value}
        onChange={onRadiusChange}
        className="border-none flex-1 text-lg md:text-2xl outline-none"
        type={"number"}
        placeholder={
          !isPositionFetchingDone
            ? "위치 정보를 가져오는 중입니다..."
            : "거리(km)를 입력해주세요."
        }
      />
      {isPositionFetchingDone && (
        <img
          src={Search}
          className={"h-9 w-9 cursor-pointer"}
          onClick={onSearch}
        />
      )}
      {!isPositionFetchingDone && <Spinner />}
    </div>
  );
};

const Spinner = () => {
  return (
    <div
      className={`animate-spin rounded-full h-9 w-9 border-4 border-b-white`}
    />
  );
};
