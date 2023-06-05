import { patchStudyComment } from '@/api/study/studyAPI';
import type { StudyCommentEditReq } from '@/api/study/studyTypes';
import { useMutation } from '@tanstack/react-query';

const useStudyCommentPatch = () => {
  const { mutate: patchStudyCom } = useMutation(patchStudyComment, {
    onSuccess: () => {
      alert('수정되었습니다.');
    },
  });

  const patchComment = ({ studyCommentId, body }: { studyCommentId: number; body: StudyCommentEditReq }) => {
    patchStudyCom({ studyCommentId, body });
  };

  return patchComment;
};

export default useStudyCommentPatch;
