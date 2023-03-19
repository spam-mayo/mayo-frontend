import axiosInstance from '@/api/axiosInstance';
import type { Recruit } from '@/api/recruitTypes';

export const getRecruits = (pageNum: number) =>
  axiosInstance.get<{ data: Recruit[]; pageNum: number; pageInfo: { totalPages: number } }>(
    `/api/study?page=${pageNum}&size=12`
  );
