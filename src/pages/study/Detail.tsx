import { getStudyDetail } from '@/api/study/studyAPI';
import type { StudyOwner } from '@/api/study/studyTypes';
import KakaoMap from '@/components/common/KakaoMap';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import AdminMode from '@/components/study/adminMode/AdminMode';
import StudySchedule from '@/components/study/studySchedule/StudySchedule';
import { useQuery } from '@tanstack/react-query';
import { type FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.scss';

const StudyDetail: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const { studyId } = useParams();
  const userId = localStorage.getItem('userId');
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getStudyDetail(Number(studyId)),
    queryKey: ['studyDetail', studyId],
    select: ({ data }) => data,
  });

  const tabs = [
    { name: '스터디 일정', content: <StudySchedule /> },
    Number(userId) === data?.owner.userId
      ? {
          name: '관리자 모드',
          content: <AdminMode ownerData={data?.owner as StudyOwner} />,
        }
      : null,
  ].filter(Boolean);

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  const onClickCurrentTab = (index: number) => {
    setCurrentTab(index);
  };

  const onClickMapModal = () => {
    setIsMapOpen((prev) => !prev);
  };

  return (
    <>
      {isMapOpen && (
        <KakaoMap latitude={data?.latitude ?? 0} longitude={data?.longitude ?? 0} onClick={onClickMapModal} />
      )}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <StudyDetailIntro detailData={data} onClick={onClickMapModal} />
            <ul className="detail-tab-container">
              {tabs.map((tab, index) => (
                <li key={index} onClick={() => onClickCurrentTab(index)}>
                  {tab?.name}
                </li>
              ))}
            </ul>
            <div>{tabs[currentTab]?.content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyDetail;
