import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HOUR } from "../../utils/api/dateConverter";
import useGetPosition from "./useGetPosition";

const useGetAddress = () => {
  const { data: position } = useGetPosition();

  const { data: address } = useQuery({
    queryKey: ["position", position],
    queryFn: async () => {
      const response = await axios.request({
        url: `https://dapi.kakao.com/v2/local/geo/coord2address`,
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
        },
        params: {
          x: position.longitude,
          y: position.latitude,
        },
      });

      return response.data.documents[0].road_address.address_name;
    },
    staleTime: 2 * HOUR,
    enabled: !!position,
  });

  return { address };
};

export default useGetAddress;
