import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Dropdown from '@/components/study/Dropdown/Dropdown';
// import KakaoMap from '@/components/common/Map';
import { postStudy } from '@/api/study/studyAPI';

import type { PostStudyPayload } from '@/api/mockTypes';
import StackForm from '@/components/study/Stack/StackForm';

const jobOption = [
  { label: '선택 안 함', value: 'NOFIELD', id: 1 },
  { label: '프론트엔드', value: 'FRONTEND', id: 2 },
  { label: '백엔드', value: 'BACKEND', id: 3 },
  { label: '디자인', value: 'DESIGN', id: 4 },
  { label: '기획', value: 'PLAN', id: 5 },
  { label: '기타', value: 'OTHER', id: 6 },
];

const peopleNumberOption = [
  { label: '인원미정', value: 'ZERO', id: 1 },
  { label: '4명 이하', value: 'UNDERFOUR', id: 2 },
  { label: '5명 ~ 10명', value: 'FIVETOTEN', id: 3 },
  { label: '11명 이상', value: 'OVERELEVEN', id: 4 },
];

const InfoForm: FC = () => {
  const [checked, setChecked] = useState<string[]>([]);

  const onChangeCheckList = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const navigate = useNavigate();

  const onClickGoBack = () => {
    navigate(-1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      studyName: '',
      startDate: '',
      endDate: '',
      personnel: '',
      place: '',
      studyStacks: [],
      period: 'ETC',
      activity: ['NOFIELD'],
    },
  });
  const { mutate: PostStudyData } = useMutation(postStudy, {
    onSuccess: () => {
      alert('스터디 생성 성공');
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload = data as PostStudyPayload;
    PostStudyData(payload);
  };

  return (
    <form className="section-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="title-area">
        <button onClick={onClickGoBack}>
          <i className="icon-arrow-left"></i>
        </button>
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
            <Input
              placeholder="스터디 그룹 명을 정하세요"
              label="스터디명"
              className="required"
              {...register('studyName', { required: true, minLength: 2, maxLength: 20 })}
            />
            {errors.studyName && <p>최소 2자 이상 최대 20자 이하</p>}
            <Input
              placeholder="구인 글의 제목을 정하세요"
              label="스터디 제목"
              className="required"
              {...register('title', { required: true, minLength: 2, maxLength: 10 })}
            />
            {errors.title && <p>최소 2자 이상 최대 10자 이하</p>}
            <div className="input-group">
              <label>
                Start Date:
                <input type="date" {...register('startDate', { required: true })} />
                {errors.startDate && <p>시작 날짜를 선택하세요</p>}
              </label>
              <label>
                End Date:
                <input type="date" {...register('endDate', { required: true })} />
                {errors.endDate && <p>종료 날짜를 선택하세요</p>}
              </label>
            </div>
          </div>
          <div className="inner-right">
            <Dropdown
              title="모집인원"
              {...register('personnel', { required: true })}
              options={peopleNumberOption}
              className="required"
            />
            {errors.personnel && <p>모임 인원을 선택하세요</p>}
            <Input
              placeholder="장소명, 주소를 검색해 주세요"
              label="모임장소"
              {...register('place', { required: true })}
              className="required"
            />
            {errors.place && <p>모임 장소를 선택하세요</p>}
            {/* <KakaoMap /> */}
          </div>
        </div>
      </div>

      <div className="additional-info">
        <div className="subtitle">
          <span>추가 정보</span>
        </div>
        <div className="inner">
          <div className="inner-left">
            <Dropdown title="활동분야" {...register('activity')} options={jobOption} />
          </div>
          <div className="inner-right">
            <span>모임주기</span>
            <div className="fieldset">
              {[
                { label: '매 월', value: 'MONTH' },
                { label: '매 주', value: 'WEEK' },
                { label: '매 평일', value: 'WORKDAYS' },
                { label: '매 주말', value: 'WEEKEND' },
                { label: '매일', value: 'DAILY' },
                { label: '기타', value: 'ETC' },
              ].map(({ label, value }, index) => {
                return (
                  <label key={value + index}>
                    <input
                      className="radio-input"
                      {...register('period')}
                      aria-invalid={errors['period'] ? 'true' : 'false'}
                      value={value}
                      type="radio"
                    />
                    <span>{label}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        <label>input</label>
        <input {...register('studyStacks')}></input>

        <StackForm onChange={onChangeCheckList} checked={checked} />

        <div className="button-area">
          <Button size="large" color="gray" outline>
            취소
          </Button>
          <Button size="large" type="submit">
            생성하기
          </Button>
        </div>
      </div>
    </form>
  );
};

export default InfoForm;
