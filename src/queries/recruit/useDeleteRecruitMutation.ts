import { deleteRecruit } from '@/api/recruit/recruitAPI';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useDeleteRecruitMutation = () => {
  const navigate = useNavigate();

  return useMutation(deleteRecruit, {
    onSuccess: () => {
      alert('삭제되었습니다!');
      navigate('/');
    },
  });
};

export default useDeleteRecruitMutation;
