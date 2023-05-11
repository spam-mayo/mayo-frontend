import createMap from '@/utils/createMap';
import { type FC, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Props {
  latitude: number;
  longitude: number;
  onClick: () => void;
}

const KakaoMap: FC<Props> = ({ latitude, longitude, onClick }) => {
  useEffect(() => {
    createMap(latitude, longitude);
  }, []);

  return (
    <div id="map-container">
      <div id="map">
        <Map center={{ lat: latitude, lng: longitude }}>
          <MapMarker position={{ lat: latitude, lng: longitude }} />
        </Map>
      </div>
      <button onClick={onClick}>닫기</button>
    </div>
  );
};

export default KakaoMap;
