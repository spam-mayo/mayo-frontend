import { patchRecruit } from '@/api/recruit/recruitAPI';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const usePatchRecruitMutation = (studyId: number) => {
  const navigate = useNavigate();

  return useMutation(patchRecruit, {
    onSuccess: () => {
      alert('수정되었습니다!');
      navigate(`/recruit/detail/${studyId}`);
    },
  });
};

export default usePatchRecruitMutation;
