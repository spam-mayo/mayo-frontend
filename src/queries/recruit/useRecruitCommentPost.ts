import { postRecruitComment } from '@/api/recruit/recruitAPI';
import type { PostRecruitCommentReq } from '@/api/recruit/recruitTypes';
import { useMutation } from '@tanstack/react-query';

const useRecruitCommentPost = () => {
  const { mutate: postRecruitCom } = useMutation(postRecruitComment, {
    onSuccess: () => {
      alert('댓글이 등록되었습니다!');
    },
  });

  const postComment = ({ studyId, body }: { studyId: number; body: PostRecruitCommentReq }) => {
    postRecruitCom({ studyId, body });
  };

  return postComment;
};

export default useRecruitCommentPost;
