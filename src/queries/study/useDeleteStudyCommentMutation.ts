import { deleteStudyComment } from '@/api/study/studyAPI';
import { useMutation } from '@tanstack/react-query';

const useDeleteStudyCommentMutation = () =>
  useMutation(deleteStudyComment, {
    onSuccess: () => {
      alert('삭제되었습니다.');
    },
  });

export default useDeleteStudyCommentMutation;
