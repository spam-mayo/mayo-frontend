import Button from '@/components/common/Button';
import { type FC, useRef, useCallback, useState } from 'react';
import './profileEditModal.scss';
import UserProfileImg from '@/components/common/UserProfileImg';
import useAuth from '@/hooks/useAuth';
import usePatchProfileImgMutation from '@/queries/user/usePatchProfileImgMutation';

interface Props {
  onClose: () => void;
  src?: string;
}

const ProfileEditModal: FC<Props> = ({ onClose, src }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { userId } = useAuth();
  const [previewSrc, setPreviewSrc] = useState(src);
  const [profileSrc, setProfileSrc] = useState<File | null>(null);

  const { mutate: patchProfileImg } = usePatchProfileImgMutation(onClose);

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    if (previewSrc) URL.revokeObjectURL(previewSrc);

    const file = event.target.files[0];
    setPreviewSrc(URL.createObjectURL(file));
    setProfileSrc(file);
  };

  const onClickPatchImage = () => {
    if (!userId || !profileSrc) return;

    const image = new FormData();
    image.append('image', profileSrc);
    patchProfileImg({ userId, image });
  };

  const onClickDeleteImage = () => {
    if (!userId) return;

    if (previewSrc) URL.revokeObjectURL(previewSrc);

    const image = new FormData();
    image.append('image', '');
    patchProfileImg({ userId, image });
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
          <p>프로필 사진 업로드</p>
          <div />
          <button onClick={onClose}>X</button>
        </div>
        <hr />
        <div className="profile-edit">
          <p>당신의 프로필 사진을 등록해주세요.</p>
          <UserProfileImg src={previewSrc} />
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
          <Button onClick={onClickPatchImage}>저장</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
