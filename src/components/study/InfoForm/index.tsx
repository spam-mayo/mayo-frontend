import type { FC } from 'react';
import Button from '@/components/common/Button';
import Radio from '@/components/common/Radio';
import Input from '@/components/common/Input';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import InputCalendar from '@/components/study/Calendar/InputCalendar';
import Dropdown from '@/components/study/Dropdown/Dropdown';
import KakaoMap from '@/components/common/Map';
import Stack from '@/components/study/Stack/Stack';

const jobOption = [
  { label: '선택 안 함', value: 'nofield', id: 1 },
  { label: '프론트엔드', value: 'frontend', id: 2 },
  { label: '백엔드', value: 'backend', id: 3 },
  { label: '디자인', value: 'design', id: 4 },
  { label: '기획', value: 'plan', id: 5 },
  { label: '기타', value: 'other', id: 6 },
];

const peopleNumberOption = [
  { label: '인원미정', value: '0', id: 1 },
  { label: '4명 이하', value: 'under4', id: 2 },
  { label: '5명 ~ 10명', value: '5to10', id: 3 },
  { label: '11명 이상', value: 'over11', id: 4 },
];

const InfoForm: FC = () => {
  return (
    <section className="section-form">
      <div className="title-area">
        <i className="icon-arrow-left"></i>
        <h1 className="text-style-46">스터디 생성하기</h1>
        <div></div>
      </div>
      <div className="main-info">
        <div className="subtitle">
          <span>기본 정보</span>
          <span className="required"> *</span>
        </div>
        <div className="inner">
          <div className="inner-left">
            <Input placeholder="스터디 그룹 명을 정하세요" type="text" label="스터디명" className="required" />
            <Input placeholder="구인 글의 제목을 정하세요" type="text" label="스터디 제목" className="required" />
            <div className="input-group">
              <InputCalendar />
            </div>
          </div>
          <div className="inner-right">
            <Dropdown title="모집인원" options={peopleNumberOption} className="required" />
            <Input placeholder="장소명, 주소를 검색해 주세요" type="text" label="모임장소" className="required" />
            <KakaoMap />
          </div>
        </div>
      </div>

      <div className="additional-info">
        <div className="subtitle">
          <span>추가 정보</span>
        </div>
        <div className="inner">
          <div className="inner-left">
            <Dropdown title="활동분야" options={jobOption} />
          </div>
          <div className="inner-right">
            <fieldset className="fieldset">
              <legend>모임주기</legend>
              <Radio name="period" value="month">
                매 월
              </Radio>
              <Radio name="period" value="week">
                매 주
              </Radio>
              <Radio name="period" value="workdays">
                매 평일
              </Radio>
              <Radio name="period" value="weekend">
                매 주말
              </Radio>
              <Radio name="period" value="dayily">
                매일
              </Radio>
              <Radio name="period" value="etc">
                기타
              </Radio>
            </fieldset>
          </div>
        </div>
        <Stack />
        <div className="button-area">
          <Button size="large" color="gray" outline>
            취소
          </Button>
          <Button size="large">생성하기</Button>
        </div>
      </div>
    </section>
  );
};

export default InfoForm;
