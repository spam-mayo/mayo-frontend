import type { FC } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
interface Posts {
  id?: number | null;
  title: string;
}

const maxPostPage = 10;

const getPosts = async (pageNum: number) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`);
  return data;
};

const Main: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
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
          <li key={post.id} className="post-title" onClick={() => setSelectedPost(post)}>
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
      </div>
      <hr />
    </div>
  );
};

export default Main;
