import type { FC } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import RecruitCard from '@/components/main/RecruitCard/RecruitCard';
import { getSearch } from '@/api/recruit/recruitAPI';
import Pagination from '@/components/common/Pagination';
import '@/styles/main.scss';
import Search from '@/components/main/Search/Search';
import useDebounce from '@/hooks/useDebounce';
import type { Recruit } from '@/api/recruit/recruitTypes';

const Main: FC = () => {
  const [search, setSearch] = useState<string | null>('');
  const [activePage, setActivePage] = useState(1);

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', debouncedSearch, activePage],
    queryFn: () => getSearch(search, activePage),
    select: ({ data }) => data,
    keepPreviousData: true,
  });

  const maxPostPage = data?.pageInfo?.totalPages ?? 0;

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="container">
      <Search onChange={onChange} />
      <ul className="row recruit-card-wrapper">
        {data?.data?.map((post: Recruit) => (
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
