import { positionStore } from "../../stores/PositionStore";
import { useQuery } from "@tanstack/react-query";
import { HOUR } from "../../utils/api/dateConverter";

const useGetPosition = () => {
  const { position } = positionStore();
  const { latitude, longitude } = position;

  const { isFetching, isSuccess, data, error } = useQuery({
    queryKey: ["position"],
    queryFn: () => {
      return new Promise((resolve, reject) => {
        if (latitude && longitude) {
          resolve({ latitude, longitude });
        }

        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.log("위치를 가져오는데 실패함 :", error);
            reject(new Error("위치를 가져오는데 실패하였습니다."));
          }
        );
      });
    },
    staleTime: 2 * HOUR,
  });

  return { isFetching, isSuccess, data, error };
};

export default useGetPosition;
