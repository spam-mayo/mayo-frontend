import type { FC } from 'react';
import StackData from '@/assets/stacks/stackData';
import StudyOwner from '@/components/study/studyDetail/StudyOwner';
import MeetingDetail from '@/components/study/studyDetail/MeetingDetail';

const stack = [
  {
    stackId: 1,
    stackName: 'javascript',
  },
  {
    stackId: 2,
    stackName: 'typescript',
  },
  {
    stackId: 3,
    stackName: 'react',
  },
];
const StudyIntro: FC = () => {
  return (
    <div className="studyIntro-container">
      <div className="studyIntro-top">
        <div className="studyIntro-top-title">
          바닐라 JS의 중요성! 기초 다지기 <i className="icon-share2"></i>
        </div>
        <div className="studyIntro-top-stack">
          {stack.map(({ stackId, stackName }) => (
            <img key={stackId} src={StackData[stackName]} alt={stackName}></img>
          ))}
        </div>
      </div>
      <div className="studyIntro-bottom">
        <MeetingDetail />
        <StudyOwner />
      </div>
    </div>
  );
};

export default StudyIntro;
