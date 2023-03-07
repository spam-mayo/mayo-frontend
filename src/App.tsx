import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PasswordChange } from '@/pages/auth/PasswordChange';
import { Login } from '@/pages/auth/Login';
import { Register } from '@/pages/auth/register';
import Main from '@/pages/Main';
import { Mypage } from '@/pages/Mypage';

const queryClient = new QueryClient();

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          // path: 'study/:studyId',
          // element: <Study />,
        },
        {
          // path: 'study/:studyId/create',
          // element: <StudyCreate />,
        },
        {
          // path: 'study/:studyId/edit',
          // element: <StudyEdit />,
        },
      ],
    },
    {
      path: '/auth/register',
      element: <Register />,
    },
    {
      path: '/auth/login',
      element: <Login />,
    },
    {
      path: '/auth/password',
      element: <PasswordChange />,
    },
    { path: '/user/mypage', element: <Mypage /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
