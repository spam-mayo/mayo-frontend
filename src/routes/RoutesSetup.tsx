import { Login } from '@/pages/auth/Login';
import { PasswordChange } from '@/pages/auth/PasswordChange';
import { Register } from '@/pages/auth/register';
import Main from '@/pages/Main';
import SampleButton from '@/pages/sample/SampleButton';
import { Mypage } from '@/pages/user/Mypage';
import { Routes, Route } from 'react-router-dom';

export const RoutesSetup = () => {
  return (
    <Routes>
      <Route path="/sample/button" element={<SampleButton />} />
      <Route path="/user/mypage" element={<Mypage />} />
      <Route path="/auth/password" element={<PasswordChange />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};
