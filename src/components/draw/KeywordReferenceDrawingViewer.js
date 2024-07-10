import React, { useState } from "react";
import img1 from "../../assets/remembrance/noKeyword.png";
import img2 from "../../assets/remembrance/questionMark.png";

const KeywordReferenceDrawingViewer = () => {
  const [selectedDrawing, setSelectedDrawing] = useState({
    id: 1,
    src: img1,
  });

  return (
    <>
      <SelectedDrawingViewer selectedDrawing={selectedDrawing} />
      <DrawingListScroller setSelectedDrawing={setSelectedDrawing} />
    </>
  );
};

export default KeywordReferenceDrawingViewer;

const SelectedDrawingViewer = ({ selectedDrawing }) => {
  return (
    <div className="p-8 md:p-16">
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

const DrawingListScroller = ({ setSelectedDrawing }) => {
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

  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      {DrawingList.map((drawing) => (
        <img
          key={drawing.id}
          src={drawing.src}
          className="w-20 md:w-32 aspect-square ml-6 md:ml-10 border-2 border-black cursor-pointer"
          onClick={() => setSelectedDrawing(drawing)}
        />
      ))}
    </div>
  );
};
