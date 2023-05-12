import keywordMap from '@/utils/keywordMap';
import { useEffect, useState } from 'react';

const KakaoKeywordMap = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target.value);
  };

  useEffect(() => {
    keywordMap();
  }, []);

  return (
    <div id="map">
      <div className="map_wrap">
        <div id="map"></div>

        <div id="menuDiv">
          <div id="menu_wrap" className="bg_white">
            <div className="option">
              <div>
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
            </div>

            <ul id="placesList"></ul>
            <div id="pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KakaoKeywordMap;
