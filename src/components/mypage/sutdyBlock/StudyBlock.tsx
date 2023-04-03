import Date from '@/components/mypage/sutdyBlock/Date';
import type { FC } from 'react';
import Title from '@/components/mypage/sutdyBlock/Title';

interface Props {
  title: string;
  stack: { stackId: number; stackName: string }[];
  startDate: string;
  endDate: string;
}

const StudyBlock: FC<Props> = ({ title, stack = [], startDate, endDate }: Props) => {
  return (
    <div className="studyBlock-container">
      <Title title={title} stacks={stack} />
      <Date startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default StudyBlock;
