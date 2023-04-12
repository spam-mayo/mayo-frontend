import { getMypageStudy } from '@/api/study/studyAPI';
import Select from '@/components/auth/Select';
import Pagination from '@/components/common/Pagination';
import StudyBlock from '@/components/mypage/sutdyBlock/StudyBlock';
import { useQuery } from '@tanstack/react-query';
import { type FC, useState, ChangeEvent, useMemo } from 'react';

const option = [
  { label: '전체', value: 'all' },
  { label: '대기중', value: '대기중' },
  { label: '승인', value: '승인' },
  { label: '거절', value: '거절' },
];

const UserApplyStudy: FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [selectOption, setSelectOption] = useState('all');

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getMypageStudy(activePage, { status: undefined, tab: 'apply' }),
    queryKey: ['applyStudy', activePage],
    select: ({ data }) => data,
    keepPreviousData: true,
  });

  const filteredData = useMemo(() => {
    const list = data?.data ?? [];
    if (selectOption === 'all') return list;
    return list.filter(({ approvalStatus }) => approvalStatus === selectOption);
  }, [data, selectOption]);

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(e.target.value);
  };

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  const maxPostPage = data?.pageInfo?.totalPages ?? 0;

  return (
    <div className="study-container">
      <div>
        <Select options={option} onChange={onChangeSelect} value={selectOption} />
      </div>
      <div className="study-container-content">
        {!filteredData.length ? (
          <div className="no-data">아직 관련된 스터디가 없네요 ..</div>
        ) : (
          <>
            {filteredData?.map(({ studyId, endDate, startDate, title, stack }) => {
              const studyData = { endDate, startDate, title, stack };
              return <StudyBlock key={studyId} studyData={studyData} />;
            })}
          </>
        )}
      </div>
      <div>
        {data.data.length && <Pagination activePage={activePage} setActivePage={setActivePage} pages={maxPostPage} />}
      </div>
    </div>
  );
};

export default UserApplyStudy;
