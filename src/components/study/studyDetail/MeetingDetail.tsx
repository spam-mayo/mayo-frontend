import Button from '@/components/common/Button';
import type { FC } from 'react';

const MeetingDetail: FC = () => {
  return (
    <div className="meeting-info">
      <p>
        모임 기간<span>2023.2.14 (화) 13:00 ~ 2023.5.30 (수) 17:00</span>
      </p>
      <p>
        모임 장소
        <span>
          서울 마포구 화동 마포대로 투썸플레이스 마포대로점 <Button size="small">지도보기</Button>
        </span>
      </p>
      <p>
        모집 인원<span>최소 4명 ~ 최대 24명</span>
      </p>
    </div>
  );
};

export default MeetingDetail;
