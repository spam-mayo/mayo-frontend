import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import RecruitCard from '@/components/main/RecruitCard/RecruitCard';
import { getRecruits } from '@/api/recruitAPI';
import '@/styles/main.scss';

const maxPostPage = 10;

const Main: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getRecruits(currentPage),
    queryKey: ['posts', currentPage],
    select: ({ data }) => data.data,
  });

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  return (
    <main className="container">
      <ul className="row recruit-card-wrapper">
        {data?.map((post) => (
          <li key={post.studyId} className="col-lg-3 col-md-4 col-sm-2">
            <RecruitCard data={post} />
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
    </main>
  );
};

export default Main;
