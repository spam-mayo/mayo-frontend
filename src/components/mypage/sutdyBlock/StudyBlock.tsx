import StudyPeriod from '@/components/mypage/sutdyBlock/StudyPeriod';
import type { FC } from 'react';
import StudyIntro from '@/components/mypage/sutdyBlock/StudyIntro';
import type { Stack } from '@/api/auth/types';

interface Props {
  studyData: {
    endDate: string;
    startDate: string;
    title: string;
    stack: Stack[];
  };
}

const StudyBlock: FC<Props> = ({ studyData }: Props) => {
  const { endDate, startDate, title, stack } = studyData;
  return (
    <div className="studyBlock-container">
      <StudyIntro title={title} stacks={stack} />
      <StudyPeriod startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default StudyBlock;
