import Dropdown from '@/components/study/createForm/Dropdown';
import { fieldOption } from '@/constants/fieldOption';
import { studyPeriodOption } from '@/constants/studyCreateOption';
import Button from '@/components/common/Button';
import type { ChangeEventHandler, FC } from 'react';
import { useFormContext } from 'react-hook-form';
import StackForm from '@/components/study/Stack';

interface Props {
  onChangeCheckList: ChangeEventHandler<HTMLInputElement>;
  checkedStackList: string[];
}

const AdditionalInfo: FC<Props> = ({ onChangeCheckList, checkedStackList }) => {
  const { register } = useFormContext();

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
                  <input className="radio-input" {...register('period')} value={value} type="radio" />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="additional-bottom">
          <StackForm
            onChangeCheckList={onChangeCheckList}
            checkedStackList={checkedStackList}
            {...register('stacks')}
          />
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
