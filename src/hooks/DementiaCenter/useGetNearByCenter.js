import { useEffect, useState, useCallback } from "react";
import Center from "../../apis/center.controller";

export const useGetNearByCenter = ({ latitude, longitude }) => {
  const [position, setPosition] = useState({
    latitude: latitude,
    longitude: longitude,
  });

  const [isPositionFetchingDone, setIsPositionFetchingDone] = useState(false);
  const [isCenterDataFetchingDone, setIsCenterDataFetchingDone] =
    useState(true);
  const [inputRadius, setInputRadius] = useState(() => {
    return sessionStorage.getItem("inputRadius") || "";
  });
  const [centers, setCenters] = useState(() => {
    const savedCenters = sessionStorage.getItem("centers");
    return savedCenters ? JSON.parse(savedCenters) : [];
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onRadiusChange = (event) => {
    setInputRadius(event.target.value);
  };

  const fetchNearbyCenters = useCallback(async () => {
    if (!isPositionFetchingDone) {
      return;
    }

    if (!position.latitude || !position.longitude) {
      setErrorMessage("위치 정보를 불러오지 못했습니다.");
      return;
    }

    setIsCenterDataFetchingDone(false);

    let response;

    try {
      response = await Center.searchCenter({
        lat: position.latitude,
        lon: position.longitude,
        radius: parseInt(inputRadius),
      });
    } catch (e) {
      console.log("Error fetching nearby centers:", e.message);
      setErrorMessage("센터 정보를 불러오는 중 오류가 발생했습니다.");
      return;
    }

    setIsCenterDataFetchingDone(true);

    const { isSuccess, message, result } = response.data;

    if (isSuccess === false) {
      console.error("Error fetching nearby centers:", message);
      setErrorMessage("센터 정보를 불러오지 못했습니다");
      return;
    }

    const centerList = result.map((center) => ({
      name: center["치매센터명"],
      latitude: center["위도"],
      longitude: center["경도"],
      address: center["소재지도로명주소"],
      distance: parseFloat(center["나와의거리"]).toFixed(1),
      callnumber: center["운영기관전화번호"],
    }));

    centerList.sort((a, b) => a.distance - b.distance);
    setCenters(centerList);
  }, [inputRadius, isPositionFetchingDone, position]);

  const updatePosition = () => {
    setInputRadius("");
    setIsPositionFetchingDone(false);
    setErrorMessage("");

    if (window.position) {
      let newPosition = {
        latitude: Number(window.position.latitude),
        longitude: Number(window.position.longitude),
      };
      setPosition(newPosition);
      setIsPositionFetchingDone(true);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setIsPositionFetchingDone(true);
        },
        (error) => {
          console.log("위치를 가져오는데 실패함 :", error);
          setErrorMessage("위치를 가져오는데 실패했습니다.");
          setIsPositionFetchingDone(true);
        }
      );
    } else {
      console.log("지원되지 않는 브라우저 입니다.");
      setErrorMessage("브라우저에서 위치 정보를 지원하지 않습니다.");
      setIsPositionFetchingDone(true);
    }
  };

  useEffect(() => {
    updatePosition();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("inputRadius", inputRadius);
  }, [inputRadius]);

  useEffect(() => {
    sessionStorage.setItem("centers", JSON.stringify(centers));
  }, [centers]);

  return {
    isPositionFetchingDone,
    isCenterDataFetchingDone,
    inputRadius,
    onRadiusChange,
    centers,
    fetchNearbyCenters,
    errorMessage,
  };
};
