import type { FC } from 'react';
import StackData from '@/assets/stacks/stackData';
import StudyOwner from '@/components/common/studyDetail/StudyOwner';
import MeetingDetail from '@/components/common/studyDetail/MeetingDetail';
import { useQuery } from '@tanstack/react-query';
import { getStudyDetail } from '@/api/study/studyApi';

const StudyIntro: FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getStudyDetail(223),
    queryKey: ['studyDetail'],
    select: ({ data }) => data,
  });

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  return (
    <div className="studyIntro-container">
      <div className="studyIntro-top">
        <div className="studyIntro-top-title">
          {data.title}
          <i className="icon-share2"></i>
        </div>
        <div className="studyIntro-top-stack">
          {data.stack.map(({ stackId, stackName }) => (
            <img key={stackId} src={StackData[stackName]} alt={stackName}></img>
          ))}
        </div>
      </div>
      <div className="studyIntro-bottom">
        <MeetingDetail
          place={data.place}
          personnel={data.personnel}
          startDate={data.startDate}
          endDate={data.endDate}
        />
        <StudyOwner
          profileUrl={data.owner.userProfileUrl}
          name={data.owner.userName}
          email={data.owner.email}
          field={data.owner.field}
        />
      </div>
    </div>
  );
};

export default StudyIntro;
