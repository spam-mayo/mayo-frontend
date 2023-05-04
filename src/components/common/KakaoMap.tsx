import { type FC, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Props {
  latitude: number;
  longitude: number;
  onClick: () => void;
}

const KakaoMap: FC<Props> = ({ latitude, longitude, onClick }: Props) => {
  useEffect(() => {
    const container = document.getElementById('map') as HTMLElement;
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(latitude, longitude);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
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
