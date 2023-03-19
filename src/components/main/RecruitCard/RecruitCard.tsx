import type { Recruit } from '@/api/recruitTypes';
import StackData from '@/assets/stacks/stackData';

interface RecruitCardProps {
  data: Recruit;
}

const RecruitCard = ({ data }: RecruitCardProps) => {
  return (
    <div className="recruit-card">
      <div className="recruit-card-stack">
        {data?.stack.map((data) => (
          <img key={data.stackId} src={StackData[data.stackName]} alt={data.stackName}></img>
        ))}
      </div>
      <h4 className="recruit-card-title">{data.title}</h4>
      <span className="recruit-card-user">{data.owner.userName}</span>
      <div className="recruit-card-content">
        <dl className="recruit-card-date">
          <dt>시작일:</dt>
          <dd> {data.startDate}</dd>
        </dl>
        <span className="recruit-card-place">
          {data.online ? <span className="online">ONLINE</span> : <span className="offline">OFFLINE</span>}
        </span>
      </div>
    </div>
  );
};

export default RecruitCard;
