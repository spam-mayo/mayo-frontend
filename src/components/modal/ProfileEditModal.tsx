import Button from '@/components/common/Button';
import { type FC, useState, useRef, useCallback } from 'react';
import './profileEditModal.scss';
import { patchProfileImage } from '@/api/auth/authAPI';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface Props {
  onClose: () => void;
  src: string;
}

const ProfileEditModal: FC<Props> = ({ onClose, src }: Props) => {
  const [profileImg, setProfileImg] = useState(src);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { mutate: profileImage } = useMutation(patchProfileImage, {
    onSuccess: () => {
      alert('수정 완료');
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        const statusCode = err.response?.status;
        const errorMessage = err.response?.data?.message;
        if (statusCode === 400 && errorMessage === 'Max file size 2MB') {
          setProfileImg(src);
          alert('파일이 2MB를 초과하였습니다.');
        }
        if (statusCode === 400 && errorMessage === 'Invalid Values') {
          setProfileImg(src);
          alert('jpg/jpeg, png, gif 파일만 업로드 가능합니다.');
        }
      }
    },
  });

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    setProfileImg(URL.createObjectURL(event.target.files[0]));

    const userId = localStorage.getItem('userId');
    if (!userId) return;

    const file = event.target.files[0];
    const image = new FormData();
    image.append('image', file);
    profileImage({ userId, image });
  };

  const onClickDeleteImage = () => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    const image = new FormData();
    image.append('image', '');
    profileImage({ userId, image });
    setProfileImg('https://spam-image.s3.ap-northeast-2.amazonaws.com/basic.png');
  };

  const onClickImgUpload = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <div className="profile-edit-modal-container">
      <div className="profile-edit-modal-content">
        <div className="profile-title">
          <p>프로필 사진 등록</p>
          <div />
          <button onClick={onClose}>X</button>
        </div>
        <hr />
        <div className="profile-edit">
          <p>당신의 프로필 사진을 등록해주세요.</p>
          <img src={profileImg ? profileImg : src} alt="profile" />
          <input type="file" accept=".gif, .jpg, .jpeg, .png" onChange={onChangeImage} ref={inputRef} />
          <div>
            <Button color="gray" outline onClick={onClickImgUpload}>
              <i className="icon-cloud-upload" />
              사진 올리기
            </Button>
            <Button color="gray" outline onClick={onClickDeleteImage}>
              <i className="icon-bin" />
              사진 지우기
            </Button>
          </div>
        </div>
        <div className="file-form-info">
          <p>jpeg/jpg, png, gif 파일만 업로드 가능합니다. </p>
        </div>
        <div className="button-container">
          <Button onClick={onClose}>확인</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
