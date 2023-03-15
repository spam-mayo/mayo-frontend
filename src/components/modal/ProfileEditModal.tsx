import Button from '@/components/common/Button';
import { type FC, useState, useRef, useCallback } from 'react';
import './profileEditModal.scss';
import { BsTrash3 } from 'react-icons/bs';
import { BsCloudUpload } from 'react-icons/bs';
//import { patchProfileImage } from '@/api/auth/authAPI';
//import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface Props {
  onClose: () => void;
  src: string;
}

const ProfileEditModal: FC<Props> = ({ onClose, src }: Props) => {
  const [profileImg, setProfileImg] = useState(src);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // const { mutate: profileImage } = useMutation(patchProfileImage, {
  //   onSuccess: (res) => {
  //     console.log('수정 완료');
  //     console.log(res);
  //   },
  //   onError: (err) => {
  //     if (axios.isAxiosError(err)) {
  //       console.log(err);
  //       if (err.response?.data.massage === 'Max file size 2MB') alert('파일이 2MB를 초과하였습니다.');
  //       // if (err.response?.data.massage === 'Invalid Values') alert('파일이 2MB를 초과하였습니다.');
  //     }
  //   },
  // });

  // const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!event.target.files) {
  //     return;
  //   }
  //   setProfileImg(URL.createObjectURL(event.target.files[0]));

  //   const userId = localStorage.getItem('userId');
  //   if (!userId) return;

  //   // const image = new FormData();
  //   // image.append('file', event.target.files[0]);

  //   // profileImage({ userId, image });
  //   const image = event.target.files[0];
  //   patchProfileImage({ userId, image });
  // };
  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    setProfileImg(URL.createObjectURL(event.target.files[0]));

    const userId = localStorage.getItem('userId');
    if (!userId) return;

    const file = event.target.files[0];

    patchProfileImage({ userId, file });
  };

  const patchProfileImage = async ({ userId, file }: { userId: string; file: File }) => {
    const formData = new FormData();
    formData.append('file', file);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const response = await axios.patch(`/api/users/${userId}/image`, formData, config);
    return response.data;
  };

  const onClickDeleteImage = () => {
    URL.revokeObjectURL(profileImg);
    setProfileImg('');
  };

  const onClickImgUpload = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  // const onClickPatchImg = () => {

  // };

  return (
    <div className="profile-edit-modal-container">
      <div className="profile-edit-modal-content">
        <div className="profile-title">
          <p>프로필 사진 등록</p>
          <hr />
        </div>
        <div className="profile-edit">
          <p>당신의 프로필 사진을 등록해주세요.</p>
          <img src={profileImg ? profileImg : src} alt="profile" />
          <input type="file" accept=".gif, .jpg, .jpeg, .png" onChange={onChangeImage} ref={inputRef} />
          <div>
            <Button color="gray" outline onClick={onClickImgUpload}>
              <BsCloudUpload />
              사진 올리기
            </Button>
            <Button color="gray" outline onClick={onClickDeleteImage}>
              <BsTrash3 />
              사진 지우기
            </Button>
          </div>
        </div>

        <div className="file-form-info">
          <p>jpeg/jpg, png, gif 파일만 업로드 가능합니다. </p>
        </div>
        <div className="button-container">
          <Button color="gray" outline onClick={onClose}>
            취소
          </Button>
          <Button>등록완료</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
