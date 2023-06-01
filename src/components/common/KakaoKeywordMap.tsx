import Input from '@/components/common/Input';
import keywordMap from '@/utils/keywordMap';
import { type FC, useEffect, useState, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

const KakaoKeywordMap: FC = () => {
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [place, setPlace] = useState('');
  const [checkPlace, setCheckPlace] = useState(false);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const onChangeSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, []);

  const onClickToggleListBox = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickMarker = useCallback((lat: number, lng: number, place: string) => {
    setPlace(place);
    setValue('latitude', lat);
    setValue('longitude', lng);
    setValue('online', false);
    setValue('place', place);
  }, []);

  const handleOnlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setValue('online', true);
    if (checked) {
      setValue('place', '장소 없음');
      setValue('latitude', 0);
      setValue('longitude', 0);
      setPlace('장소 없음');
      setKeyword('');
    }
    setCheckPlace(checked);
  };

  useEffect(() => {
    keywordMap({ onClick: onClickMarker });
  }, [onClickMarker]);

  return (
    <div className="keywordmap-container">
      <div id="form">
        <Input
          label="모임장소"
          placeholder="장소를 검색하세요"
          value={keyword}
          id="keyword"
          onChange={onChangeSearch}
          disabled={checkPlace}
        />
        <button id="submit_btn" type="submit">
          검색
        </button>
        <label>
          <input type="checkbox" {...register('online')} onChange={handleOnlineChange} checked={checkPlace} />
          장소없음
        </label>
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
        <p {...register('place')}>선택 장소 : {place}</p>
      </div>
      {errors.place && <p className="place-error">{errors.place.message?.toString()}</p>}
    </div>
  );
};

export default KakaoKeywordMap;
