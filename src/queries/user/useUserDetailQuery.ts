import { getUserById } from '@/api/auth/authAPI';
import type { GetUserRes } from '@/api/auth/types';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

type QueryOption = {
  onSuccess: (data: GetUserRes) => void;
};

const useUserDetailQuery = (options?: QueryOption) => {
  const { userId } = useAuth();

  return useQuery(['user', userId], () => getUserById(Number(userId)), {
    select: ({ data }) => data,
    ...options,
  });
};

export default useUserDetailQuery;
