import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/api/axiosInstance';

import Card, { CardProps } from '@/components/common/Card';
import SampleButton from './sample/SampleButton';
import '@/assets/global.scss';
import '@/pages/Main.module.scss';
import '@/styles/main.scss';

interface Props {
  id?: number | null;
  title: string;
  post: CardProps['post'];
}

const maxPostPage = 10;

const getPosts = (pageNum: number) => axiosInstance.get(`/posts?_limit=12&_page=${pageNum}`).then(({ data }) => data);

const Main: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<{ id: number; title: string }[]>(['posts', currentPage], () => getPosts(currentPage), {
    staleTime: 2000,
  });

  if (isLoading) return <div>loading...</div>;

  if (isError)
    return (
      <>
        <div>에러남</div>
      </>
    );

  return (
    <div>
      Main Page
      <div className="cardList">
        {data.map((post) => (
          <div key={post.id}>
            <Card post={post} />
          </div>
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
        <i className="icon-user-tie"></i>
        <i className="icon-calendar"></i>
        <i className="icon-checkbox-checked"></i>
      </div>
      <hr />
      <SampleButton />
    </div>
  );
};

export default Main;
