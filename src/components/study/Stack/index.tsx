import Checkbox from '@/components/common/Checkbox';
import { stackOption } from '@/constants/stackOption';
import type { ChangeEventHandler, FC } from 'react';

interface Props {
  checkedStackList?: string[];
  onChangeCheckList: ChangeEventHandler<HTMLInputElement>;
}

const StackForm: FC<Props> = ({ checkedStackList, onChangeCheckList }: Props) => {
  const checkedItems = (checkedStackList ?? []).join(', ');

  return (
    <div className="stack-container">
      <span className="content-title">기술스택</span>
      <div className="checked-stacks">{checkedItems.length ? checkedItems : '아래 목록 중 스택을 선택하세요'}</div>

      {Object.entries(stackOption).map(([key, values]) => (
        <ul className="checkbox-container" key={key}>
          <span className="stack-title">{key}</span>
          <div>
            {values.map((item) => (
              <Checkbox
                value={item.value}
                key={item.id}
                onChange={onChangeCheckList}
                checked={checkedItems.includes(item.value)}
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
