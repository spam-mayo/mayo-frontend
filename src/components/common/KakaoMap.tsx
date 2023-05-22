import createMap from '@/utils/createMap';
import { type FC, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Props {
  latitude: number;
  longitude: number;
  onClose: () => void;
}

const KakaoMap: FC<Props> = ({ latitude, longitude, onClose }) => {
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
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default KakaoMap;
