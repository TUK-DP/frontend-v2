import { useNavigate } from "react-router-dom";
import { DEMENTIA_CENTER_PAGE_PATH } from "../../pages/dementiaCenter/DementiaCenter";

const useGoDementiaCenter = () => {
  const navigate = useNavigate();
  const goDementiaCenterPage = () => {
    navigate(DEMENTIA_CENTER_PAGE_PATH);
  };
  return { goDementiaCenterPage };
};

export default useGoDementiaCenter;
