import { type FC, useState } from 'react';
import '@/assets/global.scss';
import SampleButton from './sample/SampleButton';
import Card from '@/components/common/Card';
import { axiosInstance } from '@/api/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import './pages/Main.module.scss';

export interface Posts {
  id?: number | null;
  title: string;
}
[];

const maxPostPage = 10;

const getPosts = (pageNum: number) => axiosInstance.get(`/posts?_limit=12&_page=${pageNum}`).then(({ data }) => data);

const Main: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useQuery<Posts>(['posts', currentPage], () => getPosts(currentPage), {
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
            <Card data={post} />
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
      </div>
      <hr />
      <SampleButton />
    </div>
  );
};

export default Main;
