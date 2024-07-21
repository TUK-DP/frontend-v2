import React, { useState, useEffect } from "react";
import CenterList from "../../components/dementiaCenter/CenterList";
import Search from "../../assets/dementiaCenter/search.png";

export const DEMENTIA_CENTER_PAGE_PATH = "/dementia/center";

const DementiaCenter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [centers, setCenters] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleSearch = () => {
    setCenters([]);
    setIsSearchClicked(true);
  };

  return (
    <div className={"flex flex-col h-[99%] pt-5"}>
      <SearchBar isLoading={isLoading} onSearch={handleSearch} />
      {!isLoading && (
        <CenterList centers={centers} isSearchClicked={isSearchClicked} />
      )}
    </div>
  );
};

export default DementiaCenter;

const SearchBar = ({ isLoading, onSearch }) => {
  return (
    <div className="mx-2.5 mb-3 flex items-center w-auto h-12 md:h-16 px-4 md:px-5 border-[1px] rounded-3xl border-black">
      <input
        className="border-none flex-1 text-lg md:text-2xl outline-none"
        type={"number"}
        placeholder={
          isLoading
            ? "위치 정보를 가져오는 중입니다..."
            : "거리(km)를 입력해주세요."
        }
      />
      {!isLoading && (
        <img
          src={Search}
          className={"h-9 w-9 cursor-pointer"}
          onClick={onSearch}
        />
      )}
      {isLoading && <Spinner />}
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
