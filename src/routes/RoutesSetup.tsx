import { Routes, Route } from 'react-router-dom';

import Main from '@/pages/Main';
import SampleButton from '@/pages/sample/SampleButton';
import { Register } from '@/pages/auth/register';
import { Login } from '@/pages/auth/Login';
import { PasswordChange } from '@/pages/auth/PasswordChange';
import { Mypage } from '@/pages/user/Mypage';

export const RoutesSetup = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sample/button" element={<SampleButton />} />
      <Route path="/user/mypage" element={<Mypage />} />
      <Route path="/auth">
        <Route path="password" element={<PasswordChange />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
