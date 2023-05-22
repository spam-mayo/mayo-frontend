const createMap = (latitude: number, longitude: number) => {
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
};

export default createMap;
