import { type FC } from 'react';
import '@/assets/_common.scss';
import './common.scss';

const Header: FC = () => {
  return (
    <>
      <div className="block">
        <div className="wrapper">
          <div className="innerLeft">
            <div className="logo">LOGO</div>
            <div className="navigate">
              <button>스터디 찾기</button>
              <button>나의 스터디</button>
            </div>
          </div>
          <div className="innerRight">
            <button>로그인</button>
            <button>회원가입</button>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Header;
