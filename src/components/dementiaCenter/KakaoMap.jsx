import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = ({ latitude, longitude }) => {
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
