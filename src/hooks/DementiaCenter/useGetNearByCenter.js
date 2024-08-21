import Center from "../../apis/center.controller";
import useGetPosition from "./useGetPosition";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { HOUR } from "../../utils/api/dateConverter";
import useDebounce from "../common/useDebounce";

export const useGetNearByCenter = () => {
  const { data: position } = useGetPosition();

  const [query, setQuery] = useSearchParams();
  const { inputRadius } = Object.fromEntries(query.entries());

  const { debouncedValue } = useDebounce(inputRadius, 300);

  const {
    isFetching,
    isSuccess,
    data: centerList,
    error,
  } = useQuery({
    queryKey: ["centers", position, debouncedValue],
    queryFn: async () => {
      const response = await Center.searchCenter({
        lat: position?.latitude,
        lon: position?.longitude,
        radius: Number(debouncedValue),
      });

      const { result } = response.data;

      const centerList = result.map((center) => ({
        name: center["치매센터명"],
        latitude: center["위도"],
        longitude: center["경도"],
        address: center["소재지도로명주소"],
        code: center["제공기관코드"],
        distance: parseFloat(center["나와의거리"]).toFixed(1),
        callnumber: center["운영기관전화번호"],
      }));

      centerList.sort((a, b) => a.distance - b.distance);

      return centerList;
    },
    enabled: !!debouncedValue,
    staleTime: 2 * HOUR,
  });

  return {
    isFetching,
    isSuccess,
    centerList,
    error,
    inputRadius: inputRadius ?? 0,
    setInputRadius: (i) => {
      setQuery({ inputRadius: i }, { replace: true });
    },
  };
};
