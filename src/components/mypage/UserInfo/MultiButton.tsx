import Button from '@/components/common/Button';
import type { FC } from 'react';

interface Props {
  isEdit: boolean;
  onClick: () => void;
}

const MultiButton: FC<Props> = ({ isEdit, onClick }) => {
  return (
    <>
      {isEdit ? (
        <div>
          <Button size="small" outline color="gray" onClick={onClick}>
            취소
          </Button>
          <Button size="small" outline color="blue" type="submit">
            저장
          </Button>
        </div>
      ) : (
        <Button size="small" outline color="gray" onClick={onClick}>
          <i className="icon-pencil" />
          수정
        </Button>
      )}
    </>
  );
};

export default MultiButton;
