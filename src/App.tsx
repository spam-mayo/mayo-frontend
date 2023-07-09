import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { RoutesSetup } from './routes/RoutesSetup';
import '@/styles/main.scss';
import type { ReactNode } from 'react';

const queryClient = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>{children}</RecoilRoot>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <div id="wrap">
          <Header />
          <RoutesSetup />
        </div>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
