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
        if (err.response?.status === 404) alert('할 일을 먼저 작성해주세요.');
      }
    },
  });
};

export default usePostStudyCommentMutation;
