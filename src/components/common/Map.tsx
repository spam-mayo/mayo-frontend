import type { FC } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const lat = 33.45;
const lng = 126.57;

const KakaoMap: FC = () => {
  return (
    <Map
      style={{ width: '450px', height: '400px', border: '1px solid #a9c0cd', borderRadius: '6px' }}
      center={{ lat, lng }}
    />
  );
};

export default KakaoMap;
