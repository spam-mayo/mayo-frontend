import { deleteStudyNotice } from '@/api/study/studyAPI';
import { useMutation } from '@tanstack/react-query';

const useDeleteNoticeMutation = () => {
  return useMutation(deleteStudyNotice, {
    onSuccess: () => {
      alert('삭제되었습니다.');
    },
  });
};

export default useDeleteNoticeMutation;
