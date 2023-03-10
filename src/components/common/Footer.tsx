import Button from '@/components/common/Button';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/sample/grid">
                <Button size="small" color="gray" text>
                  샘플그리드
                </Button>
              </Link>
              <Button size="small" color="gray" text>
                파트너
              </Button>
              <Button size="small" color="gray" text>
                멤버십
              </Button>
              <Button size="small" color="gray" text>
                인재채용
              </Button>
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
