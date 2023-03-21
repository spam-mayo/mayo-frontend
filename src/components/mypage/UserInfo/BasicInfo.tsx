import EditInput from '@/components/auth/Input/EditInput';
import EditButton from '@/components/mypage/UserInfo/EditButton';
import { type FC, useState } from 'react';
import './info.scss';

interface Props {
  name: string;
  email: string;
}

const BasicInfo: FC<Props> = ({ name, email }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="basic-container">
      <div className="basic-container-top">
        <p>기본 정보</p>
        <EditButton onClick={onClickEdit} isEdit={isEdit} />
      </div>
      <div className="basic-container-content">
        {isEdit ? (
          <EditInput label="이름" />
        ) : (
          <div className="row">
            <p className="key">이름</p>
            <p className="value">{name}</p>
          </div>
        )}
        <div className="row">
          <p className="key">이메일</p>
          <p className="value">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
