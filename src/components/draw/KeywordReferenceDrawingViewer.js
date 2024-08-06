import React, { useState, useRef, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import useFetchKeywordPhotos from "../../hooks/diary/queries/useFetchKeywordPhotos";
import noDrawImg from "../../assets/remembrance/noKeyword.png";
import Spiner from "../../components/Spinner";

const KeywordReferenceDrawingViewer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentKeyword = queryParams.get("keyword") || "default";
  const {
    imgUrls,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isSuccess,
    isError,
  } = useFetchKeywordPhotos(currentKeyword);

  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const imgData = imgUrls.length > 0 ? imgUrls : [noDrawImg];
  const noImages = imgData.length === 1 && imgData[0] === noDrawImg;
  const [selectedDrawing, setSelectedDrawing] = useState(imgData[0]);

  useEffect(() => {
    if (imgUrls.length > 0 && selectedDrawing === noDrawImg) {
      setSelectedDrawing(imgUrls[0]);
    }
  }, [imgUrls, selectedDrawing]);

  useEffect(() => {
    if (isFetching) {
      if (isInitialLoading) {
        return;
      }
      setIsInitialLoading(false);
    } else {
      if (isInitialLoading) {
        setIsInitialLoading(false);
      }
    }
  }, [isFetching]);

  if (isInitialLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spiner color="#000000" />
      </div>
    );
  }

  return (
    <>
      <SelectedDrawingViewer selectedDrawing={selectedDrawing} />
      <DrawingListScroller
        selectedDrawing={selectedDrawing}
        setSelectedDrawing={setSelectedDrawing}
        imgUrls={imgData}
        noImages={noImages}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
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
  fetchNextPage,
  hasNextPage,
  isFetching,
}) => {
  const scrollerRef = useRef(null);
  const observerRef = useRef(null);

  const observeLastImage = useCallback(
    (node) => {
      if (isFetching) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          console.log("Fetching next page...");
          fetchNextPage();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [isFetching, hasNextPage, fetchNextPage]
  );

  useEffect(() => {
    if (scrollerRef.current) {
      const selectedElement = scrollerRef.current.querySelector(
        `img[src='${selectedDrawing}']`
      );
      if (selectedElement) {
        const containerWidth = scrollerRef.current.offsetWidth;
        const selectedElementWidth = selectedElement.offsetWidth;
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
        imgUrls.map((img, index) => {
          if (index === imgUrls.length - 1) {
            return (
              <img
                key={index}
                src={img}
                ref={observeLastImage}
                className={`transition-transform duration-500 w-20 md:w-32 aspect-square ml-6 md:ml-10 cursor-pointer ${
                  selectedDrawing === img
                    ? "-translate-y-10 border-2 border-[#6100C1]"
                    : "border border-black"
                }`}
                onClick={() => setSelectedDrawing(img)}
              />
            );
          }
          return (
            <img
              key={index}
              src={img}
              className={`transition-transform duration-500 w-20 md:w-32 aspect-square ml-6 md:ml-10 cursor-pointer ${
                selectedDrawing === img
                  ? "-translate-y-10 border-2 border-[#6100C1]"
                  : "border border-black"
              }`}
              onClick={() => setSelectedDrawing(img)}
            />
          );
        })
      ) : (
        <div className="flex items-center justify-center w-full h-full text-xl md:text-3xl">
          <p>키워드 그림이 존재하지 않습니다.</p>
        </div>
      )}
    </div>
  );
};
