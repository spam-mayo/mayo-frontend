import Checkbox from '@/components/common/Checkbox';
import { stackOption } from '@/constants/stackOption';
import type { FC } from 'react';

interface Props {
  checked: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StackForm: FC<Props> = ({ checked, onChange }: Props) => {
  return (
    <div className="stack-container">
      <span className="content-title">기술스택</span>
      <div className="checked-stacks">{checked.length ? checked.join(', ') : '아래 목록 중 스택을 선택하세요'}</div>

      {Object.entries(stackOption).map(([key, values]) => (
        <ul className="checkbox-container" key={key}>
          <span className="stack-title">{key}</span>
          <div>
            {values.map((item) => (
              <Checkbox
                value={item.value}
                key={item.id}
                onChange={onChange}
                checked={checked.includes(item.value)}
                label={item.label}
              />
            ))}
          </div>
        </ul>
      ))}
    </div>
  );
};

export default StackForm;
