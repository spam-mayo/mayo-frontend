import Button from '@/components/common/Button';
import type { FC } from 'react';

interface Props {
  place: string;
  personnel: string;
  startDate: string;
  endDate: string;
}

const MeetingDetail: FC<Props> = ({ place, personnel, startDate, endDate }: Props) => {
  return (
    <div className="meeting-info">
      <p>
        모임 기간
        <span>
          {startDate} ~ {endDate}
        </span>
      </p>
      <p>
        모임 장소
        <span>
          {place} <Button size="small">지도보기</Button>
        </span>
      </p>
      <p>
        모집 인원<span>{personnel}</span>
      </p>
    </div>
  );
};

export default MeetingDetail;
