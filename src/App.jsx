import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBarLayout from "./layouts/NavigationBarLayout";
import { TestApp } from "./pages/TestApp";
import { MobileResponsiveLayout } from "./layouts/MobileResponsiveLayout";
import Signup, { SIGNUP_PAGE_PATH } from "./pages/Signup";
import Signin, { SIGNIN_PAGE_PATH } from "./pages/Signin";

function App() {
  return (
 <MobileResponsiveLayout>
      <BrowserRouter>
        <Routes>
          <Route element={<NavigationBarLayout />}>
            <Route path="/" element={<TestApp />} />
          </Route>
          <Route path={SIGNUP_PAGE_PATH} element={<Signup />} />
          <Route path={SIGNIN_PAGE_PATH} element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </MobileResponsiveLayout>
  );  
}

export default App;
