import { postRecruitLikes } from '@/api/recruit/recruitAPI';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useRecruitLikesPost = (onToggleHeart: () => void) => {
  const { mutate: postRecruitLike } = useMutation(postRecruitLikes, {
    onSuccess: () => {
      onToggleHeart();
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) alert('로그인이 필요합니다.');
      }
    },
  });

  const postLikes = (studyId: number) => {
    postRecruitLike(studyId);
  };

  return postLikes;
};

export default useRecruitLikesPost;
