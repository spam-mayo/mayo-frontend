import Button from '@/components/common/Button';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="innerLeft">
            <nav>
              <Button size="small" color="gray" text>
                관리자 문의
              </Button>
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
