import type { FC } from 'react';

interface Props {
  title: string;
  stacks: { stackId: number; stackName: string }[];
}

const StudyIntro: FC<Props> = ({ title, stacks = [] }: Props) => {
  return (
    <div className="title-container">
      <div className="title">{title}</div>
      <div className="stacks">
        {stacks.map(({ stackId, stackName }) => (
          <p key={stackId}>{stackName}</p>
        ))}
      </div>
    </div>
  );
};

export default StudyIntro;
