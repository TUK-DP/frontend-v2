import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  const latitude = 37.340174;
  const longitude = 126.7335933;

  return (
    <>
      <Map
        center={{ lat: latitude, lng: longitude }}
        style={{ width: "100%", height: "100%" }}
      >
        <MapMarker position={{ lat: latitude, lng: longitude }} />
      </Map>
    </>
  );
};

export default KakaoMap;
