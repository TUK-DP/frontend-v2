import "./index.css";
import "./App.css";
import React, { useEffect } from "react";
import useFontSizeStore from "./stores/FontSizeStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBarLayout from "./layouts/NavigationBarLayout";
import { MobileResponsiveLayout } from "./layouts/MobileResponsiveLayout";
import Home, { HOME_PAGE_PATH } from "./pages/Home";
import HeaderBarLayout from "./layouts/HeaderBarLayout";
import DementiaDiagnosisRoutes from "./routes/DementiaDiagnosisRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import DiaryAndRecallRoutes from "./routes/DiaryAndRecallRoutes";
import DiaryAndDrawRoutes from "./routes/DiaryAndDrawRoutes";
import MainPageFeatureRoutes from "./routes/MainPageFeatureRoutes";
import MyPageFeatureRoutes from "./routes/MyPageFeatureRoutes";
import DementiaCenterRoutes from "./routes/DementiaCenterRoutes";
import useAutoLogin from "./hooks/auth/query/useAutoLogin";
import useSetFlutterPosition from "./hooks/DementiaCenter/useSetFlutterPostion";

function App() {
  const fontSize = useFontSizeStore((state) => state.fontSize);

  useAutoLogin();
  // Flutter 앱일때 페이지 로드 시 위치 설정
  useSetFlutterPosition();

  useEffect(() => {
    // 페이지 로드 시 폰트 크기 설정
    document.documentElement.style.fontSize = fontSize;
  }, [fontSize]);

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

            {/* 치매 센터 관련 라우팅 */}
            {DementiaCenterRoutes()}

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
