import { postStudyComment } from '@/api/study/studyAPI';
import { useMutation } from '@tanstack/react-query';

const usePostStudyCommentMutation = () => {
  return useMutation(postStudyComment, {
    onSuccess: () => {
      alert('등록되었습니다!');
    },
  });
};

export default usePostStudyCommentMutation;
