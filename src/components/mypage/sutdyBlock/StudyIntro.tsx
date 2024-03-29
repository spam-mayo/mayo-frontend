import myPageLinkTo from '@/utils/myPageLinkTo';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

export type UserStudyRoute = 'detail' | 'recruit' | 'createRecruit';
interface Props {
  title: string;
  stacks: { stackId: number; stackName: string }[];
  studyId: number;
  studyRoute?: UserStudyRoute;
}

const StudyIntro: FC<Props> = ({ title, stacks, studyId, studyRoute }: Props) => {
  const linkTo = myPageLinkTo(studyRoute, studyId);

  return (
    <div className="title-container">
      <div className="title">
        <Link to={linkTo}>{title}</Link>
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
