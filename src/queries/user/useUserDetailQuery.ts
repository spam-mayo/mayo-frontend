import { getUserById } from '@/api/auth/authAPI';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const useUserDetailQuery = () => {
  const { userId } = useAuth();

  return useQuery(['user', userId], () => getUserById(Number(userId)), {
    select: ({ data }) => data,
  });
};

export default useUserDetailQuery;
