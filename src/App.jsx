import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBarLayout from "./layouts/NavigationBarLayout";
import { TestApp } from "./pages/TestApp";
import { MobileResponsiveLayout } from "./layouts/MobileResponsiveLayout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileResponsiveLayout />}>
          <Route exact element={<NavigationBarLayout />}>
            <Route exact path={"/"} element={<TestApp />} />
          </Route>
          <Route exact path={"/signup"} element={<Signup />} />
          <Route exact path={"/signin"} element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
