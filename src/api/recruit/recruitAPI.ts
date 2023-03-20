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
