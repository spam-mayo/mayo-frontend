import { postStudyGroup } from '@/api/study/studyAPI';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const usePostStudyGroupMutation = () => {
  return useMutation(postStudyGroup, {
    onSuccess: () => {
      alert('스터디 신청이 완료됐습니다!');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) alert('이미 스터디 신청을 했습니다.');
        if (err.response?.status === 401) alert('로그인이 필요합니다.');
      }
    },
  });
};

export default usePostStudyGroupMutation;
