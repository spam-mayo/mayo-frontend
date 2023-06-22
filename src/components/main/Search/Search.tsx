import Select, { type SelectOption } from '@/components/auth/Select';
interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const categoryOption: SelectOption[] = [
  { label: '분야', value: '' },
  { label: '프론트엔드', value: 'frontend' },
  { label: '백엔드', value: 'backend' },
  { label: '디자인', value: 'design' },
  { label: '기획', value: 'plan' },
  { label: '기타', value: 'other' },
];

// const placeOption: SelectOption[] = [
//   { label: '지역', value: 'nowhere', id: 1 },
//   { label: '온라인', value: 'Online', id: 2 },
//   { label: '서울', value: 'Seoul', id: 3 },
//   { label: '부산', value: 'Busan', id: 4 },
//   { label: '경기도', value: 'Keongkido', id: 5 },
//   { label: '경상도', value: 'Keonsangdo', id: 6 },
//   { label: '전라도', value: 'Jeonrado', id: 7 },
//   { label: '강원도', value: 'Kangwondo', id: 8 },
//   { label: '제주도', value: 'Jeju', id: 9 },
// ];

const arrayOption: SelectOption[] = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'likes' },
  { label: '마감임박순', value: 'deadline' },
  { label: '조회수순', value: 'views' },
];

const Search = ({ onChangeCategory, onChangeSort, onChange }: Props) => {
  return (
    <div className="search">
      <div className="search-input col-lg-8 col-md-8">
        <i className="icon-search" />
        <input placeholder="내가 찾는 스터디!" onChange={onChange} />
      </div>
      <div className="search-filter col-lg-4 col-md-4">
        <span>필터</span>
        <Select options={categoryOption} onChange={onChangeCategory} />
        {/* <Select options={placeOption} /> */}
      </div>
      <div className="search-array col-lg-6 col-md-6">
        정렬
        <Select options={arrayOption} onChange={onChangeSort} />
      </div>
      <div className="search-view col-lg-6 col-md-6">
        {/* <button>카드형</button>
        <button>목록형</button> */}
      </div>
    </div>
  );
};

export default Search;
