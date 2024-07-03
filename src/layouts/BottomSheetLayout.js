import { useEffect, useRef, useState } from "react";

export const TOP_POSITION = "top_position";
export const MIDDLE_POSITION = "middle_position";
export const BOTTOM_POSITION = "bottom_position";

export const BottomSheetLayout = ({ position, setPosition, offset = 150, children }) => {
  const middleLimitComp = useRef(null);
  const bottomSheet = useRef(null);
  const [middleTop, setMiddleTop] = useState(0); // useEffect 에서 초기화

  // middleTop 을 초기화
  useEffect(() => {
    setMiddleTop(middleLimitComp.current.getBoundingClientRect().bottom);
  }, []);

  // position 에 따라 staticContainerTop 을 변경
  useEffect(() => {
    switch (position) {
      case TOP_POSITION:
        setStaticContainerTop(0);
        break;
      case MIDDLE_POSITION:
        setStaticContainerTop(middleTop);
        break;
      case BOTTOM_POSITION:
        setStaticContainerTop("100%");
        break;
    }
  }, [position]);

  const [isClicking, setIsClicking] = useState(false);
  const [movingContainerTop, setMovingContainerTop] = useState(0);
  const [staticContainerTop, setStaticContainerTop] = useState(0);

  const whenMouseDown = useRef({
    containerTop: 0,
    clientY: 0,
  });

  const handleMouseDown = (e) => {
    setIsClicking(true);
    setMovingContainerTop(bottomSheet.current.getBoundingClientRect().top);
    whenMouseDown.current.containerTop = bottomSheet.current.getBoundingClientRect().top;
    whenMouseDown.current.clientY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (isClicking === false) {
      return;
    }
    const diffY = whenMouseDown.current.clientY - e.clientY;
    // top 에서 위로 움직였다면 return
    if (position === TOP_POSITION && diffY > 0) return;
    setMovingContainerTop(whenMouseDown.current.containerTop - diffY);
  };

  const handleMouseUpOrLeave = () => {
    if (isClicking === false) return; // 클릭 중이 아니라면 무시
    setIsClicking(false);

    // top 은 아래로 갈수록 커짐
    // offset 보다 적게 움직였다면 원래 위치로 돌아감
    if (Math.abs(staticContainerTop - movingContainerTop) <= offset) {
      return;
    }

    // offset 보다 많이 움직였다면
    // 아래로 움직였다면
    if (movingContainerTop > staticContainerTop) {
      // 만약 MIDDLE 에서 움직였다면 BOTTOM으로 이동
      if (position === MIDDLE_POSITION) {
        setPosition(BOTTOM_POSITION);
        return;
      }

      // 만약 TOP에서 움직였다면 MIDDlE 으로 이동
      setPosition(MIDDLE_POSITION);

      // 만약 container 가 MIDDLE의 top 보다 offset 만큼 더 내려갔다면 BOTTOM으로 이동
      if (movingContainerTop >= middleTop + offset) {
        setPosition(BOTTOM_POSITION);
      }
    }

    // 위로 움직였다면
    if (movingContainerTop < staticContainerTop) {
      setPosition(TOP_POSITION);
    }
  };

  return (
    <>
      <div ref={middleLimitComp} />
      <div
        ref={bottomSheet}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}

        onTouchStart={(e) => handleMouseDown(e.touches[0])}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
        onTouchEnd={handleMouseUpOrLeave}

        style={{ top: isClicking ? movingContainerTop : staticContainerTop }}
        className={"fixed z-10 left-0 right-0 top-0 bottom-0 h-full overflow-hidden" +
          " " +
          (isClicking ? "" : "transition-all duration-500")}>
        {children}
      </div>
    </>
  );
};