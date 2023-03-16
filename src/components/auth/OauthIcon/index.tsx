import type { FC } from 'react';
import './index.scss';

interface Props {
  src: string;
  alt: string;
  href: string;
}

const OauthIcon: FC<Props> = ({ src, alt, href }) => {
  const BASE = 'https://spammayo.shop/oauth2/authorization';
  return (
    <a href={`${BASE}/${href}`}>
      <img src={src} alt={alt} />
    </a>
  );
};

export default OauthIcon;
