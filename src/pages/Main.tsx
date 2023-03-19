import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import RecruitCard from '@/components/main/RecruitCard/RecruitCard';
import { getRecruits } from '@/api/recruitAPI';
import '@/styles/main.scss';
import Button from '@/components/common/Button';

const Main: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getRecruits(currentPage),
    queryKey: ['posts', currentPage],
    select: ({ data }) => data,
  });
  const maxPostPage = data?.pageInfo?.totalPages ?? 0;

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  return (
    <main className="container">
      <ul className="row recruit-card-wrapper">
        {data?.data?.map((post) => (
          <li key={post.studyId} className="col-lg-3 col-md-6 col-sm-4">
            <RecruitCard data={post} />
          </li>
        ))}
      </ul>
      <div className="recruit-card-pagination">
        <Button
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage((previousValue) => previousValue - 1);
          }}
          outline
        >
          Previous page
        </Button>
        <span>Page {currentPage}</span>
        <Button
          disabled={currentPage >= maxPostPage}
          onClick={() => {
            setCurrentPage((previousValue) => previousValue + 1);
          }}
          outline
        >
          Next page
        </Button>
      </div>
    </main>
  );
};

export default Main;
