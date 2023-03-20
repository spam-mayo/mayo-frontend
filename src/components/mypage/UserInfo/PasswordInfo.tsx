import EditButton from '@/components/mypage/UserInfo/EditButton';
import { type FC, useState } from 'react';
import './passwordInfo.scss';
import EditInput from '@/components/auth/Input/EditInput';

const PasswordInfo: FC = () => {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="password-container">
      <div className="password-container-top">
        <p>비밀번호</p>
        <EditButton onClick={onClickEdit} isEdit={isEdit} />
      </div>
      {isEdit ? (
        <div className="password-container-content">
          <EditInput label="비밀번호" type="password" placeholder="새로운 비밀번호를 입력하세요." />
          <EditInput label="비밀번호 확인" type="password" placeholder="비밀번호를 확인해주세요." />
        </div>
      ) : null}
    </div>
  );
};

export default PasswordInfo;
