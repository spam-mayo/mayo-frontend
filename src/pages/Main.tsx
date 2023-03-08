import { type FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/api/axiosInstance';

import '@/styles/main.scss';

const maxPostPage = 10;

const getPosts = (pageNum: number) => axiosInstance.get(`/posts?_limit=12&_page=${pageNum}`).then(({ data }) => data);

const Main: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<{ id: number; title: string }[]>(['posts', currentPage], () => getPosts(currentPage), {
    staleTime: 2000,
  });

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  return (
    <div>
      Main Page
      <div className="cardList">
        {' '}
        {data.map((post) => (
          <div key={post.id}></div>
        ))}
      </div>
      <div className="pages">
        <button
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage((previousValue) => previousValue - 1);
          }}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= maxPostPage}
          onClick={() => {
            setCurrentPage((previousValue) => previousValue + 1);
          }}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default Main;
