import { postStudyComment } from '@/api/study/studyAPI';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const usePostStudyCommentMutation = () => {
  return useMutation(postStudyComment, {
    onSuccess: () => {
      alert('등록되었습니다!');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) alert('댓글이 공백일 수 없습니다.');
      }
    },
  });
};

export default usePostStudyCommentMutation;
