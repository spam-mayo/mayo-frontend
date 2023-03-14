import type { FC } from 'react';
import './index.scss';

interface Props {
  src: string;
  alt: string;
  onClick?: () => void;
}

const OauthIcon: FC<Props> = ({ src, alt, onClick }) => {
  return (
    // <a href={`${BASE}/${href}`}>
    //   <img src={src} alt={alt} />
    // </a>
    <div>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
};

export default OauthIcon;
