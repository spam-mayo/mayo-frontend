import { Routes, Route } from 'react-router-dom';

import Main from '@/pages/Main';
import SampleButton from '@/pages/sample/SampleButton';
import { Register } from '@/pages/auth/register';
import { Login } from '@/pages/auth/Login';
import { PasswordChange } from '@/pages/auth/PasswordChange';
import { Mypage } from '@/pages/user/Mypage';

import StudyList from '@/pages/study/List';
import StudyDetail from '@/pages/study/Detail';
import SampleGrid from '@/pages/sample/SampleGrid';

export const RoutesSetup = () => {
  return (
    <Routes>
      <Route path="/sample/button" element={<SampleButton />} />
      <Route path="/sample/grid" element={<SampleGrid />} />
      <Route path="/user/mypage" element={<Mypage />} />
      <Route path="/auth/password" element={<PasswordChange />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/" element={<Main />} />

      <Route path="/study">
        <Route index element={<StudyList />} />
        <Route path=":studyId" element={<StudyDetail />} />
      </Route>
    </Routes>
  );
};
