import { useNavigate } from "react-router-dom";
import { HOME_PAGE_PATH } from "../../pages/Home";

const useGoHome = () => {
  const navigate = useNavigate();
  const goHomePage = () => {
    navigate(HOME_PAGE_PATH);
  };
  return { goHomePage };
};

export default useGoHome;
