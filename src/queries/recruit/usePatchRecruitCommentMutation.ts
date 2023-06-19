import { patchRecruitComment } from '@/api/recruit/recruitAPI';
import { useMutation } from '@tanstack/react-query';

const usePatchRecruitCommentMutation = () => {
  return useMutation(patchRecruitComment, {
    onSuccess: () => {
      alert('수정되었습니다.');
    },
  });
};

export default usePatchRecruitCommentMutation;
