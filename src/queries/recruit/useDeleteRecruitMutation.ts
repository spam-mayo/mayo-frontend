import { deleteRecruit } from '@/api/recruit/recruitAPI';
import { useMutation } from '@tanstack/react-query';

type MutationOption = {
  onSuccess: () => void;
};

const useDeleteRecruitMutation = (options: MutationOption) => {
  return useMutation(deleteRecruit, {
    ...options,
  });
};

export default useDeleteRecruitMutation;
