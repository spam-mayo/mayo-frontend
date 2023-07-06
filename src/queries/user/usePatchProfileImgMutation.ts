import { patchProfileImage } from '@/api/auth/authAPI';
import { userState } from '@/atom/atom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';

const usePatchProfileImgMutation = (onClose: () => void) => {
  const setUser = useSetRecoilState(userState);

  return useMutation(patchProfileImage, {
    onSuccess: (res) => {
      alert('수정 완료');
      const profileUrl = res?.data?.profileUrl;
      setUser((prev) => {
        return prev ? { ...prev, profileUrl } : prev;
      });
      onClose();
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        const statusCode = err.response?.status;
        const errorMessage = err.response?.data?.message;
        if (statusCode === 400 && errorMessage === 'Max file size 2MB') {
          alert('파일이 2MB를 초과하였습니다.');
        }
        if (statusCode === 400 && errorMessage === 'Invalid Values') {
          alert('jpg/jpeg, png, gif 파일만 업로드 가능합니다.');
        }
      }
    },
  });
};

export default usePatchProfileImgMutation;
