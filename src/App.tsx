import A from '@/components/A';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
      </QueryClientProvider>
    </div>
  );
};

export default App;
