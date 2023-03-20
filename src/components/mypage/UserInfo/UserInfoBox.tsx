import EditInput from '@/components/auth/Input/EditInput';
import Button from '@/components/common/Button';
import { type FC, useState } from 'react';
import './userInfoBox.scss';

interface Props {
  name: string;
  email: string;
}

const UserInfoBox: FC<Props> = ({ name, email }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onClickToEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="info-container">
      <div className="info-box">
        <div className="info-box-top">
          <p>기본 정보</p>
          {isEdit ? (
            <div className="button-container">
              <Button size="small" outline color="gray" onClick={onClickToEdit}>
                취소
              </Button>
              <Button size="small" outline color="blue">
                저장
              </Button>
            </div>
          ) : (
            <Button size="small" outline color="gray" onClick={onClickToEdit}>
              <i className="icon-pencil" />
              <span>수정</span>
            </Button>
          )}
        </div>

        <div className="line">
          <div className="input">
            <p className="name">이름</p>
            {isEdit ? <EditInput type="text" value={name} /> : <p>{name}</p>}
          </div>
          <div className="input">
            <p className="name">이메일</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
      <div className="info-box">
        <div className="info-box-top">
          <p>추가 정보</p>
          {isEdit ? (
            <div className="button-container">
              <Button size="small" outline color="gray" onClick={onClickToEdit}>
                취소
              </Button>
              <Button size="small" outline color="blue">
                저장
              </Button>
            </div>
          ) : (
            <Button size="small" outline color="gray" onClick={onClickToEdit}>
              <i className="icon-pencil" />
              <span>수정</span>
            </Button>
          )}
        </div>

        <div className="line">
          <div className="input">
            <p className="name">활동 분야</p>
            {isEdit ? <EditInput type="text" value={name} /> : <p>{name}</p>}
          </div>
          <div className="input">
            <p className="name">관심 분야</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoBox;
