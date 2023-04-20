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
  isDetail?: boolean;
}

const StudyBlock: FC<Props> = ({ studyData: { endDate, startDate, title, stack, studyId }, isDetail }: Props) => {
  const navigate = useNavigate();

  const onClickMoveToStudyDetail = () => {
    // detail 값 없으면 구인글로 이동 (구인글 페이지 완성 후 수정 예정)
    navigate(isDetail ? `/study/${studyId}` : '/');
  };
  return (
    <div className="studyBlock-container">
      <StudyIntro title={title} stacks={stack} onClick={onClickMoveToStudyDetail} />
      <StudyPeriod startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default StudyBlock;
