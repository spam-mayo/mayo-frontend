import type { FC } from 'react';
import Button from './Button';
import './style/common.scss';

const Header: FC = () => {
  return (
    <>
      <div className="block">
        <div className="wrapper">
          <div className="innerLeft">
            <div>
              <img src="/public/spam.svg" alt="logo" className="logo" />
            </div>
            <div className="navigate">
              <Button color="blue" text>
                스터디 찾기
              </Button>
              <Button color="blue" text>
                나의 스터디
              </Button>
            </div>
          </div>
          <div className="innerRight">
            <Button color="gray" text>
              로그인
            </Button>
            <Button color="gray" text>
              회원가입
            </Button>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Header;
