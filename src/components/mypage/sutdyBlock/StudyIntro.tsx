import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  stacks: { stackId: number; stackName: string }[];
  studyId: number;
  isDetail?: boolean;
}

const StudyIntro: FC<Props> = ({ title, stacks, isDetail, studyId }: Props) => {
  return (
    <div className="title-container">
      <div className="title">
        <Link to={isDetail ? `/study/${studyId}` : '/'}>{title}</Link>
      </div>
      <div className="stacks">
        {stacks.map(({ stackId, stackName }) => (
          <p key={stackId}>{stackName}</p>
        ))}
      </div>
    </div>
  );
};

export default StudyIntro;
