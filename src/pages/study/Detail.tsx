import { getStudyDetail } from '@/api/study/studyApI';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import AdminMode from '@/components/study/adminMode/AdminMode';
import StudySchedule from '@/components/study/studySchedule/StudySchedule';
import { useQuery } from '@tanstack/react-query';
import { type FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.scss';

const tabs = [
  { name: '스터디 일정', content: <StudySchedule /> },
  { name: '관리자 모드', content: <AdminMode /> },
];

const StudyDetail: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { studyId } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getStudyDetail(Number(studyId)),
    queryKey: ['studyDetail', studyId],
    select: ({ data }) => data,
  });

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  const onClickCurrentTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className="container">
      <div className="row">
        <StudyDetailIntro detailData={data} />
        <div className="col-lg-12">
          <ul className="detail-tab-container">
            {tabs.map((tab, index) => (
              <li key={index} onClick={() => onClickCurrentTab(index)}>
                {tab.name}
              </li>
            ))}
          </ul>
          <div>{tabs[currentTab].content}</div>
        </div>
      </div>
    </div>
  );
};

export default StudyDetail;
