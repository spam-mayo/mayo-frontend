import StudyPeriod from '@/components/mypage/sutdyBlock/StudyPeriod';
import type { FC } from 'react';
import StudyIntro, { UserStudyRoute } from '@/components/mypage/sutdyBlock/StudyIntro';
import type { Stack } from '@/api/auth/types';

interface Props {
  studyData: {
    studyId: number;
    endDate: string;
    startDate: string;
    title: string;
    stack: Stack[];
  };
  studyRoute?: UserStudyRoute;
}

const StudyBlock: FC<Props> = ({ studyData: { endDate, startDate, title, stack, studyId }, studyRoute }: Props) => {
  return (
    <div className="studyBlock-container">
      <StudyIntro title={title} stacks={stack} studyRoute={studyRoute} studyId={studyId} />
      <StudyPeriod startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default StudyBlock;
