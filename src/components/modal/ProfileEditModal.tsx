import Button from '@/components/common/Button';
import type { FC } from 'react';
import sample from '@/assets/images/sample.jpeg';
import './profileEditModal.scss';
import { BsTrash3 } from 'react-icons/bs';
import { BsCloudUpload } from 'react-icons/bs';

const ProfileEditModal: FC = () => {
  return (
    <div className="profile-edit-modal-container">
      <div className="profile-edit-modal-content">
        <div className="profile-title">
          <p>프로필 사진 등록</p>
          <hr />
        </div>
        <div className="profile-edit">
          <p>당신의 프로필 사진을 등록해주세요.</p>
          <img src={sample} alt="profile" />
          <div>
            <Button color="gray" outline>
              <BsCloudUpload />
              사진 올리기
            </Button>
            <Button color="gray" outline>
              <BsTrash3 />
              사진 지우기
            </Button>
          </div>
        </div>
        <div className="file-form-info">
          <p>jpeg/jpg, png, gif 파일만 업로드 가능합니다. </p>
        </div>
        <div className="button-container">
          <Button color="gray" outline>
            취소
          </Button>
          <Button>등록완료</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
