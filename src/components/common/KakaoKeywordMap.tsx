import keywordMap from '@/utils/keywordMap';
import { type FC, useEffect, useState } from 'react';

const KakaoKeywordMap: FC = () => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target.value);
  };

  const onClickToggleListBox = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    keywordMap();
  }, []);

  return (
    <div className="map_wrap">
      <div id="menuDiv">
        <div id="menu_wrap" className="bg_white" style={{ display: isOpen ? 'block' : 'none' }}>
          <div className="option">
            <div id="map_title">
              <div>장소 검색</div>
            </div>

            <div id="form">
              <input type="text" value={search} id="keyword" onChange={onChangeSearch} />
              <button id="submit_btn" type="submit">
                검색
              </button>
            </div>
          </div>
          <ul id="placesList"></ul>
          <div id="pagination"></div>
        </div>

        <div id="btnDiv">
          {isOpen ? (
            <div id="btnOn">
              <button id="searchBtn" onClick={onClickToggleListBox}>
                닫기
              </button>
            </div>
          ) : (
            <div id="btnOn">
              <button id="searchBtn" onClick={onClickToggleListBox}>
                열기
              </button>
            </div>
          )}
        </div>
      </div>
      <div id="map"></div>
    </div>
  );
};

export default KakaoKeywordMap;
