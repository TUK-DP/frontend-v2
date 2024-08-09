import { useNavigate } from "react-router-dom";
import { GYM_PAGE_PATH } from "../../pages/gym/Gym";

const useGoGym = () => {
  const navigate = useNavigate();
  const goGymPage = () => {
    navigate(GYM_PAGE_PATH);
  };

  return { goGymPage };
};

export default useGoGym;
