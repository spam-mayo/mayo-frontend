import createMap from '@/utils/createMap';
import { type FC, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Props {
  latitude: number | undefined;
  longitude: number | undefined;
  onClose: () => void;
}

const KakaoMap: FC<Props> = ({ latitude, longitude, onClose }) => {
  const lat = latitude ?? 0;
  const lng = longitude ?? 0;

  useEffect(() => {
    createMap(lat, lng);
  }, [lat, lng]);

  return (
    <div id="map-container">
      <div id="map">
        <Map center={{ lat, lng }}>
          <MapMarker position={{ lat, lng }} />
        </Map>
      </div>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default KakaoMap;
