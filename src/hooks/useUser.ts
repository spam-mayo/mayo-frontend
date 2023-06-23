import { userState } from '@/atom/atom';
import { useRecoilValue } from 'recoil';

const useUser = () => {
  const user = useRecoilValue(userState);

  return { userProfile: user.profileUrl, userId: user?.userId };
};

export default useUser;
