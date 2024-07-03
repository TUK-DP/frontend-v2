import { useEffect, useRef, useState } from "react";

export const TEST_DIARY_PAGE_PATH = "/test/diary";

export const TestDiaryPage = () => {
  return <TestCalender />;
};

const TestCalender = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(BOTTOM_POSITION);


  const onClick = () => {
    console.log(isOpen);
    setIsOpen(pre => !pre);
  };

  return (
    <>
      <div onClick={() => {
        console.log("top");
        setPosition(TOP_POSITION);
      }}>{"<"}</div>
      <div onClick={() => {
        console.log("middle");
        setPosition(MIDDLE_POSITION);
      }}>{"0"}</div>
      <div onClick={() => {
        console.log("bottom");
        setPosition(BOTTOM_POSITION);
      }}>{">"}</div>
      <div className={"w-full h-[300px] bg-blue-600"} onClick={onClick}>
        this is calender please click me
      </div>
      <BottomSheet position={position} />
    </>
  );
};

const TOP_POSITION = "top_position";
const MIDDLE_POSITION = "middle_position";
const BOTTOM_POSITION = "bottom_position";

const BottomSheet = ({ position, offset = 150 }) => {
  const middleLimitComp = useRef(null);
  const container = useRef(null);

  const [styleMapper, setStyleMapper] = useState({
    [TOP_POSITION]: { top: 0 },
    [MIDDLE_POSITION]: { top: 0 }, // 초기화는 useEffect에서
    [BOTTOM_POSITION]: { top: "100%" },
  });

  // MIDDLE_POSITION 초기화
  useEffect(() => {
    const middleTop = middleLimitComp.current.getBoundingClientRect().bottom;
    setStyleMapper(prev => ({
        ...prev,
        [MIDDLE_POSITION]: { top: middleTop },
      }),
    );
  }, []);

  // position이 바뀔 때마다 containerStyle을 변경
  useEffect(() => {
    setContainerStyle(styleMapper[position]);
  }, [position]);


  const [isClickStart, setIsClickStart] = useState(false);
  const [containerStyle, setContainerStyle] = useState(styleMapper[position]);
  const [movingContainerStyle, setMovingContainerStyle] = useState(styleMapper[position]);



  const lastInteraction = useRef({
    lastContainerTop: 0,
    lastClickPointY: 0,
  });


  const onMouseDown = (e) => {
    setIsClickStart(true);
    let containerTop = container.current.getBoundingClientRect().top;
    setMovingContainerStyle({ top: containerTop });
    lastInteraction.current.lastContainerTop = containerTop;
    lastInteraction.current.lastClickPointY = e.clientY;
  };

  const onMouseMove = (e) => {
    if (isClickStart === false) {
      return;
    }
    const diff = lastInteraction.current.lastClickPointY - e.clientY;
    setMovingContainerStyle({ top: lastInteraction.current.lastContainerTop - diff });
  };

  const onMouseUp = () => {
    setIsClickStart(false);
    const diff = movingContainerStyle.top - lastInteraction.current.lastContainerTop;

    if (Math.abs(diff) < offset) {
      setMovingContainerStyle(containerStyle);
      return;
    }

    if (diff > 0) {
      if (containerStyle === styleMapper[TOP_POSITION] && movingContainerStyle.top < styleMapper[MIDDLE_POSITION].top + offset) {
        setContainerStyle(styleMapper[MIDDLE_POSITION]);
      } else {
        setContainerStyle(styleMapper[BOTTOM_POSITION]);
      }
    }

    if (diff < 0) {
      setContainerStyle(styleMapper[TOP_POSITION]);
    }
  };

  return (
    <>
      <div ref={middleLimitComp} />
      <div
        ref={container}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        // onMouseLeave={onMouseUp}
        style={isClickStart ? movingContainerStyle : containerStyle}
        // style={{ top: (isClickStart ? movingPosition : position) }}
        className={"fixed z-10 left-0 right-0 h-full overflow-hidden" +
          " " +
          (isClickStart ? "" : "transition-all duration-500")}>
        <div className={"w-full bg-primary-600 h-full"}>
          this is BottomSheet
        </div>
      </div>
    </>
  );
};