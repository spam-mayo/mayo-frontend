import { patchRecruitComment } from '@/api/recruit/recruitAPI';
import type { PostRecruitCommentReq } from '@/api/recruit/recruitTypes';
import { useMutation } from '@tanstack/react-query';

const useRecruitCommentPatch = () => {
  const { mutate: patchRecruitCom } = useMutation(patchRecruitComment, {
    onSuccess: () => {
      alert('수정되었습니다.');
    },
  });

  const patchComment = ({ offerCommentId, body }: { offerCommentId: number; body: PostRecruitCommentReq }) => {
    patchRecruitCom({ offerCommentId, body });
  };

  return patchComment;
};

export default useRecruitCommentPatch;
