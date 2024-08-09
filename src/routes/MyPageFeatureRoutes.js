import { Route } from "react-router-dom";
import MyPage, { MY_PAGE_PATH } from "../pages/mypage/MyPage";
import RecentDiaries, {
  RECENT_DIARIES_PAGE_PATH,
} from "../pages/mypage/RecentDiaries";
import React from "react";

const MyPageFeatureRoutes = () => {
  return (
    <>
      <Route path={MY_PAGE_PATH} element={<MyPage />} />
      <Route path={RECENT_DIARIES_PAGE_PATH} element={<RecentDiaries />} />
    </>
  );
};
export default MyPageFeatureRoutes;
