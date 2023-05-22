import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import CalendarPeriod from '@/components/study/createForm/CalendarPeriod';
import Dropdown from '@/components/study/createForm/Dropdown';
import StackForm from '@/components/study/Stack';
import { fieldOption } from '@/constants/fieldOption';
import { peopleNumberOption, studyPeriodOption } from '@/constants/studyCreateOption';
import { type FC, useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

const StudyCreateForm: FC = () => {
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

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      studyName: '',
      startDate: '',
      endDate: '',
      personnel: 'ZERO',
      place: '',
      studyStacks: [],
      period: 'ETC',
      activity: ['NO_FIELD'],
    },
  });

  return (
    <form className="section-form">
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
              error="최소 2자 이상 죄대 20자 이하"
              {...register('studyName', { required: true, minLength: 2, maxLength: 20 })}
            />
            <Input
              placeholder="구인 글의 제목을 정하세요"
              label="스터디 제목"
              className="required"
              error="최소 2자 이상 죄대 10자 이하"
              {...register('title', { required: true, minLength: 2, maxLength: 10 })}
            />
            <CalendarPeriod />
          </div>
          <div className="inner-right">
            <Dropdown
              title="모집인원"
              {...register('personnel', { required: true })}
              options={peopleNumberOption}
              className="required"
            />
          </div>
        </div>
      </div>

      <div className="additional-info">
        <div className="subtitle">
          <span>추가 정보</span>
        </div>
        <div className="inner">
          <div className="inner-left">
            <Dropdown title="활동분야" {...register('activity')} options={fieldOption} />
            <div className="inner-right">
              <span>모임 주기</span>
              <div className="fieldset">
                {studyPeriodOption.map(({ label, value }) => (
                  <label key={value}>
                    <input
                      className="radio-input"
                      {...register('period')}
                      aria-invalid={errors['period'] ? 'true' : 'false'}
                      value={value}
                      type="radio"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <label>기술 스택</label>
          <input {...register('studyStacks')}></input>
          <StackForm onChange={onChangeCheckList} checked={checked} />
        </div>

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

export default StudyCreateForm;
