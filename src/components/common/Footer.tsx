import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './style/common.scss';

const Footer: FC = () => {
  return (
    <>
      <div className="block">
        <div className="wrapper">
          <div className="innerLeft">
            <div className="navigate">
              <Link to="/sample/button">
                <Button size="small" color="gray" text>
                  샘플버튼
                </Button>
              </Link>
              <Link to="/study/create">
                <Button size="small" color="gray" text>
                  스터디 생성
                </Button>
              </Link>
              <Link to="/study/edit">
                <Button size="small" color="gray" text>
                  스터디 수정
                </Button>
              </Link>
              <Link to="/recruit/create">
                <Button size="small" color="gray" text>
                  구인 글 생성
                </Button>
              </Link>
              <Link to="/recruit/edit">
                <Button size="small" color="gray" text>
                  구인 글 수정
                </Button>
              </Link>
            </div>
          </div>
          <div className="innerRight">
            <p>Copyright 2023. SPAM All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Footer;
