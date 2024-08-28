import React from "react";
import useGetPosition from "../../hooks/DementiaCenter/useGetPosition";
import { useGetNearByCenter } from "../../hooks/DementiaCenter/useGetNearByCenter";
import CenterList from "../../components/dementiaCenter/CenterList";
import useGetAddress from "../../hooks/DementiaCenter/useGetAddress";

export const DEMENTIA_CENTER_PAGE_PATH = "/dementia/center";

const DementiaCenter = () => {
  const { address } = useGetAddress();

  return (
    <div className={"flex flex-col h-heightWithOutHeader pt-5"}>
      <span className={"w-full text-center mb-4"}>
        {!!!address ? "내 주소 가져오는 중..." : `내위치 : ${address}`}
      </span>
      <SearchBar />
      <NoneCentersComp />
      <CenterList />
    </div>
  );
};

export default DementiaCenter;

const SearchBar = () => {
  const { isFetching } = useGetPosition();
  const { inputRadius, setInputRadius } = useGetNearByCenter();
  return (
    <div className="mx-2.5 mb-3 flex items-center w-auto min-h-12 md:min-h-16 px-4 md:px-5 border-[1px] rounded-3xl border-black">
      <input
        value={inputRadius}
        onChange={(e) => setInputRadius(e.target.value)}
        className="border-none flex-1 text-lg md:text-2xl outline-none"
        type="number"
        placeholder={
          isFetching
            ? "위치 정보를 가져오는 중입니다..."
            : "거리(km)를 입력해주세요."
        }
      />
      {isFetching && <Spinner />}
    </div>
  );
};

const NoneCentersComp = () => {
  const { isFetching, error: positionError } = useGetPosition();
  const { isFetching: isCenterFetching, centerList } = useGetNearByCenter();

  if (isFetching) {
    return null;
  }

  const renderMessage = () => {
    if (positionError) {
      return positionError.message;
    }
    if (!isCenterFetching && !!centerList && centerList.length === 0) {
      return "검색 결과가 없습니다";
    }
  };

  return (
    <div className={"text-center mt-4 md:text-2xl"}>{renderMessage()}</div>
  );
};

const Spinner = () => {
  return (
    <div
      className={`animate-spin rounded-full h-9 w-9 border-4 border-b-white`}
    />
  );
};
