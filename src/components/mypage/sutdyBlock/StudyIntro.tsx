import type { FC } from 'react';

interface Props {
  title: string;
  stacks: { stackId: number; stackName: string }[];
  onClick: () => void;
}

const StudyIntro: FC<Props> = ({ title, stacks, onClick }: Props) => {
  return (
    <div className="title-container">
      <div className="title" onClick={onClick}>
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
