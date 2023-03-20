import type { Recruit } from '@/api/recruit/recruitTypes';
import StackData from '@/assets/stacks/stackData';

interface RecruitCardProps {
  recruit: Recruit;
}

const RecruitCard = ({ recruit }: RecruitCardProps) => {
  const { stack, title, owner, startDate, online } = recruit;

  return (
    <div className="recruit-card">
      <div className="recruit-card-stack">
        {stack.map(({ stackId, stackName }) => (
          <img key={stackId} src={StackData[stackName]} alt={stackName}></img>
        ))}
      </div>
      <h4 className="recruit-card-title">{title}</h4>
      <span className="recruit-card-user">{owner?.userName}</span>
      <div className="recruit-card-content">
        <dl className="recruit-card-date">
          <dt>시작일:</dt>
          <dd> {startDate}</dd>
        </dl>
        <span className="recruit-card-place">
          {online ? <span className="online">ONLINE</span> : <span className="offline">OFFLINE</span>}
        </span>
      </div>
    </div>
  );
};

export default RecruitCard;
