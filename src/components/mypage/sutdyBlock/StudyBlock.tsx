import StudyPeriod from '@/components/mypage/sutdyBlock/StudyPeriod';
import type { FC } from 'react';
import StudyIntro from '@/components/mypage/sutdyBlock/StudyIntro';
import type { Stack } from '@/api/auth/types';

interface Props {
  studyData: {
    studyId: number;
    endDate: string;
    startDate: string;
    title: string;
    stack: Stack[];
  };
  isDetail?: boolean;
  isRecruit?: boolean;
}

const StudyBlock: FC<Props> = ({
  studyData: { endDate, startDate, title, stack, studyId },
  isDetail,
  isRecruit,
}: Props) => {
  return (
    <div className="studyBlock-container">
      <StudyIntro title={title} stacks={stack} isDetail={isDetail} studyId={studyId} isRecruit={isRecruit} />
      <StudyPeriod startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default StudyBlock;
