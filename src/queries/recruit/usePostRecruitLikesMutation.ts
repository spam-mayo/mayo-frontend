import { postRecruitLikes } from '@/api/recruit/recruitAPI';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type MutationOption = Omit<UseMutationOptions<AxiosResponse<unknown, unknown>, unknown, number, unknown>, 'mutationFn'>;

const usePostRecruitLikesMutation = (options?: MutationOption) => {
  return useMutation(postRecruitLikes, {
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) alert('로그인이 필요합니다.');
      }
    },
    ...options,
  });
};

export default usePostRecruitLikesMutation;
