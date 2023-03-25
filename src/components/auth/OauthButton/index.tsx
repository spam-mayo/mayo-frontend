import type { FC } from 'react';
import './index.scss';

interface Props {
  src: string;
  alt: string;
  href: string;
}

const OauthButton: FC<Props> = ({ src, alt, href }) => {
  const BASE = 'https://spammayo.shop/oauth2/authorization';
  return (
    <a href={`${BASE}/${href}`} className="auth-button">
      <img src={src} alt={alt} />
    </a>
  );
};

export default OauthButton;
