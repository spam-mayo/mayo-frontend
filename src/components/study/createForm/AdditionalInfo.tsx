import Dropdown from '@/components/study/createForm/Dropdown';
import { fieldOption } from '@/constants/fieldOption';
import { studyPeriodOption } from '@/constants/studyCreateOption';
import Button from '@/components/common/Button';
import type { ChangeEventHandler, FC } from 'react';
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import StackForm from '@/components/study/Stack';

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  checkedStackList: string[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const AdditionalInfo: FC<Props> = ({ onChange, checkedStackList, register, errors }) => {
  return (
    <div className="additional-info">
      <div className="subtitle">
        <span>추가 정보</span>
      </div>
      <div className="inner additional">
        <div className="additional-top">
          <div className="inner-left">
            <Dropdown title="활동분야" {...register('activity')} options={fieldOption} />
          </div>
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

        <div className="additional-bottom">
          <StackForm onChange={onChange} checked={checkedStackList} />
        </div>
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
  );
};

export default AdditionalInfo;
