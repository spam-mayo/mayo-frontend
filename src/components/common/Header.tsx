import Button from '@/components/common/Button';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <>
      <div className="block">
        <div className="wrapper">
          <div className="innerLeft">
            <div>
              <img src="/spam.svg" alt="logo" className="logo" />
            </div>
            <div className="navigate">
              <Link to="/">
                <Button color="blue" text>
                  스터디 찾기
                </Button>
              </Link>
              <Button color="blue" text>
                나의 스터디
              </Button>
            </div>
          </div>
          <div className="innerRight">
            <Link to="/auth/login">
              <Button color="gray" text>
                로그인
              </Button>
            </Link>
            <Link to="/auth/register">
              <Button color="gray" text>
                회원가입
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Header;
