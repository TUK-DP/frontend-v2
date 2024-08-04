import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import img1 from "../../assets/remembrance/noKeyword.png";
import img2 from "../../assets/remembrance/questionMark.png";

const KeywordReferenceDrawingViewer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentKeyword = queryParams.get("keyword");
  const [selectedDrawing, setSelectedDrawing] = useState({
    id: 1,
    src: img1,
  });

  return (
    <>
      <SelectedDrawingViewer selectedDrawing={selectedDrawing} />
      <DrawingListScroller
        selectedDrawing={selectedDrawing}
        setSelectedDrawing={setSelectedDrawing}
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
          src={selectedDrawing.src}
          alt="Selected Drawing"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const DrawingListScroller = ({ selectedDrawing, setSelectedDrawing }) => {
  const DrawingList = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img1 },
    { id: 4, src: img2 },
    { id: 5, src: img1 },
    { id: 6, src: img2 },
    { id: 7, src: img1 },
    { id: 8, src: img2 },
    { id: 9, src: img1 },
    { id: 10, src: img2 },
  ];

  const scrollerRef = useRef(null);

  useEffect(() => {
    if (scrollerRef.current) {
      //선택된 그림 요소 찾기
      const selectedElement = scrollerRef.current.querySelector(
        `img[data-id='${selectedDrawing.id}']`
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
      {DrawingList.map((drawing) => (
        <img
          key={drawing.id}
          data-id={drawing.id}
          src={drawing.src}
          className={`transition-transform duration-500 w-20 md:w-32 aspect-square ml-6 md:ml-10 cursor-pointer
            ${
              selectedDrawing.id === drawing.id
                ? "-translate-y-10 border-2 border-[#6100C1]"
                : "border border-black"
            }`}
          onClick={() => setSelectedDrawing(drawing)}
        />
      ))}
    </div>
  );
};
