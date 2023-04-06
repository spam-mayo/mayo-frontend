import StudyBlock from '@/components/mypage/sutdyBlock/StudyBlock';
import { useQuery } from '@tanstack/react-query';
import { type FC, useState, ChangeEvent } from 'react';
import './userStudy.scss';
import { getMypageStudy } from '@/api/study/studyAPI';
import Pagination from '@/components/common/Pagination';
import Select from '@/components/auth/Select';
import { mystudyOption } from '@/constants/mypageOption';

const UserStudy: FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [selectOption, setSelectOption] = useState('all');

  const { data, isLoading, isError } = useQuery({
    queryFn: () =>
      getMypageStudy(activePage, { status: selectOption !== 'all' ? selectOption : undefined, tab: 'crew' }),
    queryKey: ['mystudy', activePage, selectOption],
    select: ({ data }) => data,
    keepPreviousData: true,
  });

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(e.target.value);
  };

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  const maxPostPage = data?.pageInfo?.totalPages ?? 0;

  return (
    <div className="study-container">
      <div>
        <Select options={mystudyOption} onChange={onChangeSelect} value={selectOption} />
      </div>
      <div className="study-container-content">
        {data.data.length === 0 ? (
          <div className="no-data">아직 관련된 스터디가 없네요 ..</div>
        ) : (
          data.data.map(({ studyId, endDate, startDate, title, stack }) => {
            const studyData = { endDate, startDate, title, stack };
            return <StudyBlock key={studyId} studyData={studyData} />;
          })
        )}
      </div>
      <div>
        {data.data.length !== 0 && (
          <Pagination activePage={activePage} setActivePage={setActivePage} pages={maxPostPage} />
        )}
      </div>
    </div>
  );
};

export default UserStudy;
