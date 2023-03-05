import { type FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/api/axiosInstance';
interface Posts {
  id?: number | null;
  title: string;
}

const maxPostPage = 10;

const getPosts = (pageNum: number) => axiosInstance.get(`/posts?_limit=12&_page=${pageNum}`).then(({ data }) => data);

const Main: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [selectedPost, setSelectedPost] = useState<Posts | null>(null);
  const { data, isLoading, isError, error } = useQuery<Posts>(['posts', currentPage], () => getPosts(currentPage), {
    staleTime: 2000,
  });

  if (isLoading) return <div>loading...</div>;

  if (isError)
    return (
      <>
        <div>에러남</div>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <div>
      Main Page
      <ul>
        {data.map((post) => (
          <li key={post.id} className="post-title">
            {post.title}
          </li>
        ))}
      </ul>
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
    </div>
  );
};

export default Main;
