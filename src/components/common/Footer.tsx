import { type FC } from 'react';
import Button from './Button';
import './style/common.scss';

const Footer: FC = () => {
  return (
    <>
      <div className="block">
        <div className="wrapper">
          <div className="innerLeft">
            <div className="navigate">
              <Button size="small" color="gray" text>
                이용약관
              </Button>
              <Button size="small" color="gray" text>
                개인정보처리방침
              </Button>
              <Button size="small" color="gray" text>
                파트너
              </Button>
              <Button size="small" color="gray" text>
                멤버십
              </Button>
              <Button size="small" color="gray" text>
                인재채용
              </Button>
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
