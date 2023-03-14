import type { FC } from 'react';
import Button from '@/components/common/Button';
import Radio from '@/components/common/Radio';
import Input from '@/components/common/Input';
import InputCalendar from '@/components/study/Calendar/InputCalendar';

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
          <span className="required">*</span>
        </div>
        <div className="inner">
          <div className="inner-left">
            <Input placeholder="스터디 그룹 명을 정하세요" type="text" label="스터디명" />
            <Input placeholder="구인 글의 제목을 정하세요" type="text" label="스터디 제목" />
            <div className="input-group">
              <InputCalendar />
            </div>
            <Input placeholder="인원 미정" type="text" label="모집인원" />
          </div>
          <div className="inner-right">
            <Input placeholder="장소명, 주소를 검색해 주세요" type="text" label="모임장소" />
            <img></img>
          </div>
        </div>
      </div>

      <div className="additional-info">
        <div className="subtitle">
          <span>추가 정보</span>
        </div>
        <div className="inner">
          <div className="inner-left">
            <Input placeholder="선택하세요" type="text" label="활동분야" />
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
              <Radio name="period" value="etc" defaultChecked>
                기타
              </Radio>
            </fieldset>
          </div>
        </div>
        <div className="inner">기술스택</div>
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
