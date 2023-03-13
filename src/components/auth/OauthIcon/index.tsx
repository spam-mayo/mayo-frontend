import type { FC } from 'react';
import './index.scss';
//import { postKakao } from '@/api/auth/authAPI';

interface Props {
  src: string;
  alt: string;
  onClick: () => void;
}

const OauthIcon: FC<Props> = ({ src, alt, onClick }) => {
  //   const onClick = () => {
  //     // postKakao();
  //     console.log('clicked');
  //   };
  return (
    // <a href={href}>
    //   <img src={src} alt={alt} />
    // </a>
    <div>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
};

export default OauthIcon;
