import { postRecruitComment } from '@/api/recruit/recruitAPI';
import type { PostRecruitCommentReq } from '@/api/recruit/recruitTypes';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useRecruitCommentPost = () => {
  const { mutate: postRecruitCom } = useMutation(postRecruitComment, {
    onSuccess: () => {
      alert('댓글이 등록되었습니다!');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) alert('이미 스터디 신청을 했습니다.');
        if (err.response?.status === 401) alert('로그인이 필요합니다.');
      }
    },
  });

  const postComment = ({ studyId, body }: { studyId: number; body: PostRecruitCommentReq }) => {
    postRecruitCom({ studyId, body });
  };

  return postComment;
};

export default useRecruitCommentPost;
