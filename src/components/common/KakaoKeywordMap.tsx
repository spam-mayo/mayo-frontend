import keywordMap from '@/utils/keywordMap';
import { type FC, useEffect, useState, useCallback } from 'react';

const KakaoKeywordMap: FC = () => {
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const onChangeSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, []);

  const onClickToggleListBox = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    keywordMap();
  }, []);

  return (
    <div className="map_wrap">
      <div id="menuDiv">
        <div id="menu_wrap" style={{ display: isOpen ? 'block' : 'none' }}>
          <div id="map_title">
            <p>장소 검색</p>
          </div>
          <div id="form">
            <input type="text" value={keyword} id="keyword" onChange={onChangeSearch} />
            <button id="submit_btn" type="submit">
              검색
            </button>
          </div>
          <ul id="placesList"></ul>
          <div id="pagination"></div>
        </div>

        <div id="btnDiv">
          <button id="searchBtn" onClick={onClickToggleListBox}>
            {isOpen ? '닫기' : '열기'}
          </button>
        </div>
      </div>
      <div id="map" style={{ width: '500px', height: '300px' }}></div>
    </div>
  );
};

export default KakaoKeywordMap;
