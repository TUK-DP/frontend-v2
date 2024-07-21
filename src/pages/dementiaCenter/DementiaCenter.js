import React, { useState, useEffect } from "react";
import CenterList from "../../components/dementiaCenter/CenterList";
import Search from "../../assets/dementiaCenter/search.png";

export const DEMENTIA_CENTER_PAGE_PATH = "/dementia/center";

const DementiaCenter = () => {
  return (
    <div className={"flex flex-col h-[99%] px-2.5 pt-5"}>
      <SearchBar />
      <CenterList />
    </div>
  );
};

export default DementiaCenter;

const SearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex items-center w-auto h-12 md:h-16 px-4 md:px-5 border-[1px] rounded-3xl border-black">
      <InputComp isLoading={isLoading} />
      {isLoading && <Spinner />}
    </div>
  );
};

const InputComp = ({ isLoading }) => {
  return (
    <>
      <input
        className="border-none flex-1 text-lg md:text-2xl"
        type={"number"}
        placeholder={
          isLoading
            ? "위치 정보를 가져오는 중입니다..."
            : "거리(km)를 입력해주세요."
        }
      />
      <SearchIcon isLoading={isLoading} />
    </>
  );
};

const SearchIcon = ({ isLoading }) => {
  return (
    !isLoading && (
      <img src={Search} className={"h-9 w-9 cursor-pointer"} alt={""} />
    )
  );
};

const Spinner = () => {
  return (
    <div
      className={`animate-spin rounded-full h-9 w-9 border-4 border-b-white`}
    />
  );
};
