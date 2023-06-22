import { patchRecruit } from '@/api/recruit/recruitAPI';
import { useMutation } from '@tanstack/react-query';

type MutationOption = {
  onSuccess: () => void;
};

const usePatchRecruitMutation = (options?: MutationOption) => {
  return useMutation(patchRecruit, {
    ...options,
  });
};

export default usePatchRecruitMutation;
