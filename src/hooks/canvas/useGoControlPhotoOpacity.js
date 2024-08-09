import { useNavigate } from "react-router-dom";
import { CONTROL_PHOTO_OPACITY_PAGE_PATH } from "../../pages/draws/ControlPhotoOpacity";
const useGoControlPhotoOpacity = () => {
  const navigate = useNavigate();
  const goControlPhotoOpacity = () => {
    navigate(CONTROL_PHOTO_OPACITY_PAGE_PATH);
  };
  return { goControlPhotoOpacity };
};
export default useGoControlPhotoOpacity;
