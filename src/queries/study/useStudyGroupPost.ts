import { postStudyGroup } from '@/api/study/studyAPI';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useStudyGroupPost = () => {
  const { mutate: postStudyJoin } = useMutation(postStudyGroup, {
    onSuccess: () => {
      alert('스터디 신청이 완료됐습니다!');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) alert('이미 스터디 신청을 했습니다.');
      }
    },
  });

  const studyJoin = (studyId: number) => {
    postStudyJoin(studyId);
  };

  return studyJoin;
};

export default useStudyGroupPost;
