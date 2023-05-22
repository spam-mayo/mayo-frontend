import Checkbox from '@/components/common/Checkbox';
import { stackOption } from '@/constants/stackOption';
import type { FC } from 'react';

interface Props {
  checked?: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StackForm: FC<Props> = ({ checked, onChange }: Props) => {
  const checkedItems = checked?.length ? checked.join(', ') : '';

  return (
    <div className="stack-container">
      <span className="content-title">기술스택</span>
      <div className="checked-stacks">
        {checkedItems.length === 0 ? '아래 목록 중 스택을 선택하세요' : `${checkedItems}`}
      </div>

      <ul className="checkbox-container">
        <span className="stack-title">프론트엔드</span>
        <div>
          {stackOption.프론트엔드.map((item) => (
            <Checkbox label={item.value} key={item.id} onChange={onChange}>
              {item.label}
            </Checkbox>
          ))}
        </div>
      </ul>

      <ul className="checkbox-container">
        <span className="stack-title">백엔드</span>
        <div>
          {stackOption.백엔드.map((item) => (
            <Checkbox label={item.value} key={item.id} onChange={onChange}>
              {item.label}
            </Checkbox>
          ))}
        </div>
      </ul>

      <ul className="checkbox-container">
        <span className="stack-title">디자인</span>
        <div>
          {stackOption.디자인.map((item) => (
            <Checkbox label={item.value} key={item.id} onChange={onChange}>
              <span>{item.label}</span>
            </Checkbox>
          ))}
        </div>
      </ul>

      <ul className="checkbox-container">
        <span className="stack-title">기타</span>
        <div>
          {stackOption.기타.map((item) => (
            <Checkbox label={item.value} key={item.id} onChange={onChange}>
              {item.label}
            </Checkbox>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default StackForm;
