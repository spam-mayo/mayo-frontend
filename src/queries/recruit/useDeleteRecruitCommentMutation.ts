import { deleteRecruitComment } from '@/api/recruit/recruitAPI';
import { useMutation } from '@tanstack/react-query';

const useDeleteRecruitCommentMutation = () => {
  const { mutate: deleteRecruitCom } = useMutation(deleteRecruitComment, {
    onSuccess: () => {
      alert('삭제되었습니다.');
    },
  });

  return deleteRecruitCom;
};

export default useDeleteRecruitCommentMutation;
