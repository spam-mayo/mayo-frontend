import Button from '@/components/common/Button';
import kakao from '@/assets/images/kakao1.png';
import type { Recruit } from '@/api/recruitTypes';

interface RecruitCardProps {
  data: Recruit;
}

const RecruitCard = ({ data }: RecruitCardProps) => {
  return (
    <div>
      <div>
        <img src={kakao} alt="sample"></img>
      </div>
      <h3>{data.title}</h3>
      <span>{data.owner.userName}</span>
      <dl>
        <dt>시작일:</dt>
        <dd> {data.startDate}</dd>
      </dl>
      <Button size="small">{data.online ? 'online' : 'offline'}</Button>
    </div>
  );
};

export default RecruitCard;
