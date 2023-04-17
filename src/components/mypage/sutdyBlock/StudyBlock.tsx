import StudyPeriod from '@/components/mypage/sutdyBlock/StudyPeriod';
import type { FC } from 'react';
import StudyIntro from '@/components/mypage/sutdyBlock/StudyIntro';
import type { Stack } from '@/api/auth/types';
import { useNavigate } from 'react-router-dom';

interface Props {
  studyData: {
    studyId: number;
    endDate: string;
    startDate: string;
    title: string;
    stack: Stack[];
  };
}

const StudyBlock: FC<Props> = ({ studyData }: Props) => {
  const { endDate, startDate, title, stack, studyId } = studyData;

  const navigate = useNavigate();

  const onClickMoveToStudyDetail = () => {
    navigate(`/study/${studyId}`);
  };
  return (
    <div className="studyBlock-container">
      <StudyIntro title={title} stacks={stack} onClick={onClickMoveToStudyDetail} />
      <StudyPeriod startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default StudyBlock;
