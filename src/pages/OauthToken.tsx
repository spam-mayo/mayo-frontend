import useOAuth from '@/hooks/useOAuth';
import type { FC } from 'react';

const OauthToken: FC = () => {
  useOAuth();
  return <div>로딩중...</div>;
};

export default OauthToken;
