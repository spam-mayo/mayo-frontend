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

export const getSearch = (pageNum: number, field: string, sort: string, search: string | null) =>
  axiosInstance.get(`api/study?page=${pageNum}&size=12&field=${field}&sort=${sort}&search=${search}`);
