import A from '@/components/A';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => {
  const onClick = () => {
    //
  };

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        Spam Mayo Frontend
        <A />
        <button onClick={onClick}>BTN</button>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
};

export default App;
