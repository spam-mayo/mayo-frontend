import { patchStudyComment } from '@/api/study/studyAPI';
import { useMutation } from '@tanstack/react-query';

const usePatchStudyCommentMutation = () => {
  return useMutation(patchStudyComment, {
    onSuccess: () => {
      alert('수정되었습니다.');
    },
  });
};

export default usePatchStudyCommentMutation;
