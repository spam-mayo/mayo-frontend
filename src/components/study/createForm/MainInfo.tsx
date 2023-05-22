import Input from '@/components/common/Input';
import KakaoKeywordMap from '@/components/common/KakaoKeywordMap';
import CalendarPeriod from '@/components/study/createForm/CalendarPeriod';
import Dropdown from '@/components/study/createForm/Dropdown';
import { peopleNumberOption } from '@/constants/studyCreateOption';
import type { FC } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
  register: UseFormRegister<FieldValues>;
}

const MainInfo: FC<Props> = ({ register }) => {
  return (
    <div className="main-info">
      <div className="subtitle">
        <span>기본 정보</span>
      </div>
      <div className="inner">
        <div className="inner-left">
          <Input
            placeholder="스터디 그룹 명을 정하세요"
            label="스터디명"
            className="required"
            {...register('studyName')}
          />
          <Input
            placeholder="구인 글의 제목을 정하세요"
            label="스터디 제목"
            className="required"
            {...register('title')}
          />
          <div>
            <span>모집 기간</span>
            <CalendarPeriod />
          </div>
          <Dropdown
            title="모집인원"
            {...register('personnel', { required: true })}
            options={peopleNumberOption}
            className="required"
          />
        </div>
        <div className="inner-right">
          <div>
            <span>모임 장소</span>
          </div>
          <KakaoKeywordMap />
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
