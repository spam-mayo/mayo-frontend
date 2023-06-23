import type { FC } from 'react';
import { BASE_PROFILE_URL } from '@/constants/profileUrl';

interface Props {
  src?: string;
}

const UserProfileImg: FC<Props> = ({ src }: Props) => {
  const imageSrc = src !== '' ? src : BASE_PROFILE_URL;

  return <img src={imageSrc} alt="profileImg" />;
};

export default UserProfileImg;
