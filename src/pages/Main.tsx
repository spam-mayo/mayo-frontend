import { type FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import RecruitCard from '@/components/main/RecruitCard/RecruitCard';
import { getRecruits } from '@/api/recruit/recruitAPI';
import Pagination from '@/components/common/Pagination';
import '@/styles/main.scss';
import Search from '@/components/main/Search/Search';

const Main: FC = () => {
  const [activePage, setActivePage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getRecruits(activePage),
    queryKey: ['posts', activePage],
    select: ({ data }) => data,
    keepPreviousData: true,
  });

  const maxPostPage = data?.pageInfo?.totalPages ?? 0;

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  return (
    <main className="container">
      <Search />
      <ul className="row recruit-card-wrapper">
        {data?.data?.map((post) => (
          <li key={post.studyId} className="col-lg-3 col-md-6 col-sm-4">
            <RecruitCard recruit={post} />
          </li>
        ))}
      </ul>
      <Pagination activePage={activePage} setActivePage={setActivePage} pages={maxPostPage} />
    </main>
  );
};

export default Main;
