import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';

import Main from './pages/Main';
import './assets/global.scss';
import { Register } from './pages/auth/register';

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
  ]);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default App;
