import type { FC } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import RecruitCard from '@/components/main/RecruitCard/RecruitCard';
import { getRecruits } from '@/api/recruit/recruitAPI';
import Pagination from '@/components/common/Pagination';
import '@/styles/main.scss';
import Search from '@/components/main/Search/Search';
import useDebounce from '@/hooks/useDebounce';
import type { Recruit } from '@/api/recruit/recruitTypes';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

const Main: FC = () => {
  const [search, setSearch] = useState<string | null>('');
  const [sort, setSort] = useState<string>('latest');
  const [category, setCategory] = useState<string>('');
  const [activePage, setActivePage] = useState(1);
  const { isLogin } = useAuth();
  const navigate = useNavigate();

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', sort, category, debouncedSearch, activePage],
    queryFn: async () => {
      return await getRecruits(activePage, category, sort, debouncedSearch);
    },
    select: (data) => data,
    keepPreviousData: true,
  });
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['search', sort, category, debouncedSearch, activePage],
  //   queryFn: async () => {
  //     if (category === '') {
  //       return await getSearchNofield(activePage, sort, search);
  //     }
  //     return await getSearch(activePage, category, sort, search);
  //   },

  //   select: ({ data }) => data,
  //   keepPreviousData: true,
  // });

  const maxPostPage = data?.pageInfo?.totalPages ?? 0;

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>에러남</div>;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (search !== '' && activePage !== 1) {
      setActivePage(1);
    }
  };

  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (activePage !== 1) {
      setActivePage(1);
    }
    setSort(e.target.value);
  };

  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (activePage !== 1) {
      setActivePage(1);
    }
    setCategory(e.target.value);
  };

  const onClickCreateStudy = () => {
    isLogin ? navigate('/study/create') : (alert('로그인이 필요합니다.'), navigate('/auth/login'));
  };

  return (
    <main className="container">
      <Search onChange={onChange} onChangeSort={onChangeSort} onChangeCategory={onChangeCategory} />
      <ul className="row recruit-card-wrapper">
        {data?.data?.map((post: Recruit) => (
          <li key={post.studyId} className="col-lg-3 col-md-6 col-sm-4">
            <Link to={`/recruit/detail/${post.studyId}`}>
              <RecruitCard recruit={post} />
            </Link>
          </li>
        ))}
      </ul>
      <button className="make-study" onClick={onClickCreateStudy}>
        +
      </button>
      <Pagination activePage={activePage} setActivePage={setActivePage} pages={maxPostPage} />
    </main>
  );
};

export default Main;
