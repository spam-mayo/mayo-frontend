import { deleteRecruitComment } from '@/api/recruit/recruitAPI';
import { useMutation } from '@tanstack/react-query';

const useRecruitCommentDelete = () => {
  const { mutate: deleteRecruitCom } = useMutation(deleteRecruitComment, {
    onSuccess: () => {
      alert('삭제되었습니다.');
    },
  });

  const deleteComment = (offerCommentId: number) => {
    deleteRecruitCom(offerCommentId);
  };

  return deleteComment;
};

export default useRecruitCommentDelete;
