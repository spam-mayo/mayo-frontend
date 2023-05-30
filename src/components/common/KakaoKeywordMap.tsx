import { placeState } from '@/atom/atom';
import Input from '@/components/common/Input';
import keywordMap from '@/utils/keywordMap';
import { type FC, useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';

const KakaoKeywordMap: FC = () => {
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [placeInfo, setPlaceInfo] = useRecoilState(placeState);

  const onChangeSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, []);

  const onClickToggleListBox = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickMarker = useCallback((latitude: number, longitude: number, place: string) => {
    setPlaceInfo({
      latitude,
      longitude,
      place,
      online: false,
    });
  }, []);

  useEffect(() => {
    keywordMap({ onClick: onClickMarker });
  }, [onClickMarker, placeInfo]);

  return (
    <div className="keywordmap-container">
      <div id="form">
        <Input
          label="모임장소"
          placeholder="장소를 검색하세요"
          value={keyword}
          id="keyword"
          onChange={onChangeSearch}
        />
        <button id="submit_btn" type="submit">
          검색
        </button>
      </div>
      <div className="map_wrap">
        <div id="menuDiv">
          <div id="menu_wrap" style={{ display: isOpen ? 'block' : 'none' }}>
            <ul id="placesList"></ul>
            <div id="pagination"></div>
          </div>

          <div id="btnDiv">
            <button type="button" id="searchBtn" onClick={onClickToggleListBox}>
              {isOpen ? '닫기' : '열기'}
            </button>
          </div>
        </div>

        <div id="map"></div>
      </div>
      <div className="selected-place">
        <p>선택 장소 : {placeInfo.place}</p>
      </div>
    </div>
  );
};

export default KakaoKeywordMap;
