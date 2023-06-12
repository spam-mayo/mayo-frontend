import Button from '@/components/common/Button';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="innerLeft">
            <nav>
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
              <Link to="/recruit/edit">
                <Button size="small" color="gray" text>
                  구인 글 수정
                </Button>
              </Link>
            </nav>
          </div>
          <div className="innerRight">
            <p>Copyright 2023. SPAM All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
