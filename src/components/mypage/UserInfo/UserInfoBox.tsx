import type { FC } from 'react';
import './userInfoBox.scss';

const UserInfoBox: FC = () => {
  return (
    <div className="info-container">
      <div className="info-box">
        <div className="info-box-top">
          <p>기본 정보</p>
          <button>
            <i className="icon-pencil" />
            <span>수정</span>
          </button>
        </div>

        <div className="line">
          <div className="input">
            <p className="name">이름</p>
            <p>김현정</p>
          </div>
          <div className="input">
            <p className="name">이메일</p>
            <p>user@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="info-box">
        <div className="info-box-top">
          <p>추가 정보</p>
          <button>
            <i className="icon-pencil" />
            <span>수정</span>
          </button>
        </div>

        <div className="line">
          <div className="input">
            <p className="name">활동 분야</p>
            <p>프론트엔드</p>
          </div>
          <div className="input">
            <p className="name">관심 분야</p>
            <div>
              <p>Typescript</p>
              <p>React</p>
              <p>Javascirpt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoBox;
