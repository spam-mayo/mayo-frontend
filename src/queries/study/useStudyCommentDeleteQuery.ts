import { deleteStudyComment } from '@/api/study/studyAPI';
import { useMutation } from '@tanstack/react-query';

const useStudyCommentDelete = () => {
  const { mutate: deleteStudyCom } = useMutation(deleteStudyComment, {
    onSuccess: () => {
      alert('삭제되었습니다.');
    },
  });

  const deleteComment = (studyCommentId: number) => {
    deleteStudyCom(studyCommentId);
  };

  return deleteComment;
};

export default useStudyCommentDelete;
