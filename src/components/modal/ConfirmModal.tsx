import Button from '@/components/common/Button';
import type { FC } from 'react';

interface Props {
  title: string;
  onClickCancel: () => void;
  onClickCheck: () => void;
}

const ConfirmModal: FC<Props> = ({ title, onClickCancel, onClickCheck }: Props) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <p>{title}</p>
        <div>
          <Button color="gray" outline onClick={onClickCancel}>
            취소
          </Button>
          <Button onClick={onClickCheck}>확인</Button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmModal;
