import { Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main';
import SampleButton from '@/pages/sample/SampleButton';
import Login from '@/pages/auth/Login';
import PasswordChange from '@/pages/auth/PasswordChange';
import Register from '@/pages/auth/Register';
import StudyCreate from '@/pages/study/Create';
import StudyEdit from '@/pages/study/Edit';
import RecruitCreate from '@/pages/recruit/Create';
import RecruitEdit from '@/pages/recruit/Edit';
import StudyList from '@/pages/study/List';
import StudyDetail from '@/pages/study/Detail';
import SampleGrid from '@/pages/sample/SampleGrid';
import MyPage from '@/pages/user/MyPage';
import UserInfo from '@/pages/user/UserInfo';
import UserApplyStudy from '@/pages/user/UserApplyStudy';
import UserCreateStudy from '@/pages/user/UserCreateStudy';
import UserStudy from '@/pages/user/UserStudy';
import UserLikeStudy from '@/pages/user/UserLikeStudy';
import OauthToken from '@/pages/OauthToken';
import RecruitDetail from '@/pages/recruit/Detail';

export const RoutesSetup = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth">
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="password" element={<PasswordChange />} />
        <Route path="loading" element={<OauthToken />} />
      </Route>
      <Route path="/user/mypage" element={<MyPage />}>
        <Route index element={<UserInfo />} />
        <Route path="study" element={<UserStudy />} />
        <Route path="apply" element={<UserApplyStudy />} />
        <Route path="create" element={<UserCreateStudy />} />
        <Route path="like" element={<UserLikeStudy />} />
      </Route>
      <Route path="/study">
        <Route index element={<StudyList />} />
        <Route path=":studyId" element={<StudyDetail />} />
        <Route path="create" element={<StudyCreate />} />
        <Route path="edit" element={<StudyEdit />} />
      </Route>
      <Route path="/recruit">
        <Route path="detail/:studyId" element={<RecruitDetail />} />
        <Route path="create/:studyId" element={<RecruitCreate />} />
        <Route path="edit/:studyId" element={<RecruitEdit />} />
      </Route>

      {/* 개발 후 삭제할 샘플 페이지 */}
      <Route path="/sample/button" element={<SampleButton />} />
      <Route path="/sample/grid" element={<SampleGrid />} />
    </Routes>
  );
};
