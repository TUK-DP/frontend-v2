import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBarLayout from "./layouts/NavigationBarLayout";
import { TestApp } from "./pages/test/TestApp";
import { MobileResponsiveLayout } from "./layouts/MobileResponsiveLayout";
import { TEST_BOTTOM_SHEET_PAGE_PATH, TestBottomSheetTutorialPage } from "./pages/test/TestBottomSheetTutorialPage";

function App() {
  return (
    <MobileResponsiveLayout>
      <BrowserRouter>
        <Routes>
          <Route exact element={<NavigationBarLayout />}>
            <Route exact path={"/"} element={<TestApp />} />
            <Route exact path={TEST_BOTTOM_SHEET_PAGE_PATH} element={<TestBottomSheetTutorialPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MobileResponsiveLayout>
  );
}

export default App;
