import Input from '@/components/common/Input';
import KakaoKeywordMap from '@/components/common/KakaoKeywordMap';
import CalendarPeriod from '@/components/study/createForm/CalendarPeriod';
import Dropdown from '@/components/study/createForm/Dropdown';
import { peopleNumberOption } from '@/constants/studyCreateOption';
import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

const MainInfo: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="main-info">
      <div className="subtitle">
        <span>기본 정보</span>
      </div>
      <div className="inner">
        <div className="inner-left">
          <Input
            placeholder="스터디 그룹 명을 작성해주세요."
            label="스터디명"
            {...register('studyName')}
            error={errors.studyName?.message as string}
          />
          <Input
            placeholder="스터디 제목을 작성해주세요."
            label="스터디 제목"
            {...register('title')}
            error={errors.title?.message as string}
          />
          <div className="calendar-period">
            <span>스터디 기간</span>
            <CalendarPeriod />
          </div>
          <Dropdown
            title="모집 인원"
            {...register('personnel', { required: true })}
            options={peopleNumberOption}
            className="required"
          />
        </div>
        <div className="inner-right">
          <KakaoKeywordMap />
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
