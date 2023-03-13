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

const RoutesSetup = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth">
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="password" element={<PasswordChange />} />
      </Route>
      <Route path="/user/mypage" element={<MyPage />} />
      <Route path="/study">
        <Route index element={<StudyList />} />
        <Route path=":studyId" element={<StudyDetail />} />
        <Route path="create" element={<StudyCreate />} />
        <Route path="edit" element={<StudyEdit />} />
      </Route>
      <Route path="/recruit">
        <Route path="create" element={<RecruitCreate />} />
        <Route path="edit" element={<RecruitEdit />} />
      </Route>

      {/* 개발 후 삭제할 샘플 페이지 */}
      <Route path="/sample/button" element={<SampleButton />} />
      <Route path="/sample/grid" element={<SampleGrid />} />
    </Routes>
  );
};

export default RoutesSetup;
