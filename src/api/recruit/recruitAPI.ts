import axiosInstance from '@/api/axiosInstance';
import type { Recruit } from '@/api/recruit/recruitTypes';

interface PaginationResponse<T> {
  data: T;
  pageNum: number;
  pageInfo: {
    totalPages: number;
  };
}

export const getRecruits = (pageNum: number) =>
  axiosInstance.get<PaginationResponse<Recruit[]>>(`/api/study?page=${pageNum}&size=12`);

export const getSearch = (search: string | null, pageNum: number) =>
  axiosInstance.get(`api/study?page=${pageNum}&size=12&search=${search}`);
