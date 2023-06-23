import { getUserById } from '@/api/auth/authAPI';
import { userState } from '@/atom/atom';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

const useUserDetailQuery = () => {
  const { userId } = useAuth();
  const setUser = useSetRecoilState(userState);

  return useQuery(['user', userId], () => getUserById(Number(userId)), {
    select: ({ data }) => data,
    onSuccess: (res) => {
      setUser((prev) => ({ ...prev, userId: res.userId, profileUrl: res.profileUrl }));
    },
  });
};

export default useUserDetailQuery;
