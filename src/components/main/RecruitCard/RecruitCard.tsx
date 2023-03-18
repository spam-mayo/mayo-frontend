import kakao from '@/assets/images/kakao1.png';
import type { Recruit } from '@/api/recruitTypes';

interface RecruitCardProps {
  data: Recruit;
}

const RecruitCard = ({ data }: RecruitCardProps) => {
  return (
    <div className="recruit-card">
      <div className="recruit-card-stack">
        <img src={kakao} alt="sample"></img>
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
