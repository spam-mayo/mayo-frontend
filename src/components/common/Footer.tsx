import { type FC } from 'react';
import '@/assets/_common.scss';
import './common.scss';

const Footer: FC = () => {
  return (
    <>
      <div className="block">
        <div className="wrapper">
          <div className="innerLeft">
            <div className="navigate">
              <button>이용약관</button>
              <button>개인정보처리방침</button>
              <button>파트너</button>
              <button>멤버십</button>
              <button>인재채용</button>
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
