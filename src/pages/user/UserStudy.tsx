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
  const [selectOption, setSelectOption] = useState('');
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getMypageStudy({ page: activePage, studyStatus: selectOption, tab: 'crew' }),
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
      <Select options={mystudyOption} onChange={onChangeSelect} />
      {data.data.map(({ studyId, endDate, startDate, title, stack }) => (
        <StudyBlock key={studyId} endDate={endDate} startDate={startDate} stack={stack} title={title} />
      ))}
      <Pagination activePage={activePage} setActivePage={setActivePage} pages={maxPostPage} />
    </div>
  );
};

export default UserStudy;
