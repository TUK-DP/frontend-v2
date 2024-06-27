import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBarLayout from "./layouts/NavigationBarLayout";
import { TestApp } from "./pages/TestApp";
import { MobileResponsiveLayout } from "./layouts/MobileResponsiveLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileResponsiveLayout />}>
          <Route exact element={<NavigationBarLayout />}>
            <Route exact path={"/"} element={<TestApp />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
