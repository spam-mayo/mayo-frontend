import { deleteStudy } from '@/api/study/studyAPI';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useDeleteStudyMutation = () => {
  const navigate = useNavigate();

  return useMutation(deleteStudy, {
    onSuccess: () => {
      alert('삭제되었습니다!');
      navigate('/');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) alert('스터디원이 존재하면 삭제가 불가능합니다.');
      }
    },
  });
};

export default useDeleteStudyMutation;
