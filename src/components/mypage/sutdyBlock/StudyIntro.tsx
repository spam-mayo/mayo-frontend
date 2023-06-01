import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  stacks: { stackId: number; stackName: string }[];
  studyId: number;
  isDetail?: boolean;
  isRecruit?: boolean;
}

const StudyIntro: FC<Props> = ({ title, stacks, isDetail, studyId, isRecruit }: Props) => {
  const linkTo = isRecruit ? `/recruit/create/${studyId}` : `/study/${studyId}`;
  return (
    <div className="title-container">
      <div className="title">
        <Link to={isDetail || isRecruit ? linkTo : ''}>{title}</Link>
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
