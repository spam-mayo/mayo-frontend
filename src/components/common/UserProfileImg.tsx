import type { FC } from 'react';

interface Props {
  src?: string;
}

const BASE_PROFILE_URL = 'https://spam-image.s3.ap-northeast-2.amazonaws.com/basic.png';

const UserProfileImg: FC<Props> = ({ src }: Props) => {
  return <img src={src ?? BASE_PROFILE_URL} alt="profile" />;
};

export default UserProfileImg;
