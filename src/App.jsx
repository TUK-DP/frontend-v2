import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBarLayout from "./layouts/NavigationBarLayout";
import { MobileResponsiveLayout } from "./layouts/MobileResponsiveLayout";
import Home, { HOME_PAGE_PATH } from "./pages/Home";
import HeaderBarLayout from "./layouts/HeaderBarLayout";
import React from "react";
import DementiaDiagnosisRoutes from "./routes/DementiaDiagnosisRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import DiaryAndRecallRoutes from "./routes/DiaryAndRecallRoutes";
import DiaryAndDrawRoutes from "./routes/DiaryAndDrawRoutes";
import MainPageFeatureRoutes from "./routes/MainPageFeatureRoutes";
import MyPageFeatureRoutes from "./routes/MyPageFeatureRoutes";

function App() {
  return (
    <MobileResponsiveLayout>
      <BrowserRouter>
        <Routes>
          {/* 네브바 */}
          <Route exact element={<NavigationBarLayout />}>
            <Route exact path={HOME_PAGE_PATH} element={<Home />} />
          </Route>
          {/* 헤더바 */}
          <Route element={<HeaderBarLayout />}>
            {/* 치매 진단 관련 라우팅 */}
            {DementiaDiagnosisRoutes()}

            {/* 로그인, 회원가입 관련 라우팅 */}
            {AuthRoutes()}

            {/* 일기, 일기회상, 일기 작성 관련 라우팅 */}
            {DiaryAndRecallRoutes()}

            {/* 일기 그리기, 일기 그리기 도움, 키워드 참조 이미지 관련 라우팅 */}
            {DiaryAndDrawRoutes()}

            {/* 메인 페이지 기능 관련 라우팅 */}
            {/* 운동, 치매센터, 게임 등 */}
            {MainPageFeatureRoutes()}

            {/*마이페이지 기능 관련 라우팅*/}
            {/*최근 일기, 마이페이지, 글씨 크기 조절 등*/}
            {MyPageFeatureRoutes()}
          </Route>
        </Routes>
      </BrowserRouter>
    </MobileResponsiveLayout>
  );
}

export default App;
