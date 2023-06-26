import { patchStudyNotice } from '@/api/study/studyAPI';
import { useMutation } from '@tanstack/react-query';

const useNoticeMutation = (onClose: () => void) => {
  return useMutation(patchStudyNotice, {
    onSuccess: () => {
      alert('공지사항이 등록되었습니다!');
      onClose();
    },
  });
};

export default useNoticeMutation;
