import { positionStore } from "../../stores/PositionStore";
import { useEffect } from "react";

const useSetFlutterPosition = () => {
  const query = new URLSearchParams(window.location.search);
  const { latitude, longitude } = Object.fromEntries(query.entries());
  const { setPosition } = positionStore();

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      setPosition({ latitude, longitude });
    }
  }, []);
};

export default useSetFlutterPosition;
