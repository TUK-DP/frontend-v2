import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBarLayout from "./layouts/NavigationBarLayout";
import { TestApp } from "./pages/TestApp";
import { MobileResponsiveLayout } from "./layouts/MobileResponsiveLayout";
import { TEST_DIARY_PAGE_PATH, TestDiaryPage } from "./pages/TestDiaryPage";

function App() {
  return (
    <MobileResponsiveLayout>
      <BrowserRouter>
        <Routes>
          <Route exact element={<NavigationBarLayout />}>
            <Route exact path={"/"} element={<TestApp />} />
            <Route exact path={TEST_DIARY_PAGE_PATH} element={<TestDiaryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MobileResponsiveLayout>
  );
}

export default App;
