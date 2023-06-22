import { patchRecruit } from '@/api/recruit/recruitAPI';
import { useMutation } from '@tanstack/react-query';

const usePatchRecruitMutation = () => {
  return useMutation(patchRecruit, {
    onSuccess: () => {
      alert('구인글이 수정되었습니다.');
    },
  });
};

export default usePatchRecruitMutation;
