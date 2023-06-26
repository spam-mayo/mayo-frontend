import type { FC } from 'react';
import { BASE_PROFILE_URL } from '@/constants/profileUrl';

interface Props {
  src?: string;
}

const UserProfileImg: FC<Props> = ({ src }) => {
  return <img src={src || BASE_PROFILE_URL} alt="profileImg" />;
};

export default UserProfileImg;
