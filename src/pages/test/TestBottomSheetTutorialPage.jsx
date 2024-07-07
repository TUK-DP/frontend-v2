import { useState } from "react";
import {
  BOTTOM_POSITION,
  BottomSheetLayout,
  MIDDLE_POSITION,
  TOP_POSITION,
} from "../../layouts/BottomSheetLayout";
import { CalendarDetail } from "../../components/calendar_detail/CalendarDetail";

export const TEST_BOTTOM_SHEET_PAGE_PATH = "/test/bottom/sheet/diary";

export const TestBottomSheetTutorialPage = () => {
  const [position, setPosition] = useState(BOTTOM_POSITION);

  return (
    <>
      <div
        onClick={() => {
          setPosition(TOP_POSITION);
        }}
      >
        {"맨위로"}
      </div>
      <div
        onClick={() => {
          setPosition(MIDDLE_POSITION);
        }}
      >
        {"중간으로"}
      </div>
      <div
        onClick={() => {
          setPosition(BOTTOM_POSITION);
        }}
      >
        {"닫기"}
      </div>
      <div className={"w-full h-[300px] bg-blue-600 rounded-b-2xl"}>
        여기 대충 달력
      </div>

      <BottomSheetLayout position={position} setPosition={setPosition}>
        <CalendarDetail />
      </BottomSheetLayout>
    </>
  );
};
