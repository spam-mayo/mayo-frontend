import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  stacks: { stackId: number; stackName: string }[];
  studyId: number;
  isDetail?: boolean;
}

const StudyIntro: FC<Props> = ({ title, stacks, isDetail, studyId }: Props) => {
  const navigate = useNavigate();

  const onClickMoveToStudyDetail = () => {
    navigate(isDetail ? `/study/${studyId}` : '/');
  };

  return (
    <div className="title-container">
      <div className="title" onClick={onClickMoveToStudyDetail}>
        {title}
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
