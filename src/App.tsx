import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Register } from './pages/auth/Register';
import Main from './pages/Main';

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
      path: '/user/join',
      element: <Register />,
    },
  ]);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
