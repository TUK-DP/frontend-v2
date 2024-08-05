import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetchKeywordPhotos from "../../hooks/diary/queries/useFetchKeywordPhotos";
import noDrawImg from "../../assets/remembrance/noKeyword.png";
import img2 from "../../assets/remembrance/questionMark.png";

const KeywordReferenceDrawingViewer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentKeyword = queryParams.get("keyword");
  const { imgUrls, isFetching, isSuccess, isError } =
    useFetchKeywordPhotos(currentKeyword);

  const imgData = imgUrls.length > 0 ? imgUrls : [noDrawImg];
  const noImages = imgData.length === 1 && imgData[0] === noDrawImg;
  const [selectedDrawing, setSelectedDrawing] = useState(imgData[0]);

  return (
    <>
      <SelectedDrawingViewer selectedDrawing={selectedDrawing} />
      <DrawingListScroller
        selectedDrawing={selectedDrawing}
        setSelectedDrawing={setSelectedDrawing}
        imgUrls={imgData}
        noImages={noImages}
      />
    </>
  );
};

export default KeywordReferenceDrawingViewer;

const SelectedDrawingViewer = ({ selectedDrawing }) => {
  return (
    <div className="p-8 md:p-[6rem]">
      <div className="w-full aspect-square border-2 border-black rounded-xl overflow-hidden">
        <img
          src={selectedDrawing}
          alt="Selected Drawing"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const DrawingListScroller = ({
  selectedDrawing,
  setSelectedDrawing,
  imgUrls,
  noImages,
}) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (scrollerRef.current) {
      //선택된 그림 요소 찾기
      const selectedElement = scrollerRef.current.querySelector(
        `img[src='${selectedDrawing}']`
      );
      if (selectedElement) {
        const containerWidth = scrollerRef.current.offsetWidth; //컨테이너 너비
        const selectedElementWidth = selectedElement.offsetWidth; //선택된 그림 너비
        // 선택된 그림의 offsetLeft - (컨테이너 너비)/2 + 선택된 그림 너비 절반 = 컨테이너의 중앙
        const scrollPosition =
          selectedElement.offsetLeft -
          containerWidth / 2 +
          selectedElementWidth / 2;
        scrollerRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [selectedDrawing]);

  return (
    <div
      ref={scrollerRef}
      className="flex overflow-x-scroll scrollbar-hide pt-10"
    >
      {!noImages ? (
        imgUrls.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`transition-transform duration-500 w-20 md:w-32 aspect-square ml-6 md:ml-10 cursor-pointer
              ${
                selectedDrawing === img
                  ? "-translate-y-10 border-2 border-[#6100C1]"
                  : "border border-black"
              }`}
            onClick={() => setSelectedDrawing(img)}
          />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-full text-xl md:text-3xl">
          <p>키워드 그림이 존재하지 않습니다.</p>
        </div>
      )}
    </div>
  );
};
